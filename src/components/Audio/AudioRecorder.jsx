import { useReactMediaRecorder } from 'react-media-recorder';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import AudioVisualizer from './AudioVisualizer';
import Timer from '../Timer/Timer';
import Button from '../Buttons/Button';

const AudioRecorder = () => {
	const { status, startRecording, stopRecording, mediaBlobUrl, previewAudioStream, clearBlobUrl } =
		useReactMediaRecorder({
			audio: true,
			askPermissionOnMount: true,
		});

	const uploadAudio = async (blobUrl) => {
		console.log('reached!!!');
		const storage = getStorage();
		const audioRef = ref(storage, 'audioclip');
		const response = await fetch(blobUrl);
		const blob = await response.blob();
		console.log(blob);
		uploadBytes(audioRef, blob);
	};

	return (
		<div>
			<p>{status}</p>

			{status === 'recording' && <AudioVisualizer stream={previewAudioStream} />}

			{status === 'recording' && <Timer />}

			{status === 'stopped' && <audio src={mediaBlobUrl} controls autoPlay loop />}

			{status === 'stopped' && (
				<button>
					<a
						href={mediaBlobUrl}
						className="m-2 px-10 py-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
						download="Audio.wav"
					>
						Download
					</a>
				</button>
			)}

			{status === 'idle' || status === 'stopped' ? (
				<Button
					onChangeFunction={startRecording}
					text="Start Recording"
					className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
					id="startAudioRecording"
				/>
			) : null}

			{status === 'recording' && (
				<Button
					onChangeFunction={stopRecording}
					text="Stop Recording"
					className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
					id="stopRecording"
				/>
			)}

			{status === 'stopped' && (
				<Button
					onChangeFunction={clearBlobUrl}
					text="Delete Recording"
					className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
					id="deleteRecording"
				/>
			)}

			{status === 'stopped' && (
				<Button
					onChangeFunction={() => uploadAudio(mediaBlobUrl)}
					text="Upload Audio"
					className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
					id="uploadRecording"
				/>
			)}
		</div>
	);
};

export default AudioRecorder;
