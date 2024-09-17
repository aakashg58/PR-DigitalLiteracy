import { useState, useRef } from 'react';

const mimeType = 'audio/mp3';

const AudioRecorder = () => {
	const [permission, setPermission] = useState(false);
	const mediaRecorder = useRef(null);
	const [recordingStatus, setRecordingStatus] = useState('inactive');
	const [stream, setStream] = useState(null);
	const [audioChunks, setAudioChunks] = useState([]);
	const [audio, setAudio] = useState(null);

	const getMicrophonePermission = async () => {
		if ('MediaRecorder' in window) {
			try {
				const streamData = await navigator.mediaDevices.getUserMedia({
					audio: true,
					video: false,
				});
				setPermission(true);
				setStream(streamData);
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
		setAudioChunks([]);
		setAudio(null);
	};

	const startRecording = async () => {
		setRecordingStatus('recording');
		// create new Media recorder instance using the stream
		const media = new MediaRecorder(stream, { type: mimeType });
		// set the MediaRecorder instance to the mediaRecorder ref
		mediaRecorder.current = media;
		// invokes the start method to start the recording process
		mediaRecorder.current.start();
		const localAudioChunks = [];
		mediaRecorder.current.ondataavailable = (event) => {
			if (typeof event.data === 'undefined') return;
			if (event.data.size === 0) return;
			localAudioChunks.push(event.data);
		};
		setAudioChunks(localAudioChunks);
	};

	const stopRecording = () => {
		setRecordingStatus('inactive');
		// stops the recording instance
		mediaRecorder.current.stop();
		mediaRecorder.current.onstop = () => {
			// creates a blob file from the audiochunks data
			const audioBlob = new Blob(audioChunks, { type: mimeType });
			// creates a playable URL from the blob file.
			const audioUrl = URL.createObjectURL(audioBlob);
			setAudio(audioUrl);
			setAudioChunks([]);
		};
	};

	return (
		<div>
			<main>
				<div className="flex flex-col items-cente">
					{!permission ? (
						<button
							className="p-4 text-center inline-block text-xl font-bold cursor-pointer bg-white rounded-xl"
							onClick={getMicrophonePermission}
							type="button"
						>
							Allow Microphone
						</button>
					) : null}
					{permission && recordingStatus === 'inactive' ? (
						<button
							className="p-4 text-center inline-block text-xl font-bold cursor-pointer bg-white rounded-xl"
							onClick={startRecording}
							type="button"
						>
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
				{audio ? (
					<div className="audio-container">
						<audio src={audio} controls />
						<a download href={audio}>
							Download Recording
						</a>
					</div>
				) : null}

				{audio ? (
					<div>
						<button onClick={deleteRecording}>Delete Recording</button>
					</div>
				) : null}
			</main>
		</div>
	);
};
export default AudioRecorder;
