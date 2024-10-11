import { useReactMediaRecorder } from 'react-media-recorder';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import AudioVisualizer from './AudioVisualizer';
import Timer from '../Timer/Timer';

const AudioRecorder = () => {
	const { status, startRecording, stopRecording, mediaBlobUrl, previewAudioStream, clearBlobUrl } =
		useReactMediaRecorder({
			audio: true,
			askPermissionOnMount: true,
		});

	const uploadAudio = async (blobUrl) => {
		console.log('reached!!!');
		const storage = getStorage();
		const audioRef = ref(storage, 'userAudioClips');
		const response = await fetch(blobUrl);
		const blob = await response.blob();
		console.log(blob);
		uploadBytes(audioRef, blob).console.log('Uploaded a blob or file!');
	};

	return (
		<div>
			<p>{status}</p>
			{status === 'recording' && <AudioVisualizer stream={previewAudioStream} />}
			<button onClick={startRecording}>Start Recording</button>
			<button onClick={stopRecording}>Stop Recording</button>
			{status === 'stopped' && <button onClick={clearBlobUrl}>Delete Recording</button>}
			{status === 'stopped' && <button onClick={() => uploadAudio(mediaBlobUrl)}>Upload Audio</button>}
			{status === 'stopped' && <audio src={mediaBlobUrl} controls autoPlay loop />}
			{status === 'stopped' && (
				<a href={mediaBlobUrl} download="Audio.wav">
					Download
				</a>
			)}
			{status === 'recording' && <Timer />}
		</div>
	);
};

export default AudioRecorder;
