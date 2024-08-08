export const convertTimestampToSeconds = (time) => {
	// Check if time is a string and in the expected format
	if (typeof time === 'string' && time.match(/^\d{1,2}:\d{1,2}$/)) {
		const [minutesString, secondsString] = time.split(':');
		const minutes = parseInt(minutesString, 10);
		const seconds = parseInt(secondsString, 10);

		if (Number.isNaN(minutes) || Number.isNaN(seconds)) {
			return null;
		}

		return minutes * 60 + seconds;
	}
	return null;
};

export function convertSecondsToTimestamp(seconds) {
	if (typeof seconds !== 'number' || seconds < 0) {
		return null; // Handle invalid input
	}

	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;

	// Use String.padStart for zero-padding
	const timeStampMinutes = minutes.toString().padStart(2, '0');
	const timeStampSeconds = remainingSeconds.toString().padStart(2, '0');

	return `${timeStampMinutes}:${timeStampSeconds}`;
}
