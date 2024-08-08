import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable TagsInputField component for user input of tags.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.headerText=''] - Label text for the input field.
 * @param {string} props.placeholder - Placeholder text for the input field (required).
 * @param {string[]} props.value - Array of current unique tags (required).
 * @param {function} props.onChangeFunction - Callback function triggered when the tags change (required).
 * @param {string} props.id - Unique identifier for the input field (required).
 *
 * @returns {JSX.Element} The TagsInputField component.
 */
export default function TagsInputField({ headerText, placeholder, value, onChangeFunction, id }) {
	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const inputRef = useRef(null);

	const handleTagAdd = () => {
		if (inputValue.trim() !== '' && !value.includes(inputValue.trim())) {
			onChangeFunction([...value, inputValue.trim()]);
			setInputValue('');
		}
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		if (e.key === 'Enter') {
			handleTagAdd();
		}
	};

	const removeTag = (tagToRemove) => {
		onChangeFunction(value.filter((tag) => tag !== tagToRemove));
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (inputRef.current && !inputRef.current.contains(event.target)) {
				handleTagAdd();
				setIsFocused(false);
				// remove input value if it's a duplicate
				setInputValue('');
			}
		};

		if (isFocused) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isFocused, inputRef, value, inputValue]);

	const handleInputFocus = () => {
		setIsFocused(true);
	};

	return (
		<div className="flex items-center gap-2">
			<label htmlFor={id} className="block text-primaryColor font-bold w-full">
				{headerText}
				{value.map((tag) => (
					<span
						key={tag}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2 mb-2"
					>
						{tag}
						<button type="button" className="ml-2 text-gray-500 focus:outline-none" onClick={() => removeTag(tag)}>
							&times;
						</button>
					</span>
				))}
				<input
					ref={inputRef}
					type="text"
					className="w-full px-3 py-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
					placeholder={placeholder}
					value={inputValue}
					onKeyDown={handleInputChange}
					onFocus={handleInputFocus}
					onChange={handleInputChange}
				/>
			</label>
		</div>
	);
}

TagsInputField.propTypes = {
	id: PropTypes.string.isRequired,
	headerText: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.arrayOf(PropTypes.string).isRequired,
	onChangeFunction: PropTypes.func.isRequired,
};

TagsInputField.defaultProps = {
	headerText: '',
	placeholder: '',
};
