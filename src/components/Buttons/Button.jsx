import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Button component.
 *
 * @param {Object} props - Component properties.
 * @param {function} props.onChangeFunction - Callback function triggered when the button is clicked (required).
 * @param {string} props.text - Text to display on the button (required).
 * @param {string} [props.className] - Additional CSS classes for styling (optional).
 * @param {string} [props.id] - Unique identifier for the button element (optional).
 *
 * @returns {JSX.Element} The Button component.
 */
export default function Button({ onChangeFunction, text, className, id }) {
	return (
		<button
			id={id}
			onClick={onChangeFunction}
			className={`px-10 py-2 rounded-lg font-semibold ${className}`}
			type="button"
			aria-label={text}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	id: PropTypes.string.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Button.defaultProps = {
	className: 'text-white bg-primaryColor hover:bg-lightBlue',
};
