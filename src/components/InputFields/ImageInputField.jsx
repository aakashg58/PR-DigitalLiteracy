import React from 'react';
import PropTypes from 'prop-types';

/**
 * ImageInputField component for dragging and dropping image files.
 *
 * This component provides a designated area for users to drag and drop image files.
 * The dropped images are displayed as thumbnails within the component.
 *
 * @param {Object} props - Component properties.
 * @param {function} props.onChangeFunction - Callback function triggered when images are dropped.
 *   It receives the following arguments:
 *     - event: The drop event object.
 *     - fieldType: A string indicating the type of field ('images' in this case).
 * @param {Array} props.value - An array of image objects representing the currently displayed images.
 *   Each image object should have the following properties:
 *     - id: A unique identifier for the image (string).
 *     - file: The File object representing the image data.
 *
 * @returns {JSX.Element} The ImageInputField component.
 */
export default function ImageInputField({ onChangeFunction, value, placeholder, id }) {
	return (
		<div
			id={id}
			onDrop={(e) => onChangeFunction(e, 'images')}
			style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}
		>
			<p className="text-gray-500">{placeholder}</p>
			<div className="flex flex-wrap">
				{value.map((image, index) => (
					<img
						key={image.id}
						src={URL.createObjectURL(image.file)}
						alt={`Question Index ${index}`}
						className="max-w-xs h-auto mr-2 mb-2 rounded-md"
					/>
				))}
			</div>
		</div>
	);
}

ImageInputField.propTypes = {
	onChangeFunction: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			file: PropTypes.instanceOf(File).isRequired,
		}),
	).isRequired,
	id: PropTypes.string.isRequired,
};
