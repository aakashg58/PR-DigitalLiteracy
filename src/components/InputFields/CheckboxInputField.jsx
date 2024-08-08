import React from 'react';
import PropTypes from 'prop-types';

/**
 * CheckboxInputField: A customizable checkbox input component with a label.
 *
 * This component renders a checkbox input element along with associated label text. It's designed
 * to be flexible and accessible, making it easy to incorporate into forms or other interactive elements.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {boolean} props.value - The checked state of the checkbox (true/false).
 * @param {function} props.onChangeFunction - A callback function triggered when the checkbox state changes.
 * @param {string} props.id - A unique identifier for the checkbox input element. (Required for accessibility)
 * @param {string} props.headerText - A string to display as the label text for the checkbox input.
 *
 * @returns {JSX.Element} A styled checkbox input with its associated label.
 *
 * @example
 * // Basic usage:
 * <CheckboxInputField
 *   id="myCheckbox"
 *   value={isChecked}
 *   onChangeFunction={handleCheckboxChange}
 * />
 */
export default function CheckboxInputField({ value, onChangeFunction, headerText, id }) {
	const handleChange = (event) => {
		onChangeFunction(event.target.checked);
	};
	return (
		<label htmlFor={id} className="flex items-center text-lg">
			<input
				type="checkbox"
				id={id}
				className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
				checked={value}
				onChange={handleChange}
			/>
			{headerText}
		</label>
	);
}

CheckboxInputField.propTypes = {
	value: PropTypes.bool.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	headerText: PropTypes.string.isRequired,
};
