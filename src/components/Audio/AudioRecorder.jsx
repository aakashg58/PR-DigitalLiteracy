import { useReactMediaRecorder } from 'react-media-recorder';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import AudioVisualizer from './AudioVisualizer';
import Timer from '../Timer/Timer';
import Button from '../Buttons/Button';

function AudioRecorder() {
	const [submit, setSubmit] = useState('no-upload');

	const { status, startRecording, error, stopRecording, mediaBlobUrl, previewAudioStream, clearBlobUrl } =
		useReactMediaRecorder({
			audio: true,
			askPermissionOnMount: true,
		});

	const resetSubmit = () => {
		setSubmit('no-upload');
		console.log('resetting');
	};

	const uploadAudio = async (blobUrl) => {
		console.log('reached!!!');
		const storage = getStorage();
		const audioRef = ref(storage, 'audioclip');
		const response = await fetch(blobUrl);
		const blob = await response.blob();
		console.log(blob);
		uploadBytes(audioRef, blob);
		const fileRef = ref(storage, 'audioclip');
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

			{status === 'recording' && <AudioVisualizer stream={previewAudioStream} />}

			{status === 'recording' && <Timer />}

			{status === 'stopped' && <audio className="m-2" src={mediaBlobUrl} controls autoPlay loop />}

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
					onChangeFunction={() => {
						startRecording();
						resetSubmit();
					}}
					text="Start Recording"
					className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
					id="startAudioRecording"
				/>
			) : null}

			{status === 'recording' && (
				<Button
					onChangeFunction={() => {
						stopRecording();
						resetSubmit();
					}}
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

			{status === 'stopped' && submit !== 'upload-successful' ? (
				<Button
					onChangeFunction={() => uploadAudio(mediaBlobUrl)}
					text="Upload Audio"
					className="m-2 p-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
					id="uploadRecording"
				/>
			) : null}

			{status === 'stopped' && submit === 'upload-successful' ? (
				<p className="text-xl">successfully submitted audio!</p>
			) : null}

			{status === 'stopped' && submit === 'upload-failed' ? <p className="text-xl">audio submission failed.</p> : null}
		</div>
	);
}

export default AudioRecorder;
