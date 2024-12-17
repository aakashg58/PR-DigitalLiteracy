import { useReactMediaRecorder } from 'react-media-recorder';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useState } from 'react';
import { TextField } from '@mui/material';
import AudioVisualizer from './AudioVisualizer';
import Timer from '../Timer/Timer';
import Button from '../Buttons/Button';
import { multiLineInputStyle } from '../../Layouts/Main/ResumeBuilder/styles';

function AudioRecorder() {
	const [value, setValue] = useState('');
	const [name, setName] = useState('');
	const [submissionname, setsubmit] = useState('');

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

	const sleep = (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const uploadAudio = async (blobUrl) => {
		if (!name) {
			alert('Please fill in name before submission.');
			return;
		}
		setsubmit(name);
		const storage = getStorage();
		const audioRef = ref(storage, 'UserAudio/' + name + '/audioclip');
		const response = await fetch(blobUrl);
		const blob = await response.blob();
		uploadBytes(audioRef, blob);

		const textRef = ref(storage, 'UserAudio/' + name + '/audiotext');
		const textblob = new Blob([value], { type: '.txt' });
		uploadBytes(textRef, textblob);

		const fileRef = ref(storage, 'UserAudio/' + name + '/audioclip');

		sleep(2000).then(() => {
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
		});
	};

	const deleteAudio = async () => {
		const storage = getStorage();
		setSubmit('no-upload');
		console.log(submissionname + ' submitted');
		const desertRef = ref(storage, 'UserAudio/' + submissionname + '/audioclip');
		deleteObject(desertRef)
			.then(() => {
				// File deleted successfully
			})
			.catch((error) => {
				console.log('failed to delete file UserAudio/' + submissionname);
			});
		const deserttxt = ref(storage, 'UserAudio/' + submissionname + '/audiotext');
		deleteObject(deserttxt)
			.then(() => {
				// File deleted successfully
			})
			.catch((error) => {
				console.log('failed to delete file UserAudio/' + submissionname);
			});
	};

	return (
		<div className="border rounded-lg  border-sky-500 p-8 bg-sky-500 flex">
			<div className="flex-1 w-90">
				<p className="text-4xl font-bold">Currently Recording Audio</p>

				{error && alert('Conflicting Media. Please close any tabs using your camera or audio devices')}

				{status === 'recording' && <AudioVisualizer stream={previewAudioStream} />}

				{status === 'recording' && <Timer />}

				{status === 'stopped' && <audio className="m-2" src={mediaBlobUrl} controls autoPlay loop />}

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
						className="m-2 p-2 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-400"
						id="deleteRecording"
					/>
				)}

				{status === 'stopped' && submit !== 'upload-successful' ? (
					<Button
						onChangeFunction={() => uploadAudio(mediaBlobUrl)}
						text="Send to Organization"
						className="m-2 p-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-400"
						id="uploadRecording"
					/>
				) : null}

				{status === 'stopped' && submit === 'upload-successful' ? (
					<Button
						onChangeFunction={() => deleteAudio()}
						text="Undo"
						className="m-2 p-2 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-400"
						id="delete uploaded recording"
					/>
				) : null}

				{status === 'stopped' && submit === 'upload-failed' ? (
					<p className="text-xl">audio submission failed.</p>
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
							rows={6}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default AudioRecorder;
