import React from 'react';
import '../Layouts/Main/FAQ/LongAnswers.css';

const CustomizeSettingsApp = () => (
	<div className="container">
		<h1>Customize Your Computer Settings</h1>
		<p>
			To make your computer more useful by adjusting settings like brightness, sound, display, text size, and cursor speed, you&apos;ll need to access your Settings or Control Panel. Here&apos;s how to find and adjust these settings on different operating systems:
		</p>
		<h2>For Windows:</h2>
		<ol>
			<li>
				<strong>Open Settings:</strong>
				<ul>
					<li>Press the Windows key + I or click the Start Menu and select Settings (gear icon).</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Brightness:</strong>
				<ul>
					<li>Go to <em>System</em> &gt; <em>Display</em>. Use the Brightness slider to adjust the screen brightness.</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Sound:</strong>
				<ul>
					<li>Go to <em>System</em> &gt; <em>Sound</em>. Here you can adjust the volume and manage sound settings.</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Display:</strong>
				<ul>
					<li>Go to <em>System</em> &gt; <em>Display</em>. You can change the Resolution, Orientation, and Scaling to adjust text size and display settings.</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Text Size:</strong>
				<ul>
					<li>In <em>System</em> &gt; <em>Display</em>, use the Scale and layout section to change the text size.</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Cursor Speed:</strong>
				<ul>
					<li>Go to <em>Devices</em> &gt; <em>Mouse</em> &gt; <em>Additional mouse options</em>. Under the Pointer Options tab, adjust the Select a pointer speed slider.</li>
				</ul>
			</li>
		</ol>
		<h2>For macOS:</h2>
		<ol>
			<li>
				<strong>Open System Preferences:</strong>
				<ul>
					<li>Click the Apple menu (top-left corner) and select <em>System Preferences</em>.</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Brightness:</strong>
				<ul>
					<li>Go to <em>Displays</em> and use the Brightness slider.</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Sound:</strong>
				<ul>
					<li>Go to <em>Sound</em> to adjust the volume and manage sound output.</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Display:</strong>
				<ul>
					<li>In <em>Displays</em>, you can change the Resolution and Brightness.</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Text Size:</strong>
				<ul>
					<li>macOS doesn&apos;t have a direct text size setting, but you can adjust Display Resolution in <em>Displays</em> to make text and icons appear larger.</li>
				</ul>
			</li>
			<li>
				<strong>Adjust Cursor Speed:</strong>
				<ul>
					<li>Go to <em>System Preferences</em> &gt; <em>Accessibility</em> &gt; <em>Pointer Control</em> (or <em>Mouse & Trackpad</em>). Adjust the Tracking speed slider.</li>
				</ul>
			</li>
		</ol>
		<h2>General Tips:</h2>
		<ul>
			<li>Explore Additional Settings: Both Windows and macOS offer advanced settings for more detailed customization.</li>
			<li>Check Accessibility Options: Both operating systems have accessibility features that provide additional customization options for users with specific needs.</li>
		</ul>
		<p>
			Adjusting these settings helps tailor your computer to your preferences, making it more comfortable and efficient for your use.
		</p>
	</div>
);

export default CustomizeSettingsApp;
