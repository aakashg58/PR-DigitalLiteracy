import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';

import { getStorage, ref, uploadBytes } from 'firebase/storage';

import Timer from '../Timer/Timer';

//import { useEffect, useRef } from 'react';

const VideoRecorder = () => {
	const { status, startRecording, stopRecording, mediaBlobUrl, previewStream, clearBlobUrl } = useReactMediaRecorder({
		video: true,
		askPermissionOnMount: true,
	});

	const uploadVideo = async (blobUrl) => {
		console.log('reached!!!');
		const storage = getStorage();
		const videoRef = ref(storage, 'userVideoClips');
		const response = await fetch(blobUrl);
		const blob = await response.blob();
		console.log(blob);
		uploadBytes(videoRef, blob).console.log('Uploaded a blob or file!');
	};

	return (
		<div>
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

			<button
				className="transition duration-400 bg-white text-black hover:bg-blue-300 hover:text-black hover:scale-105 hover:shadow-lg border-blue-300 rounded-xl"
				onClick={startRecording}
			>
				<h1 className="text-4xl font-bold">Start Recording</h1>
			</button>

			<button onClick={stopRecording}>Stop Recording</button>

			{status === 'stopped' && <button onClick={clearBlobUrl}>Delete Recording</button>}

			{status === 'stopped' && <video src={mediaBlobUrl} controls autoPlay loop />}

			{status === 'stopped' && (
				<a href={mediaBlobUrl} download="Video.mp4">
					Download
				</a>
			)}

			{status === 'stopped' && <button onClick={() => uploadVideo(mediaBlobUrl)}>Upload Video</button>}
			{status === 'recording' && <Timer />}
		</div>
	);
};

export default VideoRecorder;
