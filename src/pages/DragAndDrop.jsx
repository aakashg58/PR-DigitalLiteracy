import React from 'react';
import '../Layouts/Main/FAQ/LongAnswers.css';

const DragAndDrop = () => (
	<div className="container">
		<h1>To drag and drop on your computer:</h1>
		<p>
			<strong>With a Mouse:</strong><br />
			1. Click and hold the left mouse button on the item (file, icon, etc.) you want to move.<br />
			2. Drag the item to the desired location by moving the mouse while holding the button.<br />
			3. Release the mouse button to drop the item in place.<br />
		</p>
		<p>
			<strong>With a Trackpad:</strong><br />
			1. Click and hold (or tap and hold) on the item you want to move.<br />
			2. Drag your finger across the trackpad to move the item to the desired location.<br />
			3. Release your finger to drop the item.<br />
		</p>
		<p>
			You can adjust the sensitivity of drag-and-drop in your trackpad or mouse settings if needed.
		</p>
	</div>
);

export default DragAndDrop;
