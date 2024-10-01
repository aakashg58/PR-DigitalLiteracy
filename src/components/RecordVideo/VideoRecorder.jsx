import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';
//import { useEffect, useRef } from 'react';

const VideoRecorder = () => {
	const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } = useReactMediaRecorder({ video: true });

	return (
		<div>
			<p>{status}</p>
			{/* Video preview */}
			{previewStream && (
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
			<button onClick={startRecording}>Start Recording</button>
			<button onClick={stopRecording}>Stop Recording</button>

			{mediaBlobUrl && <video src={mediaBlobUrl} controls autoPlay loop />}
		</div>
	);
};

export default VideoRecorder;
