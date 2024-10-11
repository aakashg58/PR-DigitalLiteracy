import React, { useEffect, useRef } from 'react';

const AudioVisualizer = ({ stream }) => {
	const canvasRef = useRef(null);
	const audioCtxRef = useRef(null);
	const analyserRef = useRef(null);
	const animationIdRef = useRef(null);

	useEffect(() => {
		const audioCtx = new AudioContext();
		const analyser = audioCtx.createAnalyser();
		const source = audioCtx.createMediaStreamSource(stream);

		analyser.fftSize = 256;
		source.connect(analyser);

		const bufferLength = analyser.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);

		const canvas = canvasRef.current;
		const canvasCtx = canvas.getContext('2d');
		const WIDTH = canvas.width;
		const HEIGHT = canvas.height;

		const draw = () => {
			animationIdRef.current = requestAnimationFrame(draw);

			analyser.getByteFrequencyData(dataArray);

			canvasCtx.fillStyle = 'rgb(0, 0, 0)';
			canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

			const barWidth = (WIDTH / bufferLength) * 2.5;
			let barHeight;
			let x = 0;

			for (let i = 0; i < bufferLength; i++) {
				barHeight = dataArray[i] / 2;

				canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
				canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

				x += barWidth + 1;
			}
		};

		draw();

		// Cleanup function to stop animation and close audio context
		return () => {
			cancelAnimationFrame(animationIdRef.current);
			audioCtx.close();
		};
	}, [stream]);

	return <canvas ref={canvasRef} width="300" height="100" />;
};

export default AudioVisualizer;
