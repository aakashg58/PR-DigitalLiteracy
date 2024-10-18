const faqItems = [
	{
		question: 'I got a new computer, so what do I do now?',
		answer:
			'Turn it on, follow the setup instructions, connect to Wi-Fi, update the operating system, and install antivirus software. Explore pre-installed apps and set up your email to get started.',
		longAnswers: `<div className="container">
		<h1>What to do with your new computer</h1>
		<p>Congratulations on your new computer! Here's what you can do to get started:</p>
		<p>
			Turn It On: Press the power button to switch on your computer. The power button is typically on the top of your
			keyboard but in some cases it may be on the side of your laptop.
		</p>
		<p>
			Follow Setup Instructions: Complete the initial setup by choosing a language, connecting to Wi-Fi, and creating a
			user account.
		</p>
		<p>If you do not know or have access to a Wi-Fi, you can move forward without setting up a Wi-Fi.</p>
		<p>
			Update the Operating System: Check for updates (Windows: Start Settings Update & Security. MacOS: Apple menu
			System Preferences Software Update) and install any that are available.
		</p>
		<p>Install Antivirus Software: Protect your computer by downloading and installing antivirus software.</p>
		<p>
			Explore Built-in Apps: Get familiar with the pre-installed applications, such as the web browser and email client.
		</p>
		<p>
			Set Up Email: Add your email account using the built-in email application to start sending and receiving emails.
		</p>
		<p>
			Learn Basic Navigation: Practice opening, closing, and switching between applications. Learn useful keyboard
			shortcuts like Ctrl+C (copy) and Ctrl+V (paste).
		</p>
	</div>`,
	},
	{
		question: 'What kind of computer am I using?',
		answer:
			'Look for your operating system (Windows, macOS, etc.), physical design (laptop or desktop), and branding (e.g., Apple logo for Mac). You can also check system settings for detailed specifications.',
		longAnswers: `<div className="container">
		<h1>To determine what kind of computer you&apos;re using, you can look at several factors</h1>
		<p>Congratulations on your new computer! Here&apos;s what you can do to get started:</p>
		<p>
			Operating System: Check if you&apos;re using Windows, macOS, Linux, or another operating system. This information is usually displayed on the desktop or in system settings.
		</p>
		<p>
			Physical Design: Laptops and desktops have distinct designs. Laptops are portable and have built-in displays, while desktops typically have separate monitors and larger CPU towers.
		</p>
		<p>
			Branding: Look for any logos or branding on the device itself. For example, if you see an Apple logo, you&apos;re likely using a Mac computer.
		</p>
		<p>
			System Information: You can also find detailed information about your computer&apos;s specifications, including the manufacturer and model, in the system settings or by using system information tools.
		</p>
		<p>
			Once you gather this information, you&apos;ll have a better understanding of the type of computer you&apos;re using.
		</p>
	</div>`,
	},
	{
		question: 'What are the icons I see when I look at my phone?',
		answer:
			'Icons represent different apps like Phone, Messages, Email, Camera, Settings, and Social Media. Tap an icon to open its corresponding app or feature.',
		path: '',
	},
	{
		question: 'How can I get my emails on my phone?',
		answer:
			'Go to Settings > Mail (iPhone) or Settings > Accounts (Android), and add your email account by entering your email and password. You can also use specific email apps like Gmail or Outlook.',
		path: '',
	},
	{
		question: 'What is the difference between all the mail apps?',
		answer:
			'Mail apps differ in features, design, integration, and security. Native apps come pre-installed, while third-party apps like Gmail or Outlook offer extra features like categorization and scheduling.',
		path: '',
	},
	{
		question: 'Can I get my school emails on my personal account?',
		answer:
			'Yes, you can forward school emails to your personal account or add your school email to your personal mail app. Check your schools settings for email forwarding',
		path: '',
	},
	{
		question: 'What is the "page cannot be found" error i keep getting?',
		answer:
			'The "Error, page cannot be found" message typically occurs when your computer is trying to access a webpage that is either unavailable or doesnt exist.',
		path: '',
	},
	{
		question: 'What is the "404" error i keep getting?',
		answer:
			'A "404" error message means that the webpage youre trying to access cannot be found on the server. This is one of the most common web errors.',
		path: '',
	},
	{
		question: 'What is the "advance security warning" error i keep getting?',
		answer:
			'If your computer is getting an advanced security warning message, it generally means theres a potential security issue with the website or network youre trying to access.',
		path: '',
	},
	{
		question: 'What is the "cannot load page" error i keep getting?',
		answer:
			'The "Cannot load page" message typically occurs when your computer cannot access the website youre trying to visit.',
		path: '',
	},
	{
		question: 'What is the "no internet connection" error i keep getting?',
		answer: 'The "No Internet connection" message means your computer is unable to connect to the internet.',
		path: '',
	},
	{
		question: 'How do I right-click?',
		answer:
			'On a mouse, press the right button. On a trackpad, tap with two fingers (Windows) or click while holding the Control key (Mac).',
	},
	{
		question: 'How do I drag and drop?',
		answer:
			'Click and hold the item, drag it to a new location, and release it. On a trackpad, use your finger to drag and drop.',
		path: '',
	},
	{
		question: 'What is a trackpad?',
		answer:
			'A trackpad (also called a touchpad) is a built-in, flat, touch-sensitive surface on laptops that you can use instead of a mouse to control the cursor.',
		title: 'How it works:',
		body: [
			'You move your finger across the trackpad to move the cursor on the screen. You can tap on it to click or use two-finger taps or swipes for right-clicking and scrolling.',
			"Trackpads often come with multi-touch gestures, like zooming, swiping between apps, and more, depending on your laptop's settings.",
		],
	},
	{
		question: 'What is a browser/search engine?',
		answer:
			'A browser is a software application that allows you to access and view websites on the internet. Popular browsers include Google Chrome, Safari, Firefox, and Microsoft Edge.',
		path: '',
	},
	{
		question: 'What is the difference between a browser and app?',
		answer:
			'A browser is used to navigate the web, while an app performs specific tasks, like editing documents. Browsers can run web apps, but apps work directly on your device.',
		path: '',
	},
	{
		question: 'What is Canvas?',
		answer: 'Canvas is an online platform used by schools for managing courses, assignments, and grades.',
		path: '',
	},
	{
		question: 'How do I "search" the web?',
		answer:
			'Open a browser, go to a search engine like Google, type your keywords in the search bar, and press Enter to see results.',
		path: '',
	},
	{
		question: 'Where do i find my computer settings?',
		answer:
			'Find settings by opening the Start Menu (Windows) or System Preferences (macOS). Adjust brightness, sound, display, and cursor speed to suit your needs.',
		path: '',
	},
	{
		question: 'Where do i find where i saved my file?',
		answer:
			'Search common folders like Documents, Downloads, or Desktop. You can also use the search bar in File Explorer (Windows) or Finder (macOS).',
		path: '',
	},
	{
		question: 'How do i sign into Wi-Fi?',
		answer:
			'Click the Wi-Fi icon on your taskbar (Windows) or menu bar (macOS), select your network, enter the password, and connect.',
		path: '',
	},
	{
		question: 'What is cache & cookies?',
		answer:
			'Cache stores website data for faster loading, and cookies save your login and preferences. Clearing them can fix some browsing issues.',
		path: '',
	},
	{
		question: 'How do I go back to the previous page?',
		answer:
			'Click the back arrow in your browser or press Alt + Left Arrow (Windows) or Command + Left Arrow (Mac) to return to the previous page.',
		path: '',
	},
	{
		question: 'How do I get to my student email?',
		answer:
			'Go to your school’s email login page, enter your student email and password, or add your account to an email app.',
		longAnswers: `<div className="container">
  			<h1>How to Access Your Student Email and Gateway</h1>
  			<p>To access your student email or gateway, follow these steps:</p>
  			<h2>1. Accessing Your Student Email:</h2>
  			<h3>Via a Web Browser:</h3>
  			<ol>
    <li><strong>Open Your Web Browser:</strong> Launch Chrome, Firefox, Safari, or another browser.</li>
    <li><strong>Go to Your School’s Email Login Page:</strong> This is often found on your school’s website or directly via a URL provided by your institution. For example, it might be something like <code>mail.yourschool.edu</code> or <code>email.yourschool.edu</code>.</li>
    <li><strong>Enter Your Credentials:</strong> Type in your student email address and password.</li>
    <li><strong>Click Login:</strong> Access your inbox and manage your emails.</li>
  </ol>
  <h3>Via Email App:</h3>
  <ol>
    <li><strong>Open Your Email App:</strong> On your phone or computer.</li>
    <li><strong>Add a New Account:</strong> Go to settings and select <em>Add Account</em> or <em>Add Email Account</em>.</li>
    <li><strong>Enter Your Student Email and Password:</strong> Follow prompts to set up the account.</li>
  </ol>
  <h2>2. Accessing Your Student Gateway (Portal):</h2>
  <ol>
    <li><strong>Open Your Web Browser:</strong> Launch your preferred browser.</li>
    <li><strong>Navigate to Your School’s Portal:</strong> This could be <code>portal.yourschool.edu</code> or a similar URL. You can often find this link on your school’s website.</li>
    <li><strong>Log In:</strong> Enter your student credentials (username and password) as provided by your school.</li>
    <li><strong>Access Your Resources:</strong> Once logged in, you can access grades, schedules, financial aid, and other student resources.</li>
  </ol>
  <p>If you encounter issues, check with your school’s IT department or student support for assistance.</p>
</div>`,
	},
	{
		question: "How do I know I'm using the right email account?",
		answer:
			'Check the email address and verify it matches your official student email. Look at your inbox to ensure you’re receiving relevant emails.',
		path: '',
	},
	{
		question: "Where do I find my professor's contact info?",
		answer:
			'Check the course syllabus, the university website’s faculty directory, or your learning management system (Canvas, Blackboard, etc.).',
		path: '',
	},
];

export default faqItems;
