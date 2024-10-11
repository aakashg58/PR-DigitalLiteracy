import { useState, useRef, useEffect } from 'react';

export default function Stopwatch(isrun) {
	const [currentTime, setCurrentTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const intervalID = useRef(null);

	useEffect(() => {
		if (!isRunning) {
			intervalID.current = setInterval(() => {
				setCurrentTime((prevTime) => {
					return prevTime + 10;
				});
			}, 10);
		}
		setIsRunning(true);
	}, [currentTime]);

	return (
		<>
			<h2>{(currentTime / 1000).toFixed(2)}</h2>
		</>
	);
}
