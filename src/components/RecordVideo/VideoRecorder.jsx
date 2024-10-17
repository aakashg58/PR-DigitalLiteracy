import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';

import { getStorage, ref, uploadBytes } from 'firebase/storage';

import Timer from '../Timer/Timer';
import Button from '../Buttons/Button';

//import { useEffect, useRef } from 'react';

const VideoRecorder = () => {
	const { status, startRecording, stopRecording, mediaBlobUrl, previewStream, clearBlobUrl } = useReactMediaRecorder({
		video: true,
		askPermissionOnMount: true,
	});

	const uploadVideo = async (blobUrl) => {
		console.log('reached!!!');
		const storage = getStorage();
		const audioRef = ref(storage, 'videoclip');
		const response = await fetch(blobUrl);
		const blob = await response.blob();
		console.log(blob);
		uploadBytes(audioRef, blob);
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

			{status === 'recording' && <Timer />}

			{status === 'stopped' && <video src={mediaBlobUrl} controls autoPlay loop />}

			{status === 'idle' || status === 'stopped' ? (
				<Button
					onChangeFunction={startRecording}
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
					onChangeFunction={clearBlobUrl}
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
		</div>
	);
};

export default VideoRecorder;
