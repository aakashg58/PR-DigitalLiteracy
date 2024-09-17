import { useState, useRef } from 'react';

const mimeType = 'video/webm';

const VideoRecorder = () => {
	const [permission, setPermission] = useState(false);
	const mediaRecorder = useRef(null);
	const liveVideoFeed = useRef(null);
	const [recordingStatus, setRecordingStatus] = useState('inactive');
	const [stream, setStream] = useState(null);
	const [videoChunks, setVideoChunks] = useState([]);
	const [recordedVideo, setRecordedVideo] = useState(null);

	const getCameraPermission = async () => {
		setRecordedVideo(null);
		if ('MediaRecorder' in window) {
			try {
				const videoConstraints = {
					audio: false,
					video: true,
				};
				const audioConstraints = { audio: true };
				// create audio and video streams separately
				const audioStream = await navigator.mediaDevices.getUserMedia(audioConstraints);
				const videoStream = await navigator.mediaDevices.getUserMedia(videoConstraints);
				setPermission(true);
				// combine both audio and video streams
				const combinedStream = new MediaStream([...videoStream.getVideoTracks(), ...audioStream.getAudioTracks()]);
				setStream(combinedStream);
				// set videostream to live feed player
				liveVideoFeed.current.srcObject = videoStream;
			} catch (err) {
				alert(err.message);
			}
		} else {
			alert('The MediaRecorder API is not supported in your browser.');
		}
	};

	const deleteRecording = async () => {
		setPermission(true);
		setStream(null);
		setVideoChunks([]);
		setRecordedVideo(null);
	};

	const startRecording = async () => {
		setRecordingStatus('recording');
		const media = new MediaRecorder(stream, { mimeType });
		mediaRecorder.current = media;
		mediaRecorder.current.start();
		const localVideoChunks = [];
		mediaRecorder.current.ondataavailable = (event) => {
			if (typeof event.data === 'undefined') return;
			if (event.data.size === 0) return;
			localVideoChunks.push(event.data);
		};
		setVideoChunks(localVideoChunks);
	};

	const stopRecording = () => {
		setPermission(false);
		setRecordingStatus('inactive');
		mediaRecorder.current.stop();
		mediaRecorder.current.onstop = () => {
			const videoBlob = new Blob(videoChunks, { type: mimeType });
			const videoUrl = URL.createObjectURL(videoBlob);
			setRecordedVideo(videoUrl);
			setVideoChunks([]);
		};
	};

	return (
		<div>
			<main>
				<div className="flex flex-col items-center">
					{!permission ? (
						<button
							className="p-4 text-center inline-block text-xl font-bold cursor-pointer bg-white rounded-xl"
							onClick={getCameraPermission}
							type="button"
						>
							Get Camera
						</button>
					) : null}

					{permission && recordingStatus === 'inactive' ? (
						<button
							className="p-4 text-center inline-block text-xl font-bold cursor-pointer bg-white rounded-xl"
							onClick={startRecording}
							type="button"
						>
							{' '}
							Start Recording
						</button>
					) : null}
					{recordingStatus === 'recording' ? (
						<button
							className="p-4 text-center inline-block text-xl font-bold cursor-pointer bg-white rounded-xl"
							onClick={stopRecording}
							type="button"
						>
							Stop Recording
						</button>
					) : null}
				</div>
				{recordedVideo ? (
					<div className="audio-player">
						<video src={recordedVideo} controls />
						<a download href={recordedVideo}>
							Download Recording
						</a>
					</div>
				) : null}

				{recordedVideo ? (
					<div>
						<button onClick={deleteRecording}>Delete Recording</button>
					</div>
				) : null}
			</main>
		</div>
	);
};
export default VideoRecorder;
