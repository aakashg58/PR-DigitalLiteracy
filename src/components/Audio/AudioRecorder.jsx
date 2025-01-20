import { useReactMediaRecorder } from 'react-media-recorder';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { TextField } from '@mui/material';
import AudioVisualizer from './AudioVisualizer';
import Timer from '../Timer/Timer';
import Button from '../Buttons/Button';
import { multiLineInputStyle } from '../../Layouts/Main/ResumeBuilder/styles';
import { set } from 'lodash';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AudioRecorder = ({ skillsList }) => {
	const [value, setValue] = useState('');
	const [name, setName] = useState('');
	const [submissionname, setsubmit] = useState('');
	const [submit, setSubmit] = useState('no-upload');
	const defaultSelectedValue = skillsList.find((item) => item.isClicked)?.name || '';
	const [selectedValue, setSelectedValue] = useState(defaultSelectedValue);
	const [progress, setProgress] = useState(0);

	const { status, startRecording, error, stopRecording, mediaBlobUrl, previewAudioStream, clearBlobUrl } =
		useReactMediaRecorder({
			audio: true,
			askPermissionOnMount: true,
		});

	const beginRecording = () => {
		if (selectedValue === '') alert('please select a skill to discuss');
		else {
			setSubmit('no-upload');
			console.log('resetting');
			startRecording();
		}
	};

	const resetSubmit = () => {
		setSubmit('no-upload');
		console.log('resetting');
	};

	const downloadblob = async (blobUrl) => {
		const a = document.createElement('a');
		a.href = blobUrl;
		a.download = 'video.mp4';
		a.click();
	};

	/*const checkFile = async (fileRef) => {
		getDownloadURL(fileRef)
			.then((url) => {
				// File exists
				setSubmit('upload-successful');
				console.log('File exists at URL:', url);
				return;
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
	};*/

	const checkFileUpload = async (uploadTask) => {
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(progress);
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
				}
			},
			(error) => {
				// A full list of error codes is available at
				// https://firebase.google.com/docs/storage/web/handle-errors
				switch (error.code) {
					case 'storage/unauthorized':
						// User doesn't have permission to access the object
						toast.error('Upload failed. Try Again.', { position: 'top-right' });
						setSubmit('upload-failed');
						break;
					case 'storage/canceled':
						// User canceled the upload
						toast.error('Upload failed. Try Again.', { position: 'top-right' });
						setSubmit('upload-failed');
						break;
					case 'storage/unknown':
						toast.error('Upload failed. Try Again.', { position: 'top-right' });
						setSubmit('upload-failed');
						// Unknown error occurred, inspect error.serverResponse
						break;
				}
			},
			() => {
				// Upload completed successfully, now we can get the download URL
				toast.success('Successful Upload!', { position: 'top-right' });
				setSubmit('upload-successful');
			},
		);
	};

	const uploadAudio = async (blobUrl) => {
		if (!name) {
			alert('Please fill in name before submission.');
			return;
		} else {
			setsubmit(name);
			const storage = getStorage();
			const audioRefString = 'UserAudio/' + name + '/' + selectedValue + '/audioclip';
			const audioRef = ref(storage, audioRefString);
			const response = await fetch(blobUrl);
			const blob = await response.blob();
			const uploadTask = uploadBytesResumable(audioRef, blob);

			const textRefString = 'UserAudio/' + name + '/' + selectedValue + '/audiotext';
			const textRef = ref(storage, textRefString);
			const textblob = new Blob([value], { type: '.txt' });
			uploadBytes(textRef, textblob);

			setSubmit('upload-waiting');
			checkFileUpload(uploadTask);
		}
	};

	const deleteAudio = async () => {
		const storage = getStorage();
		console.log(submissionname + ' submitted');
		const desertRefString = 'UserAudio/' + submissionname + '/' + selectedValue + '/audioclip';

		const desertRef = ref(storage, desertRefString);
		deleteObject(desertRef)
			.then(() => {
				setSubmit('no-upload');
				toast.success('File Succesfully Deleted.', { position: 'top-right' });
				console.log('File deleted successfully');
			})
			.catch((error) => {
				setSubmit('delete-failed');
				toast.error('Failed to Delete file. Try Again.', { position: 'top-right' });
				console.log('failed to delete file UserAudio/' + submissionname);
			});
		const desertTxtString = 'UserAudio/' + submissionname + '/' + selectedValue + '/audiotext';
		const deserttxt = ref(storage, desertTxtString);
		deleteObject(deserttxt)
			.then(() => {
				console.log('File deleted successfully');
			})
			.catch((error) => {
				console.log('failed to delete file UserAudio/' + submissionname);
			});
	};

	return (
		<div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
			<div className="border rounded-lg  border-sky-500 p-2 bg-sky-500 flex flex-col sm:flex-row items-center justify-center flex-1 w-150">
				<div className="flex-1 w-auto flex flex-col items-center justify-center">
					<p className="text-4xl font-bold mb-3">Currently Recording Audio</p>
					<ToastContainer position="top-right" />

					{error && alert('Conflicting Media. Please close any tabs using your camera or audio devices')}

					{status === 'recording' && <AudioVisualizer stream={previewAudioStream} />}

					{status === 'recording' && <Timer />}

					{status === 'stopped' && <audio className="my-5" src={mediaBlobUrl} controls autoPlay loop />}

					{status === 'idle' && (
						<Button
							onChangeFunction={() => {
								beginRecording();
							}}
							text="Start Recording"
							className="m-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
							id="startAudioRecording"
						/>
					)}

					{status === 'recording' && (
						<Button
							onChangeFunction={() => {
								stopRecording();
								resetSubmit();
							}}
							text="Stop Recording"
							className="m-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
							id="stopRecording"
						/>
					)}

					<div className="mt-3 grid grid-cols-2 gap-2">
						{status === 'stopped' && (
							<Button
								onChangeFunction={() => {
									startRecording();
									resetSubmit();
								}}
								text="Start Recording"
								className="rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
								id="startAudioRecording"
							/>
						)}

						{status === 'stopped' && (
							<Button
								onChangeFunction={() => {
									downloadblob(mediaBlobUrl);
								}}
								text="Download Video"
								className="rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
								id="downloadVideoRecording"
							/>
						)}

						{status === 'stopped' && (
							<>
								<Button
									onChangeFunction={clearBlobUrl}
									text="Delete Recording"
									className="rounded-lg font-semibold text-white bg-red-500 hover:bg-red-400"
									id="deleteRecording"
								/>
							</>
						)}

						{(status === 'stopped' && submit === 'no-upload') || submit === 'upload-failed' ? (
							<Button
								onChangeFunction={() => uploadAudio(mediaBlobUrl)}
								text="Send to Organization"
								className="rounded-lg font-semibold text-white bg-green-500 hover:bg-green-400 px-2"
								id="uploadRecording"
							/>
						) : null}

						{status === 'stopped' && submit === 'upload-waiting' ? (
							<>
								<Button
									text="Uploading..."
									className="rounded-lg font-semibold text-black bg-yellow-400"
									id="delete uploaded recording"
								/>
							</>
						) : null}

						{(status === 'stopped' && submit === 'upload-successful') || submit === 'delete-failed' ? (
							<>
								<Button
									onChangeFunction={() => deleteAudio()}
									text="Undo"
									className="rounded-lg font-semibold text-white bg-red-500 hover:bg-red-400"
									id="delete uploaded recording"
								/>
							</>
						) : null}
					</div>
				</div>
				{status === 'stopped' && (
					<div className="flex-2 mt-2 min-[650px]:ml-10">
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
					</div>
				)}
			</div>

			{status === 'idle' && (
				<div className="border rounded-lg border-sky-500 p-4 bg-sky-500 flex flex-col items-center justify-center flex-2 w-50">
					<div>
						<p className="text-4xl font-bold text-center">
							Select a Skill<br></br> to discuss
						</p>
					</div>
					<div className="mt-4">
						<select
							value={selectedValue}
							onChange={(e) => setSelectedValue(e.target.value)}
							className="p-2 border rounded w-64"
						>
							{skillsList.map((item) => {
								if (item.isClicked)
									return (
										<option key={item.id} value={item.name}>
											{item.name}
										</option>
									);
							})}
						</select>
					</div>
				</div>
			)}
		</div>
	);
};

export default AudioRecorder;
