import { useState, useRef, useEffect } from 'react';

export default function Stopwatch(isrun) {
	const [currentTime, setCurrentTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const intervalID = useRef(null);

	useEffect(() => {
		if (!isRunning) {
			intervalID.current = setInterval(() => {
				setCurrentTime((prevTime) => {
					return prevTime + 5;
				});
			}, 10);
		}
		setIsRunning(true);
	}, [currentTime]);

	const sec = Math.floor(currentTime / 1000);
	const min = Math.floor(sec / 60);
	const seconds = (sec % 60).toString().padStart(2, '0');
	const minutes = (min % 60).toString().padStart(2, '0');

	return (
		<>
			<div className="text-xl mt-5 p-2 bg-gray-100 rounded inline-block">
				<p className="text-xl">Time Passed: </p>
				<span>{minutes}</span>:<span>{seconds}</span>
			</div>
		</>
	);
}
