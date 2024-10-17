import React from 'react';
import '../Layouts/Main/FAQ/LongAnswers.css';

const CacheAndCookies = () => (
	<div className="container">
		<h1>Cache and Cookies</h1>

		<h2>1. Cache</h2>
		<p>
			<strong>What It Is:</strong> A cache is a temporary storage area where your browser saves copies of web pages, images, and other resources.
		</p>
		<p>
			<strong>What It Does:</strong> It helps speed up your browsing experience by loading frequently accessed items from the cache rather than downloading them again from the internet. This can make websites load faster.
		</p>

		<h2>2. Cookies</h2>
		<p>
			<strong>What They Are:</strong> Cookies are small text files stored on your computer by websites you visit.
		</p>
		<p>
			<strong>What They Do:</strong> They save information about your visits, such as login details, site preferences, and tracking data. Cookies help websites remember your settings and keep you logged in.
		</p>

		<h2>Common Troubleshooting Solutions</h2>

		<h3>1. Clearing Cache:</h3>
		<p>
			<strong>Purpose:</strong> Resolves issues with outdated or corrupted files causing problems with website loading or performance.
		</p>
		<p>
			<strong>How to Do It:</strong>
			<ul>
				<li><strong>Windows:</strong> Open Settings &gt; System &gt; Storage &gt; Temporary files and clear the cache.</li>
				<li><strong>macOS:</strong> Go to Safari &gt; Preferences &gt; Privacy &gt; Manage Website Data and remove cached files. For Chrome, go to Settings &gt; Privacy and security &gt; Clear browsing data and select Cached images and files.</li>
			</ul>
		</p>

		<h3>2. Clearing Cookies:</h3>
		<p>
			<strong>Purpose:</strong> Fixes issues with login problems, outdated or incorrect site settings, and tracking problems.
		</p>
		<p>
			<strong>How to Do It:</strong>
			<ul>
				<li><strong>Windows:</strong> Open Settings &gt; Privacy & Security &gt; Clear browsing data. Select Cookies and other site data.</li>
				<li><strong>macOS:</strong> Go to Safari &gt; Preferences &gt; Privacy &gt; Manage Website Data and remove cookies. For Chrome, go to Settings &gt; Privacy and security &gt; Clear browsing data and select Cookies and other site data.</li>
			</ul>
		</p>

		<p>
			Clearing cache and cookies can help resolve various browsing issues and improve overall performance.
		</p>
	</div>
);

export default CacheAndCookies;
