import elasticlunr from 'elasticlunr';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';
import { Box } from '@mui/material';
import Popup from '../Popup/Popup';
import { Colors } from '../../../constants/Colors';
import './VideoSection.css';
import AdminVideoControls from './AdminVideoControls';
import { useAuth } from '../../../firebase/AuthContext';

export default function VideoSection({ videoValue, transcriptValue, subtopicValue, tags, appliedFilterTags }) {
	const { currentUser } = useAuth();
	// this is just a parameter to hide videos without a subtopic during testing
	const showSubtopicUndefinedVideos = true;

	const [videos, setVideos] = useState(videoValue || []);
	const [playerRefs, setPlayerRefs] = useState([]);
	const [popup, setPopup] = useState(null);
	const [searchIndex, setSearchIndex] = useState(null);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const combinedData = videoValue.map((video) => {
			const transcript = transcriptValue.find((t) => t.key === video.key);
			return {
				...video,
				transcript: transcript ? transcript.transcript : 'No transcript available',
			};
		});

		const index = elasticlunr();
		index.addField('transcript');
		index.setRef('key');

		combinedData.forEach((video) => {
			index.addDoc({
				key: video.key,
				transcript: video.transcript,
			});
		});

		setSearchIndex(index);
		setPlayerRefs(combinedData.map(() => React.createRef()));
		setVideos(combinedData);
	}, [videoValue, transcriptValue]);

	useEffect(() => {
		if (searchIndex && tags.length > 0) {
			const results = searchIndex.search(tags.join(' '), {
				fields: {
					transcript: { boost: 1 },
				},
			});

			const resultsWithScore = results.map((result) => ({
				key: result.ref,
				score: result.score,
			}));

			setSearchResults(resultsWithScore);
		} else {
			setSearchResults([]);
		}
	}, [tags, searchIndex]);

	const handleProgress = (progress, video, playerRef) => {
		const currentTime = Math.floor(progress.playedSeconds);
		if (video.stopTimes && video.stopTimes.includes(currentTime)) {
			const playerState = playerRef.current.getInternalPlayer().getPlayerState();
			if (playerState === 1) {
				playerRef.current.getInternalPlayer().pauseVideo();
				if (document.fullscreenElement) {
					document.exitFullscreen();
				}
				const currentTimeIndex = video.stopTimes.indexOf(currentTime);
				const text = currentTimeIndex !== -1 ? video.messages[currentTimeIndex] : '';

				let prevSegmentTime = 0;
				if (currentTimeIndex > 0 && video.stopTimes[currentTimeIndex - 1]) {
					prevSegmentTime = video.stopTimes[currentTimeIndex - 1];
				}
				setPopup({
					text,
					prevSegmentTime,
					visible: true,
					playerRef,
				});
			}
		}
	};

	const filteredVideos = [];
	const uniqueUrls = new Set();

	videos.forEach((video) => {
		const contentTypeMatch = appliedFilterTags.includes(video.category);
		const osMatch =
			video.operating_system.includes('All') ||
			appliedFilterTags.includes(video.operating_system) ||
			(Array.isArray(video.operating_system) && video.operating_system.some((os) => appliedFilterTags.includes(os)));

		const subtopicMatch =
			(showSubtopicUndefinedVideos && !video.subtopic) ||
			(video.subtopic && (subtopicValue.length === 0 || subtopicValue === video.subtopic));

		const searchMatch = searchResults.length === 0 || searchResults.some((result) => result.key === video.key);

		if (contentTypeMatch && osMatch && subtopicMatch && searchMatch && !uniqueUrls.has(video.url)) {
			const searchResult = searchResults.find((result) => result.key === video.key);
			const score = searchResult ? searchResult.score : 0;
			uniqueUrls.add(video.url);
			filteredVideos.push({ ...video, score });
		}
	});

	// Sort filteredVideos by score in descending order
	filteredVideos.sort((a, b) => b.score - a.score);

	if (filteredVideos.length > 0) {
		return (
			<div className="h-full w-full grid grid-cols-1 gap-4 md:gap-6 max-w-screen-xl">
				{filteredVideos.map((video, index) => (
					<div key={video.key} className="flex flex-col">
						<div className="flex flex-col md:flex-row md:gap-2 mb-4">
							<div className="h-72 md:h-full md:w-6/12 mb-4 md:mb-0">
								<ReactPlayer
									key={video.key}
									ref={playerRefs[index]}
									className="react-player"
									url={video.url}
									width="100%"
									height="100%"
									onProgress={(progress) => handleProgress(progress, video, playerRefs[index])}
									config={{
										youtube: {
											playerVars: {
												controls: 1,
												showinfo: 1,
											},
										},
									}}
								/>
							</div>
							<div className="flex-1">
								<h1 className="text-2xl mb-2">
									{transcriptValue.find((t) => t.key === video.key)?.title ?? 'Title not found...'}
								</h1>
								<div className="h-72 overflow-y-auto p-4 bg-backgroundColor border border-gray-200">
									{transcriptValue.find((t) => t.key === video.key)?.transcript ?? 'Transcript not found...'}
								</div>
							</div>
						</div>
						{currentUser && currentUser.uid === process.env.REACT_APP_ADMIN_UID && (
							<AdminVideoControls videoId={video.key} />
						)}
					</div>
				))}
				{popup && popup.visible && (
					<Popup
						text={popup.text}
						handleResume={() => {
							popup.visible = false;
							setTimeout(() => setPopup(popup.visible), 1000); // prevents repeated popup
							popup.playerRef.current.getInternalPlayer().playVideo();
						}}
						handleRestart={() => {
							popup.visible = false;
							popup.playerRef.current.getInternalPlayer().seekTo(0);
							popup.playerRef.current.getInternalPlayer().playVideo();
						}}
						handleRestartFrom={() => {
							popup.visible = false;
							setTimeout(() => setPopup(popup.visible), 1000); // prevents repeated popup & prev segment popup
							popup.playerRef.current.getInternalPlayer().seekTo(popup.prevSegmentTime);
							popup.playerRef.current.getInternalPlayer().playVideo();
						}}
					/>
				)}
			</div>
		);
	}

	return (
		<Box
			sx={{
				fontFamily: 'Inria Sans',
				color: Colors.primaryColor,
				textAlign: 'center',
				fontWeight: '700',
				padding: '2rem',
				fontSize: {
					md: '2rem',
					sm: '2.25rem',
					xs: '1.25rem',
				},
				marginBottom: '10%',
			}}
		>
			No results found
		</Box>
	);
}

VideoSection.propTypes = {
	videoValue: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			operating_system: PropTypes.arrayOf(PropTypes.string).isRequired,
			subtopic: PropTypes.string,
			stopTimes: PropTypes.arrayOf(PropTypes.number),
			messages: PropTypes.arrayOf(PropTypes.string),
		}),
	).isRequired,
	transcriptValue: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			title: PropTypes.string,
			transcript: PropTypes.string,
		}),
	).isRequired,
	subtopicValue: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	appliedFilterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
