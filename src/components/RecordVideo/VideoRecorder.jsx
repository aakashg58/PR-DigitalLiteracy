import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useState } from 'react';

import { TextField } from '@mui/material';
import Timer from '../Timer/Timer';
import Button from '../Buttons/Button';
import { multiLineInputStyle } from '../../Layouts/Main/ResumeBuilder/styles';

//import { useEffect, useRef } from 'react';

const VideoRecorder = () => {
	const [submissionname, setsubmit] = useState('');
	const [value, setValue] = useState('');
	const [submit, setSubmit] = useState('no-upload');
	const [name, setName] = useState('');

	const { status, error, startRecording, stopRecording, mediaBlobUrl, previewStream, clearBlobUrl } =
		useReactMediaRecorder({
			video: true,
			askPermissionOnMount: true,
		});

	const resetSubmit = () => {
		setSubmit('no-upload');
		console.log('resetting');
	};

	const sleep = (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const uploadVideo = async (blobUrl) => {
		if (!name) {
			alert('Please fill in name before submission.');
			return;
		}
		setsubmit(name);
		const storage = getStorage();
		const videoRef = ref(storage, 'UserVideo/' + name + '/videoclip');
		const response = await fetch(blobUrl);
		const blob = await response.blob();
		console.log(blob);
		uploadBytes(videoRef, blob);

		const textRef = ref(storage, 'UserVideo/' + name + '/videotext');
		const textblob = new Blob([value], { type: '.txt' });
		uploadBytes(textRef, textblob);

		setSubmit('upload-successful');
	};

	const deleteVideo = async () => {
		const storage = getStorage();
		setSubmit('no-upload');
		console.log(submissionname + ' submitted');
		const desertRef = ref(storage, 'UserVideo/' + submissionname + '/videoclip');
		deleteObject(desertRef)
			.then(() => {
				// File deleted successfully
			})
			.catch((error) => {
				console.log('failed to delete file UserVideo/' + submissionname);
			});
		const deserttxt = ref(storage, 'UserVideo/' + submissionname + '/videotext');
		deleteObject(deserttxt)
			.then(() => {
				// File deleted successfully
			})
			.catch((error) => {
				console.log('failed to delete file UserAudio/' + submissionname);
			});
	};

	return (
		<div className="border rounded-lg border-sky-500 p-8 bg-sky-500 flex items-center">
			<div className="flex-1 w-100">
				<p className="text-4xl font-bold">Currently Recording Video</p>

				{error && alert('Conflicting Media. Please close any tabs using your camera or audio devices')}

				<p>{status}</p>
				{/* Video preview */}
				{status === 'recording' && (
					<video
						style={{ width: '400px' }}
						ref={(video) => {
							if (video) {
								video.srcObject = previewStream;
							}
						}}
						autoPlay
						muted
					/>
				)}

				{status === 'recording' && <Timer />}

				{status === 'stopped' && <video style={{ width: '400px' }} src={mediaBlobUrl} controls autoPlay loop />}

				{status === 'idle' || status === 'stopped' ? (
					<Button
						onChangeFunction={() => {
							startRecording();
							resetSubmit();
						}}
						text="Start Recording"
						className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
						id="startVideoRecording"
					/>
				) : null}

				{status === 'recording' && (
					<Button
						onChangeFunction={stopRecording}
						text="Stop Recording"
						className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
						id="stopVideoRecording"
					/>
				)}

				{status === 'stopped' && (
					<button>
						<a
							href={mediaBlobUrl}
							className="m-2 px-10 py-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
							download="Video.mp4"
						>
							Download
						</a>
					</button>
				)}

				{status === 'stopped' && (
					<Button
						onChangeFunction={() => {
							clearBlobUrl();
							resetSubmit();
						}}
						text="Delete Recording"
						className="m-2 p-2 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-400"
						id="deleteVideoRecording"
					/>
				)}

				{status === 'stopped' && (
					<Button
						onChangeFunction={() => uploadVideo(mediaBlobUrl)}
						text="Send to Organization"
						className="m-2 p-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-400"
						id="uploadVideo"
					/>
				)}

				{status === 'stopped' && submit === 'upload-successful' ? (
					<Button
						onChangeFunction={() => deleteVideo()}
						text="Undo"
						className="m-2 p-2 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-400"
						id="delete uploaded video recording"
					/>
				) : null}
			</div>
			<div className="flex-2 w-50">
				{status === 'stopped' && (
					<TextField
						sx={multiLineInputStyle}
						InputProps={{
							disableUnderline: true,
						}}
						onChange={(e) => setName(e.target.value)}
						label="Name"
						variant="standard"
						multiline
						disabled={false}
						value={name}
						name="Name input"
						required={true}
					/>
				)}

				{status === 'stopped' && (
					<div className="mt-2">
						<TextField
							sx={multiLineInputStyle}
							InputProps={{
								disableUnderline: true,
							}}
							onChange={(e) => setValue(e.target.value)}
							label="Comments"
							variant="standard"
							multiline
							disabled={false}
							value={value}
							name="description"
							rows={10}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default VideoRecorder;
