import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable TextAreaField component for multi-line user input.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.headerText=''] - Label text for the text area field.
 * @param {string} props.placeholder - Placeholder text for the text area field (required).
 * @param {string} props.value - Current value of the text area field (required).
 * @param {function} props.onChangeFunction - Callback function triggered when the text area value changes (required).
 * @param {function} [props.onChangeFocusFunction=() => {}] - Callback function triggered when the input loses focus.
 * @param {string} props.id - Unique identifier for the text area field (required).
 * @param {number} props.index - Index of the text area field when used in a list (required).
 *
 * @returns {JSX.Element} The TextAreaField component.
 */
export default function TextAreaField({
	headerText,
	placeholder,
	value,
	onChangeFunction,
	onChangeFocusFunction,
	id,
	index,
}) {
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (inputRef.current && !inputRef.current.contains(event.target)) {
				setIsFocused(false);
				onChangeFocusFunction(value, index);
			}
		};

		// Attach event listener only when focused
		if (isFocused) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isFocused, onChangeFocusFunction]);

	const handleFocus = () => setIsFocused(true);

	return (
		<label htmlFor={id ? `${id}${index}` : ''} className="text-primaryColor font-semibold font-sans">
			{headerText}
			<textarea
				type="text"
				value={value}
				onFocus={handleFocus}
				ref={inputRef}
				onChange={(e) => onChangeFunction(e.target.value, index)}
				className="appearance-none border rounded w-full h-40 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
				placeholder={placeholder}
			/>
		</label>
	);
}

TextAreaField.propTypes = {
	id: PropTypes.string.isRequired,
	index: PropTypes.number,
	headerText: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	onChangeFocusFunction: PropTypes.func,
};

TextAreaField.defaultProps = {
	index: null,
	headerText: '',
	placeholder: '',
	onChangeFocusFunction: () => {},
};
