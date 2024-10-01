import { useReactMediaRecorder } from 'react-media-recorder';

const AudioRecorder = () => {
	const { status, startRecording, stopRecording, isMuted, mediaBlobUrl } = useReactMediaRecorder({ audio: true });

	return (
		<div>
			<p>{status}</p>
			<button onClick={startRecording}>Start Recording</button>
			<button onClick={stopRecording}>Stop Recording</button>
			<audio src={mediaBlobUrl} controls autoPlay loop />
			<p>{isMuted}</p>
		</div>
	);
};

export default AudioRecorder;
