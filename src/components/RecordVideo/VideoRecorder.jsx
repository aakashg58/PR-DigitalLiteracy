import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';

import Timer from '../Timer/Timer';
import Button from '../Buttons/Button';

//import { useEffect, useRef } from 'react';

const VideoRecorder = () => {
	const [submit, setSubmit] = useState('no-upload');

	const { status, error, startRecording, stopRecording, mediaBlobUrl, previewStream, clearBlobUrl } =
		useReactMediaRecorder({
			video: true,
			askPermissionOnMount: true,
		});

	const resetSubmit = () => {
		setSubmit('no-upload');
		console.log('resetting');
	};

	const uploadVideo = async (blobUrl) => {
		console.log('reached!!!');
		const storage = getStorage();
		const audioRef = ref(storage, 'videoclip');
		const response = await fetch(blobUrl);
		const blob = await response.blob();
		console.log(blob);
		uploadBytes(audioRef, blob);
		const fileRef = ref(storage, 'videoclip');
		getDownloadURL(fileRef)
			.then((url) => {
				// File exists
				setSubmit('upload-successful');
				console.log('File exists at URL:', url);
			})
			.catch((error) => {
				if (error.code === 'storage/object-not-found') {
					// File does not exist
					setSubmit('upload-failed');
				} else {
					// Some other error occurred
					setSubmit('upload-failed');
				}
			});
	};

	return (
		<div>
			<p>{error}</p>
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
				<Button
					onChangeFunction={() => {
						clearBlobUrl();
						resetSubmit();
					}}
					text="Delete Recording"
					className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
					id="deleteVideoRecording"
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
					onChangeFunction={() => uploadVideo(mediaBlobUrl)}
					text="Upload Video"
					className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
					id="uploadVideo"
				/>
			)}

			{status === 'stopped' && submit === 'upload-successful' ? (
				<p className="text-xl">video submission success!</p>
			) : null}

			{status === 'stopped' && submit === 'upload-failed' ? <p className="text-xl">video submission failed.</p> : null}
		</div>
	);
};

export default VideoRecorder;
