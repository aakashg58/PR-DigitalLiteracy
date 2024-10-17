import React from 'react';
import '../Layouts/Main/FAQ/LongAnswers.css';

const SavedFile = () => (
	<div className="container">
		<h1>Finding and Organizing Saved Files</h1>
		<p>If you&apos;re having trouble finding a saved file and want to adjust settings to make it easier to find, follow these steps:</p>

		<h2>Finding Your File:</h2>
		<ol>
			<li>
				<strong>Search for the File:</strong>
				<ul>
					<li>
						<strong>Windows:</strong> Open File Explorer (Windows key + E) and use the Search bar in the top-right corner. Type the file name or keywords related to the file.
					</li>
					<li>
						<strong>macOS:</strong> Open Finder and use the Search bar in the top-right corner. Enter the file name or keywords.
					</li>
				</ul>
			</li>
			<li>
				<strong>Check Common Folders:</strong>
				<ul>
					<li><strong>Documents:</strong> Often used for saving files.</li>
					<li><strong>Downloads:</strong> Common for files downloaded from the internet.</li>
					<li><strong>Desktop:</strong> If you saved the file directly to your desktop.</li>
				</ul>
			</li>
			<li>
				<strong>Recent Files:</strong>
				<ul>
					<li><strong>Windows:</strong> Open File Explorer and click on Quick Access or Recent files.</li>
					<li><strong>macOS:</strong> Open Finder and click on Recents.</li>
				</ul>
			</li>
		</ol>

		<h2>Changing Settings to Find Files More Easily:</h2>
		<ol>
			<li>
				<strong>Organize File Locations:</strong>
				<ul>
					<li>Create Specific Folders: Organize your files into clearly labeled folders (e.g., Documents, Photos, Projects) to make them easier to find.</li>
				</ul>
			</li>
			<li>
				<strong>Set Default Save Locations:</strong>
				<ul>
					<li>
						<strong>Windows:</strong> Go to Settings &gt; System &gt; Storage. Under Save locations, you can change where files are saved by default.
					</li>
					<li>
						<strong>macOS:</strong> Open Finder &gt; Preferences &gt; Sidebar, and ensure that important folders like Documents, Downloads, and Desktop are checked to appear in the sidebar for quick access.
					</li>
				</ul>
			</li>
			<li>
				<strong>Use Desktop Shortcuts:</strong>
				<ul>
					<li>
						<strong>Windows and macOS:</strong> You can create shortcuts or aliases to frequently used folders on your desktop for easy access.
					</li>
				</ul>
			</li>
			<li>
				<strong>Search Indexing:</strong>
				<ul>
					<li>
						<strong>Windows:</strong> Go to Settings &gt; Search &gt; Searching Windows. Ensure that the locations where you save files are included in the search index.
					</li>
					<li>
						<strong>macOS:</strong> Use Spotlight by pressing Command + Space and typing the file name or keywords. Spotlight searches indexed locations, so make sure your files are in indexed folders.
					</li>
				</ul>
			</li>
		</ol>

		<p>By using these methods, you should be able to locate your file and set up your system to make future file retrieval easier.</p>
	</div>
);

export default SavedFile;
