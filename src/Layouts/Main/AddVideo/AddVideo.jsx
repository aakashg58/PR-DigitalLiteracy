import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { doc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { addVideoData, updateData } from '../../../firebase/firebaseReadWrite';
import './styles.css';
import Popup from '../../../components/Popups/Popups';
import Button from '../../../components/Buttons/Button';

import MessageInputSection, { validateMessageInputSection } from './Layouts/MessageInputSection';
import VideoInputSection, { validateVideoInputSection } from './Layouts/VideoInputSection';
import VideoSection from './Layouts/VideoSection';
import { convertSecondsToTimestamp, convertTimestampToSeconds } from './util/timeStampConversion';

function AddVideo({ editVideoData }) {
	// User Input Values
	const [url, setUrl] = useState(editVideoData?.url || '');
	const [tags, setTags] = useState(editVideoData?.tags || []);
	const [operatingSystem, setOs] = useState(editVideoData?.operating_system || '');

	const [category, setCategory] = useState(editVideoData?.category || '');
	const [subtopic, setSubtopic] = useState(editVideoData?.subtopic || '');

	const [messages, setMessage] = useState(editVideoData?.messages || ['']);
	const [stopTimes, setStopTimes] = useState(
		editVideoData?.stopTimes?.map((time) => convertSecondsToTimestamp(time)) || [''],
	);
	// React-Player
	const reactVideoPlayerRef = useRef();

	// Video Segmentation
	const [isChapterSegmentAvailable, setIsChapterSegmentAvailable] = useState(false);
	const [isChapterSegmentChecked, setIsChapterSegmentChecked] = useState(false);
	const handleChaperCheckboxChange = () => {
		setIsChapterSegmentChecked(!isChapterSegmentChecked);
	};

	const [segmentMessages, setSegmentMessages] = useState(['']);
	const [segmentStopTimes, setSegmentStopTimes] = useState(['']);

	// Popup Message
	const [popup, setPopup] = useState(null);

	const resetData = () => {
		setUrl('');
		setTags([]);
		setOs('');
		setCategory('');
		setSubtopic('');
		setStopTimes(['']);
		setMessage(['']);
		setIsChapterSegmentChecked(false);
		setIsChapterSegmentAvailable(false);
	};

	const handleAddSegment = () => {
		setMessage([...messages, '']);
		setStopTimes([...stopTimes, '']);
	};

	const handleRemoveSegment = (index) => {
		const messagedata = [...messages];
		messagedata.splice(index, 1);
		setMessage(messagedata);
		const stopdata = [...stopTimes];
		stopdata.splice(index, 1);
		setStopTimes(stopdata);

		for (let i = 0; i < messagedata.length; i += 1) {
			let textField = document.getElementById(`stopTimeTextField_${i}`);
			if (textField) {
				textField.value = `${Math.floor(stopdata[i] / 60)}:${String(stopdata[i] % 60).padStart(2, '0')}`;
			}
			textField = document.getElementById(`confirmationTextField_${i}`);
			if (textField) {
				textField.value = messagedata[i];
			}
		}
	};

	const handleMessagesChange = (value, index) => {
		const message = [...messages];
		message[index] = value;
		setMessage(message);
	};

	const handleStopTimesChange = (value, index) => {
		const stopTime = [...stopTimes];
		stopTime[index] = value;
		setStopTimes(stopTime);
	};

	const validateStopTimes = (value, index) => {
		const validInput = convertTimestampToSeconds(value);

		// Check if validInput is not a number (NaN) or null
		if (typeof validInput !== 'number') {
			const resetField = [...stopTimes];
			resetField[index] = '';
			setStopTimes(resetField);
		}
	};

	const sortStopTimes = () => {
		for (let i = 0; i < messages.length - 1; i += 1) {
			for (let j = i + 1; j < messages.length; j += 1) {
				if (convertTimestampToSeconds(stopTimes[i]) > convertTimestampToSeconds(stopTimes[j])) {
					// Swap elements if they are in the wrong order
					const temp = stopTimes[i];
					stopTimes[i] = stopTimes[j];
					stopTimes[j] = temp;
					const temp2 = messages[i];
					messages[i] = messages[j];
					messages[j] = temp2;
				}
			}
		}
		setStopTimes(stopTimes);
		setMessage(messages);
	};

	const handleGetTimestamp = (index) => {
		if (reactVideoPlayerRef) {
			const currentTime = reactVideoPlayerRef.current.getDuration();
			const formattedTime = `${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, '0')}`;

			const stopTime = [...stopTimes];
			stopTime[index] = formattedTime;
			setStopTimes(stopTime);
		}
	};

	const validateUrlFunction = async () => {
		if (url) {
			// Prevent videos without segments from having box checked
			setIsChapterSegmentChecked(false);
			try {
				// check if the url is a valid youtube video and get the video id for the api
				const videoIdRegex =
					/(?:(?:https?:\/\/)?(?:www\.)?)?youtu(?:\.be\/|be.com\/(?:watch\?(?:.*&)?v=|(?:embed|v)\/))([\w'-]+)/i;
				const match = url.match(videoIdRegex);
				if (!match || !match[1]) {
					setUrl('');
					setIsChapterSegmentAvailable(false);
					setPopup({
						text: 'Please enter a valid YouTube video URL.',
						visible: true,
						title: 'Oops...',
						icon: 'error',
					});
					return;
				}

				// fetch the data from the youtube api
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${match[1]}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
				);

				// parse the data for the chapters
				const data = await response.json();
				const video = data.items[0];

				const desc = video.snippet.description;
				const lines = desc.split('\n');
				const filteredLines = lines.filter((line) => /^\s*\d+:\d+/.test(line));

				if (filteredLines.length > 0) {
					// if there are no chapters available, don't allow the user to check the box
					setIsChapterSegmentAvailable(true);

					const updatedStopTimes = filteredLines.map((line) => convertTimestampToSeconds(line.split(' ')[0]));

					// removes the first index of the array
					updatedStopTimes.shift();
					const updatedMessages = Array.from(
						{ length: updatedStopTimes.length },
						() => 'Are you following along so far?',
					);

					setSegmentStopTimes(updatedStopTimes);
					setSegmentMessages(updatedMessages);
				} else {
					setIsChapterSegmentAvailable(false);
				}
			} catch (error) {
				setPopup({
					text: `Error fetching segments:', ${error}`,
					visible: true,
					icon: 'error',
				});
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateVideoInputSection(url, operatingSystem, category, subtopic, setPopup)) {
			return;
		}

		const videoDataPayload = {
			url,
			tags,
			operating_system: operatingSystem,
			category,
			subtopic,
		};

		try {
			if (isChapterSegmentChecked) {
				e.preventDefault();
				videoDataPayload.stopTimes = segmentStopTimes;
				videoDataPayload.messages = segmentMessages;

				resetData();

				setPopup({
					text: 'Video added successfully!',
					visible: true,
					icon: 'success',
				});
			} else {
				if (!validateMessageInputSection(messages, setPopup, stopTimes, reactVideoPlayerRef)) {
					return;
				}

				sortStopTimes();

				e.preventDefault();
				videoDataPayload.stopTimes = stopTimes.map((stopTime) => convertTimestampToSeconds(stopTime));
				videoDataPayload.messages = messages;

				if (editVideoData) {
					// only add key when updating the video
					const docRef = doc(db, 'youtube-videos', editVideoData.key);

					await updateData(docRef, videoDataPayload);
				} else {
					await addVideoData('youtube-videos', videoDataPayload);
					resetData();
				}

				setPopup({
					text: 'Video added successfully!',
					visible: true,
					icon: 'success',
				});
			}
		} catch (error) {
			setPopup({
				text: `Error adding video:', ${error}`,
				visible: true,
				icon: 'error',
			});
		}
	};

	return (
		<div className="lg:grid lg:grid-cols-5">
			<section className="mb-8 lg:mb-0 lg:col-span-2 lg:order-2">
				<VideoSection reactVideoPlayerRef={reactVideoPlayerRef} url={url} />
			</section>
			<section className="col-span-3 mb-8 flex flex-col gap-4 px-4">
				<VideoInputSection
					url={url}
					setUrl={setUrl}
					validateUrlFunction={validateUrlFunction}
					tags={tags}
					setTags={setTags}
					operatingSystem={operatingSystem}
					setOs={setOs}
					category={category}
					setCategory={setCategory}
					subtopic={subtopic}
					setSubtopic={setSubtopic}
					setPopup={setPopup}
				/>

				<MessageInputSection
					handleAddSegment={handleAddSegment}
					handleRemoveSegment={handleRemoveSegment}
					isChapterSegmentAvailable={isChapterSegmentAvailable}
					isChapterSegmentChecked={isChapterSegmentChecked}
					messages={messages}
					stopTimes={stopTimes}
					handleStopTimesChange={handleStopTimesChange}
					validateStopTimes={validateStopTimes}
					handleMessagesChange={handleMessagesChange}
					handleGetTimestamp={handleGetTimestamp}
					handleChaperCheckboxChange={handleChaperCheckboxChange}
				/>

				<div className="flex">
					{editVideoData ? (
						<Button onChangeFunction={handleSubmit} text="Update" id="addVideoUpdateButton" />
					) : (
						<Button onChangeFunction={handleSubmit} text="Submit" id="addVideoSubmitButton" />
					)}
				</div>
			</section>
			{popup && popup.visible && (
				<Popup title={popup.title} icon={popup.icon} handleClose={() => setPopup(null)} text={popup.text} />
			)}
		</div>
	);
}

export default AddVideo;

AddVideo.propTypes = {
	editVideoData: PropTypes.shape({
		url: PropTypes.string,
		tags: PropTypes.arrayOf(PropTypes.string),
		operating_system: PropTypes.string,
		category: PropTypes.string,
		subtopic: PropTypes.string,
		messages: PropTypes.arrayOf(PropTypes.string),
		stopTimes: PropTypes.arrayOf(PropTypes.number),
		key: PropTypes.string,
	}),
};

AddVideo.defaultProps = {
	editVideoData: null,
};
