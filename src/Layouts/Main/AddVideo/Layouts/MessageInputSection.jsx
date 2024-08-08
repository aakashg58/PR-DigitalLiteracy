import React from 'react';
import PropTypes from 'prop-types';
import TextInputField from '../../../../components/InputFields/TextInputField';
import TextAreaField from '../../../../components/InputFields/TextAreaField';
import CheckboxInputField from '../../../../components/InputFields/CheckboxInputField';
import Button from '../../../../components/Buttons/Button';

export default function MessageInputSection({
	handleAddSegment,
	isChapterSegmentAvailable,
	isChapterSegmentChecked,
	messages,
	stopTimes,
	handleStopTimesChange,
	validateStopTimes,
	handleMessagesChange,
	handleRemoveSegment,
	handleGetTimestamp,
	handleChaperCheckboxChange,
}) {
	return (
		<div className="bg-backgroundColor shadow-md rounded-xl py-12 px-12">
			<div className="flex flex-col gap-6">
				<div className="flex justify-between items-center">
					<div>
						{isChapterSegmentAvailable && (
							<CheckboxInputField
								value={isChapterSegmentChecked}
								onChangeFunction={handleChaperCheckboxChange}
								headerText="Use default segmentation from the video"
								id="chapterSegmentationCheckbox_"
							/>
						)}
					</div>
					<div>
						{!isChapterSegmentChecked && (
							<Button
								text="+ Add a Segment"
								onChangeFunction={() => handleAddSegment()}
								className="text-primaryColor font-semibold px-0 py-0"
								id="addSegmentButton_"
							/>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-6">
					{!isChapterSegmentChecked && (
						<>
							{messages.map((input, index) => (
								<div key={messages.length - index - 1} className="flex flex-col gap-6">
									<div className="flex justify-between items-center">
										<div className="text-primaryColor font-semibold font-sans">Segment #{messages.length - index}</div>
										<Button
											text="- Remove Segment"
											id={`removeSegmentButton_${stopTimes.length - index - 1}`}
											onChangeFunction={() => handleRemoveSegment(messages.length - index - 1)}
											className="text-primaryColor font-semibold px-0 py-0"
										/>
									</div>

									<div className="flex justify-between items-center gap-2">
										<div className="grow">
											<TextInputField
												headerText="Stop Times:"
												placeholder="Specify pause times for video in format min:sec, e.g. 0:30"
												value={stopTimes[stopTimes.length - index - 1]}
												eventName="stopTimes"
												onChangeFunction={handleStopTimesChange}
												onChangeFocusFunction={validateStopTimes}
												id={`stopTimeTextField_${stopTimes.length - index - 1}`}
												index={stopTimes.length - index - 1}
											/>
										</div>
										<div className="pt-6">
											<Button
												text="Get Timestamp"
												id={`getTimestampButton_${stopTimes.length - index - 1}`}
												onChangeFunction={(e) => handleGetTimestamp(stopTimes.length - index - 1, e)}
												className="text-white bg-primaryColor hover:bg-lightBlue px-3"
											/>
										</div>
									</div>

									<TextAreaField
										headerText="Confirmation Message:"
										value={messages[messages.length - index - 1]}
										onChangeFunction={handleMessagesChange}
										index={messages.length - index - 1}
										id={`confirmationTextField_${messages.length - index - 1}_`}
									/>
								</div>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

MessageInputSection.propTypes = {
	handleAddSegment: PropTypes.func.isRequired,
	isChapterSegmentAvailable: PropTypes.bool.isRequired,
	isChapterSegmentChecked: PropTypes.bool.isRequired,
	messages: PropTypes.arrayOf(PropTypes.string).isRequired,
	stopTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleStopTimesChange: PropTypes.func.isRequired,
	validateStopTimes: PropTypes.func.isRequired,
	handleMessagesChange: PropTypes.func.isRequired,
	handleRemoveSegment: PropTypes.func.isRequired,
	handleGetTimestamp: PropTypes.func.isRequired,
	handleChaperCheckboxChange: PropTypes.func.isRequired,
};

export const validateMessageInputSection = (messages, setPopup, stopTimes, playerRef) => {
	// Checks if a string is empty or contains only whitespace
	const isEmptyOrSpaces = (str) => {
		if (typeof str !== 'string') return true;
		return !str || str.trim() === '';
	};

	// Check if any confirmation message is empty or only contains whitespace
	const hasEmptyMessage = messages.some((msg) => isEmptyOrSpaces(msg));

	if (hasEmptyMessage) {
		setPopup({
			text: 'Please ensure all confirmation messages are filled out.',
			title: 'Oops...',
			visible: true,
			icon: 'error',
		});
		return false;
	}

	for (let i = 0; i < messages.length; i += 1) {
		const textField = document.getElementById(`stopTimeTextField_${i}`);
		if (textField) {
			const regex = /^[0-5]?[0-9]:[0-5][0-9]$/; // validate MM:SS or M:SSformat
			const temp = regex.test(textField.value);

			if (!temp) {
				setPopup({
					text: 'Please ensure all stop times are in a valid MM:SS format.',
					visible: true,
					title: 'Oops...',
					icon: 'error',
				});
				return false;
			}

			// check that the min and seconds inputted are less than the max
			if (stopTimes[i] > playerRef.current.getDuration()) {
				setPopup({
					text: 'Please ensure all stop times are below the video length.',
					title: 'Oops...',
					visible: true,
					icon: 'error',
				});
				return false;
			}
		}
	}
	return true;
};
