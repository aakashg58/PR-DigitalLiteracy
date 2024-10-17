import { Link } from 'react-router-dom';
import '../Layouts/Main/FAQ/FAQ.css';
import elasticlunr from 'elasticlunr';
import React, { useState, useEffect } from 'react';

const MAX_ANSWER_LENGTH = 100; // max character length for answers

const faqItems = [
	{
		question: 'I got a new computer, so what do I do now?',
		answer: 'Turn it on, follow the setup instructions, connect to Wi-Fi, update the operating system, and install antivirus software. Explore pre-installed apps and set up your email to get started.',
		path: '/NewComputer',
	},
	{
		question: 'What kind of computer am I using?',
		answer: 'Look for your operating system (Windows, macOS, etc.), physical design (laptop or desktop), and branding (e.g., Apple logo for Mac). You can also check system settings for detailed specifications.',
		path: '/ComputerType',
	},
	{
		question: 'What are the icons I see when I look at my phone?',
		answer: 'Icons represent different apps like Phone, Messages, Email, Camera, Settings, and Social Media. Tap an icon to open its corresponding app or feature.',
		path: '/PhoneIcons',
	},
	{
		question: 'How can I get my emails on my phone?',
		answer: 'Go to Settings > Mail (iPhone) or Settings > Accounts (Android), and add your email account by entering your email and password. You can also use specific email apps like Gmail or Outlook.',
		path: '/EmailOnPhone',
	},
	{
		question: 'What is the difference between all the mail apps?',
		answer: 'Mail apps differ in features, design, integration, and security. Native apps come pre-installed, while third-party apps like Gmail or Outlook offer extra features like categorization and scheduling.',
		path: '/MailAppDifference',
	},
	{
		question: 'Can I get my school emails on my personal account?',
		answer: 'Yes, you can forward school emails to your personal account or add your school email to your personal mail app. Check your schools settings for email forwarding',
		path: '/SchoolEmailPersonal',
	},
	{
		question: 'What is the "page cannot be found" error i keep getting?',
		answer: 'The "Error, page cannot be found" message typically occurs when your computer is trying to access a webpage that is either unavailable or doesnt exist.',
		path: '/ComputerErrors',
	},
	{
		question: 'What is the "404" error i keep getting?',
		answer: 'A "404" error message means that the webpage youre trying to access cannot be found on the server. This is one of the most common web errors.',
		path: '/ComputerErrors',
	},
	{
		question: 'What is the "advance security warning" error i keep getting?',
		answer: 'If your computer is getting an advanced security warning message, it generally means theres a potential security issue with the website or network youre trying to access.',
		path: '/ComputerErrors',
	},
	{
		question: 'What is the "cannot load page" error i keep getting?',
		answer: 'The "Cannot load page" message typically occurs when your computer cannot access the website youre trying to visit.',
		path: '/ComputerErrors',
	},
	{
		question: 'What is the "no internet connection" error i keep getting?',
		answer: 'The "No Internet connection" message means your computer is unable to connect to the internet.',
		path: '/ComputerErrors',
	},
	{
		question: 'How do I right-click?',
		answer: 'On a mouse, press the right button. On a trackpad, tap with two fingers (Windows) or click while holding the Control key (Mac).',
		path: '/RightClick',
	},
	{
		question: 'How do I drag and drop?',
		answer: 'Click and hold the item, drag it to a new location, and release it. On a trackpad, use your finger to drag and drop.',
		path: '/DragAndDrop',
	},
	{
		question: 'What is a trackpad?',
		answer: 'A trackpad (also called a touchpad) is a built-in, flat, touch-sensitive surface on laptops that you can use instead of a mouse to control the cursor.',
		path: '/Trackpad',
	},
	{
		question: 'What is a browser/search engine?',
		answer: 'A browser is a software application that allows you to access and view websites on the internet. Popular browsers include Google Chrome, Safari, Firefox, and Microsoft Edge.',
		path: '/BrowserSearchEngine',
	},
	{
		question: 'What is the difference between a browser and app?',
		answer: 'A browser is used to navigate the web, while an app performs specific tasks, like editing documents. Browsers can run web apps, but apps work directly on your device.',
		path: '/BrowserVsApp',
	},
	{
		question: 'What is Canvas?',
		answer: 'Canvas is an online platform used by schools for managing courses, assignments, and grades.',
		path: '/Canvas',
	},
	{
		question: 'How do I "search" the web?',
		answer: 'Open a browser, go to a search engine like Google, type your keywords in the search bar, and press Enter to see results.',
		path: '/SearchWeb',
	},
	{
		question: 'Where do i find my computer settings?',
		answer: 'Find settings by opening the Start Menu (Windows) or System Preferences (macOS). Adjust brightness, sound, display, and cursor speed to suit your needs.',
		path: '/CustomizeSettingsApp',
	},
	{
		question: 'Where do i find where i saved my file?',
		answer: 'Search common folders like Documents, Downloads, or Desktop. You can also use the search bar in File Explorer (Windows) or Finder (macOS).',
		path: '/SavedFile',
	},
	{
		question: 'How do i sign into Wi-Fi?',
		answer: 'Click the Wi-Fi icon on your taskbar (Windows) or menu bar (macOS), select your network, enter the password, and connect.',
		path: '/SignIntoWifi',
	},
	{
		question: 'What is cache & cookies?',
		answer: 'Cache stores website data for faster loading, and cookies save your login and preferences. Clearing them can fix some browsing issues.',
		path: '/CacheAndCookies',
	},
	{
		question: 'How do I go back to the previous page?',
		answer: 'Click the back arrow in your browser or press Alt + Left Arrow (Windows) or Command + Left Arrow (Mac) to return to the previous page.',
		path: '/GoBackPage',
	},
	{
		question: 'How do I get to my student email?',
		answer: 'Go to your school’s email login page, enter your student email and password, or add your account to an email app.',
		path: '/StudentEmail',
	},
	{
		question: "How do I know I'm using the right email account?",
		answer: 'Check the email address and verify it matches your official student email. Look at your inbox to ensure you’re receiving relevant emails.',
		path: '/RightEmailAccount',
	},
	{
		question: "Where do I find my professor's contact info?",
		answer: 'Check the course syllabus, the university website’s faculty directory, or your learning management system (Canvas, Blackboard, etc.).',
		path: '/ProfessorContact',
	},
];

