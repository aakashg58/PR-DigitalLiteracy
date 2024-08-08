import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable TextInputField component for user input.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.headerText=''] - Label text for the input field.
 * @param {string} props.placeholder - Placeholder text for the input field (required).
 * @param {string} props.value - Current value of the input field (required).
 * @param {function} props.onChangeFunction - Callback function triggered when the input value changes (required).
 * @param {function} [props.onChangeFocus=() => {}] - Callback function triggered when the input loses focus.
 * @param {string} props.id - Unique identifier for the input field (required).
 * @param {number} [props.index=null] - Optional index to identify the field within a list or group. Used in conjunction with onChangeFocusFunction.
 *
 * @returns {JSX.Element} The TextInputField component.
 */
export default function TextInputField({
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
				onChangeFocusFunction(inputRef.current.value, index);
			}
		};

		// Attach the event listener only when the field is focused
		if (isFocused) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isFocused, onChangeFocusFunction]);

	const handleFocus = () => {
		setIsFocused(true);
	};

	return (
		<label htmlFor={id ? `${id}${index}` : ''} className="block text-primaryColor font-bold">
			{headerText}
			<input
				ref={inputRef}
				type="text"
				value={value}
				onFocus={handleFocus}
				onChange={(e) => onChangeFunction(e.target.value, index)}
				className="appearance-none border rounded w-full py-4 px-3 leading-tight text-gray-700 focus:outline-none focus:ring focus:border-blue-300 whitespace-pre-wrap resize-none"
				placeholder={placeholder}
			/>
		</label>
	);
}

TextInputField.propTypes = {
	id: PropTypes.string.isRequired,
	index: PropTypes.number,
	headerText: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	onChangeFocusFunction: PropTypes.func,
};

TextInputField.defaultProps = {
	index: null,
	headerText: '',
	placeholder: '',
	onChangeFocusFunction: () => {},
};
