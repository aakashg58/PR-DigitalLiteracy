import React from 'react';
import '../Layouts/Main/FAQ/LongAnswers.css';

const GoBackPage = () => (
	<div className="container">
		<h1>How to Go Back to a Previous Page</h1>
		<p>To navigate to the previous page in your web browser, follow these steps:</p>

		<h2>1. Using the Browser’s Back Button:</h2>
		<p>
			<strong>Windows and macOS:</strong> Look for the Back Arrow (usually located at the top-left corner of the browser window). Click it to go back to the previous page you visited.
		</p>

		<h2>2. Using Keyboard Shortcuts:</h2>
		<p>
			<strong>Windows:</strong> Press <kbd>Alt</kbd> + <kbd>Left Arrow</kbd> to go back to the previous page.
		</p>
		<p>
			<strong>macOS:</strong> Press <kbd>Command</kbd> + <kbd>Left Arrow</kbd> to go back to the previous page.
		</p>

		<h2>3. Using Browser History:</h2>
		<p>
			<strong>Windows and macOS:</strong> Click the Menu (three horizontal lines or dots) in the top-right corner, then select <em>History</em>. From here, you can select a previously visited page to go back to.
		</p>

		<p>
			These methods should help you quickly return to a previous page while browsing the web.
		</p>
	</div>
);

export default GoBackPage;