export default function FAQ() {
	const [activeIndex, setActiveIndex] = useState(null);
	const [searchQuery, setSearchQuery] = useState(''); // To store the search input
	const [index, setIndex] = useState(null); // Store the Elasticlunr index
	const [filteredFAQItems, setFilteredFAQItems] = useState(faqItems); // Filtered FAQ results

	useEffect(() => {
		// Initialize Elasticlunr index
		const newIndex = elasticlunr();
		newIndex.addField('question'); // Add question field to index
		newIndex.addField('answer'); // Add answer field to index
		newIndex.setRef('id'); // Set unique identifier for each document

		// Add FAQ data to the index
		faqItems.forEach((item, idx) => {
			newIndex.addDoc({ id: idx, question: item.question, answer: item.answer });
		});

		setIndex(newIndex); // Store the index in state
	}, []);

	const toggleFAQ = (faqIndex) => {
		setActiveIndex(activeIndex === faqIndex ? null : faqIndex);
	};

	const renderAnswer = (item) => {
		const { answer, path } = item;
		if (answer.length > MAX_ANSWER_LENGTH) {
			return (
				<>
					{answer.substring(0, MAX_ANSWER_LENGTH)}...
					{path ? (
						<Link to={path} className="read-more">Read More</Link>
					) : (
						<span className="read-more">Read More</span>
					)}
				</>
			);
		}
		return answer;
	};

	const handleSearch = (query) => {
		setSearchQuery(query);
		if (index && query.trim()) {
			// Execute the search using Elasticlunr index
			const results = index.search(query, {
				expand: true, // Expand search to match related terms
			});

			// Filter FAQ items based on search results
			const filteredResults = results.map(({ ref }) => faqItems[ref]);
			setFilteredFAQItems(filteredResults);
		} else {
			// If no search query, show all FAQ items
			setFilteredFAQItems(faqItems);
		}
	};

	return (
		<div className="faq-container">
			<header>
				<h1>Frequently Asked Questions</h1>
				<div>
					Got a question? We&apos;re here to answer. If you don&apos;t see your question below,{' '}
					<button type="button" className="ask-question">ask it here</button>
				</div>
			</header>

			<div className="search-bar">
				<input
					type="text"
					placeholder="Search Questions"
					value={searchQuery}
					onChange={(e) => handleSearch(e.target.value)} // Update searchQuery when input changes
				/>
			</div>

			<ul className="faq-list">
				{filteredFAQItems.map((item, faqIndex) => (
					<li
						key={`faq-${item.question}`} // Use a unique identifier as the key instead of the array index
						className={`faq-item ${activeIndex === faqIndex ? 'active' : ''}`}
					>
						<div
							className="question"
							onClick={() => toggleFAQ(faqIndex)}
							onKeyPress={(e) => e.key === 'Enter' && toggleFAQ(faqIndex)}
							role="button"
							tabIndex={0}
						>
							<span>{item.question}</span>
							<span>{activeIndex === faqIndex ? '-' : '>'}</span>
						</div>
						{activeIndex === faqIndex && <div className="answer">{renderAnswer(item)}</div>}
					</li>
				))}
			</ul>
		</div>
	);
}
