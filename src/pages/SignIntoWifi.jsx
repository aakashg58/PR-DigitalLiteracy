import React from 'react';
import '../Layouts/Main/FAQ/LongAnswers.css';

const SignIntoWifi = () => (
	<div className="container">
		<h1>How to Sign Into Wi-Fi and Check if It’s Working</h1>
		<p>To sign into Wi-Fi and check if it’s working, follow these steps:</p>

		<h2>1. Connecting to Wi-Fi:</h2>
		<h3>On Windows:</h3>
		<ol>
			<li>
				<strong>Open Network Settings:</strong> Click the Wi-Fi icon on the taskbar (bottom-right corner of the screen).
			</li>
			<li>
				<strong>Select a Network:</strong> Click "Network & Internet settings" or directly on the Wi-Fi network you want to connect to.
			</li>
			<li>
				<strong>Choose a Network:</strong> Click on the desired network from the list.
			</li>
			<li>
				<strong>Connect:</strong> Click "Connect" and enter the Wi-Fi password if prompted. Click "Next" or "OK."
			</li>
		</ol>

		<h3>On macOS:</h3>
		<ol>
			<li>
				<strong>Open Wi-Fi Settings:</strong> Click the Wi-Fi icon on the menu bar (top-right corner of the screen).
			</li>
			<li>
				<strong>Select a Network:</strong> Choose the desired network from the list.
			</li>
			<li>
				<strong>Connect:</strong> Enter the Wi-Fi password if required and click "Join."
			</li>
		</ol>

		<h2>2. Checking If Wi-Fi is Working:</h2>
		<ol>
			<li>
				<strong>Check Connection Status:</strong>
				<ul>
					<li><strong>Windows:</strong> Click the Wi-Fi icon on the taskbar. You should see "Connected" under the network name.</li>
					<li><strong>macOS:</strong> Click the Wi-Fi icon on the menu bar. The network name should be shown with a checkmark if connected.</li>
				</ul>
			</li>
			<li>
				<strong>Test Your Connection:</strong> Open a web browser and try visiting a website. If the website loads, your Wi-Fi is working.
			</li>
			<li>
				<strong>Check Signal Strength:</strong>
				<ul>
					<li><strong>Windows:</strong> Hover over the Wi-Fi icon to see the signal strength indicator.</li>
					<li><strong>macOS:</strong> The Wi-Fi icon shows signal strength with the number of bars.</li>
				</ul>
			</li>
		</ol>

		<h2>Troubleshooting:</h2>
		<ul>
			<li><strong>Restart Your Router:</strong> Unplug and plug back in if you have connection issues.</li>
			<li><strong>Forget and Reconnect:</strong> Go to network settings, forget the network, and reconnect by entering the password again.</li>
			<li><strong>Check for Outages:</strong> Contact your Internet Service Provider (ISP) if the issue persists.</li>
		</ul>

		<p>These steps should help you connect to Wi-Fi and verify that it’s working properly.</p>
	</div>
);

export default SignIntoWifi;
