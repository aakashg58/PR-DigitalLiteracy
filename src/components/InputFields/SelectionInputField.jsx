import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable SelectionInputField component for user input with a dropdown menu.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.headerText=''] - Label text for the input field.
 * @param {string} props.id - Unique identifier for the input field (required).
 * @param {string} props.inputLabel - Placeholder label text for the input field when no value is selected (required).
 * @param {string} props.value - Currently selected value (required).
 * @param {function} props.onChangeFunction - Callback function triggered when a new value is selected (required).
 * @param {Array} props.selectionFields - Array of selection fields to display in the dropdown (required).
 * Each menu item should be an object with the following properties:
 * {string} type - Type of menu item ('selection', 'divider', or 'header').
 * {string} [value] - Value of the selection item (required for 'selection' type).
 * {string} text - Text to display for the menu item.
 *
 * @returns {JSX.Element} The SelectionInputField component.
 */
export default function SelectionInputField({ id, headerText, inputLabel, value, onChangeFunction, selectionFields }) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close selection menu when user presses outside of input field
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		// Attach event listener only when the dropdown is open
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex items-center gap-2">
			<label htmlFor={id} className="text-primaryColor font-semibold font-sans w-full">
				{headerText}
				<div className="relative" ref={dropdownRef}>
					<button
						type="button"
						onClick={toggleDropdown}
						className={`w-full px-3 py-4 border rounded focus:outline-none bg-white focus:ring focus:border-blue-300 text-left font-medium ${
							value ? 'text-black' : 'text-gray-400'
						}`}
					>
						{selectionFields.find((item) => item.value === value)?.text || inputLabel}
					</button>
					{isOpen && (
						<ul className="absolute z-10 mt-2 w-full bg-white border rounded shadow-lg">
							{selectionFields.map((item) => {
								if (item.type === 'divider') {
									return <li key={item.type} className="my-1 border-t border-gray-200" />;
								}
								if (item.type === 'header') {
									return (
										<li key={item.text} className="px-3 py-2 text-gray-400">
											{item.text}
										</li>
									);
								}
								if (item.type === 'selection') {
									return (
										<button
											type="button"
											key={item.value}
											value={item.value}
											onClick={() => {
												onChangeFunction(item.value);
												setIsOpen(false);
											}}
											className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-100"
										>
											{item.text}
										</button>
									);
								}
								throw new Error('Invalid Menu Item Type');
							})}
						</ul>
					)}
				</div>
			</label>
		</div>
	);
}

SelectionInputField.propTypes = {
	headerText: PropTypes.string,
	id: PropTypes.string.isRequired,
	inputLabel: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	selectionFields: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf(['selection', 'divider', 'header']).isRequired,
			value: PropTypes.string,
			text: PropTypes.string,
		}),
	).isRequired,
};

SelectionInputField.defaultProps = {
	headerText: '',
};
