import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';
import { getStorage, ref, uploadBytes, deleteObject, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { TextField } from '@mui/material';
import Timer from '../Timer/Timer';
import Button from '../Buttons/Button';
import { multiLineInputStyle } from '../../Layouts/Main/ResumeBuilder/styles';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VideoRecorder = ({ skillsList }) => {
	const [submissionname, setsubmit] = useState('');
	const [value, setValue] = useState('');
	const [submit, setSubmit] = useState('no-upload');
	const [name, setName] = useState('');
	const defaultSelectedValue = skillsList.find((item) => item.isClicked)?.name || '';
	const [selectedValue, setSelectedValue] = useState(defaultSelectedValue);
	const [progress, setProgress] = useState(0);

	const { status, error, startRecording, stopRecording, mediaBlobUrl, previewStream, clearBlobUrl } =
		useReactMediaRecorder({
			video: true,
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

	const uploadVideo = async (blobUrl) => {
		if (!name) {
			alert('Please fill in name before submission.');
			return;
		} else {
			setsubmit(name);
			const storage = getStorage();
			const videoRef = ref(storage, 'UserVideo/' + name + '/' + selectedValue + '/videoclip');
			const response = await fetch(blobUrl);
			const blob = await response.blob();
			console.log(blob);
			const uploadTask = uploadBytesResumable(videoRef, blob);

			const textRef = ref(storage, 'UserVideo/' + name + '/' + selectedValue + '/videotext');
			const textblob = new Blob([value], { type: '.txt' });
			uploadBytes(textRef, textblob);

			setSubmit('upload-waiting');
			checkFileUpload(uploadTask);
		}
	};

	const deleteVideo = async () => {
		const storage = getStorage();

		console.log(submissionname + ' submitted');
		const desertRefString = 'UserVideo/' + name + '/' + selectedValue + '/videoclip';

		const desertRef = ref(storage, desertRefString);
		deleteObject(desertRef)
			.then(() => {
				toast.success('File Succesfully Deleted.', { position: 'top-right' });
				console.log('File deleted successfully');
				setSubmit('no-upload');
			})
			.catch((error) => {
				toast.error('Failed to Delete file. Try Again.', { position: 'top-right' });
				setSubmit('delete-failed');
				console.log('failed to delete file UserAudio/' + submissionname);
			});
		const desertTxtString = 'UserVideo/' + name + '/' + selectedValue + '/videotext';
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
			<div className="border rounded-lg border-sky-500 p-2 bg-sky-500 flex flex-col sm:flex-row items-center justify-center flex-1 w-150">
				<div className="flex-1 w-auto flex flex-col items-center justify-center">
					<p className="text-4xl font-bold mb-3">Currently Recording Video</p>
					<ToastContainer position="top-right" />

					{error && alert('Conflicting Media. Please close any tabs using your camera or audio devices')}

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

					{status === 'stopped' && <video style={{ width: '400px' }} src={mediaBlobUrl} controls autoPlay loop />}

					{status === 'idle' ? (
						<Button
							onChangeFunction={() => {
								beginRecording();
							}}
							text="Start Recording"
							className="m-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
							id="startVideoRecording"
						/>
					) : null}

					{status === 'recording' && <Timer />}

					{status === 'recording' && (
						<Button
							onChangeFunction={stopRecording}
							text="Stop Recording"
							className="m-2 rounded-lg font-semibold text-white bg-primaryColor hover:bg-lightBlue"
							id="stopVideoRecording"
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
								id="startVideoRecording"
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
							<Button
								onChangeFunction={() => {
									clearBlobUrl();
									resetSubmit();
								}}
								text="Delete Recording"
								className="rounded-lg font-semibold text-white bg-red-500 hover:bg-red-400"
								id="deleteVideoRecording"
							/>
						)}

						{(status === 'stopped' && submit === 'no-upload') || submit === 'upload-failed' ? (
							<Button
								onChangeFunction={() => uploadVideo(mediaBlobUrl)}
								text="Send to organization"
								className="rounded-lg font-semibold text-white bg-green-500 hover:bg-green-400 px-2"
								id="uploadVideo"
							/>
						) : null}

						{status === 'stopped' && submit === 'upload-waiting' ? (
							<Button
								text="Uploading..."
								className="rounded-lg font-semibold text-black bg-yellow-400"
								id="delete uploaded recording"
							/>
						) : null}

						{status === 'stopped' && submit === 'upload-waiting' ? (
							<div className="col-start-2 col-span-1">
								<GetProgress progress={progress} />
							</div>
						) : null}

						{(status === 'stopped' && submit === 'upload-successful') || submit === 'delete-failed' ? (
							<Button
								onChangeFunction={() => deleteVideo()}
								text="Undo"
								className="rounded-lg font-semibold text-white bg-red-500 hover:bg-red-400"
								id="delete uploaded video recording"
							/>
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
								label="Comments for organization"
								variant="standard"
								multiline
								disabled={false}
								value={value}
								name="description"
								rows={10}
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
								if (item.isClicked) {
									return (
										<option key={item.id} value={item.name}>
											{item.name}
										</option>
									);
								}
							})}
						</select>
					</div>
				</div>
			)}
		</div>
	);
};

const GetProgress = ({ progress }) => {
	return (
		<div className="bg-gray-200 h-4 rounded-lg mt-2 w-48">
			<div
				className="progress-done flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md h-full ease-linear duration-300 rounded-lg"
				style={{ width: `${progress}%` }}
			></div>
		</div>
	);
};

export default VideoRecorder;
