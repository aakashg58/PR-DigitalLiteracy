import PropTypes from 'prop-types';
import TextAreaField from '../../../../components/InputFields/TextAreaField';

export default function MessageInputSection({ transcript, setTranscript }) {
	return (
		<div className="bg-backgroundColor shadow-md rounded-xl py-12 px-12">
			<div className="flex flex-col gap-6">
				<div>Find the Video: First, find the video you want on YouTube.</div>
				<div>
					"More / Transcript" Button: Below the video, a more buttons containing to reveal a section of information
					about the video. Inside this section is a "Transcript" Button. Click on it with your mouse.
				</div>
				<div>
					"Show Transcript": A small list will appear on the right side. Look for the words "Show Transcript" and click
					on them.
				</div>
				<div>
					"Toggle Timestamp": Next to the "X" there are three dots vertical. Click on them and select "Toggle
					Timestamp".
				</div>
				<div>
					Copy & Paste Below : To do this, click and drag your mouse over all the words to highlight them. Then, press
					the buttons "Ctrl" and "C" on your keyboard at the same time. Now click on the box below and press the buttons
					"Ctrl" and "V" on your keyboard at the same time.
				</div>
				<TextAreaField
					headerText="Video Transcipt"
					placeholder="Input Video Transcript"
					value={transcript}
					onChangeFunction={setTranscript}
					id="transcriptTextField_"
				/>
			</div>
		</div>
	);
}

MessageInputSection.propTypes = {
	setTranscript: PropTypes.func.isRequired,
	transcript: PropTypes.string.isRequired,
};
