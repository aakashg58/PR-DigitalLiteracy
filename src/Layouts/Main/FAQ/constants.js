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
		longAnswers: `<div className="container">
		<h1>Here are some common icons you might encounter:</h1>
		<p>
			Phone: The icon usually looks like a telephone handset, used to make and receive calls.
		</p>
		<p>
			Messages: Represented by a speech bubble, used for sending and receiving text messages.
		</p>
		<p>
			Mail/Email: An envelope icon, used to access your email.
		</p>
		<p>
			Camera: A camera icon, used to take photos or videos.
		</p>
		<p>
			Photos/Gallery: Looks like a picture or a landscape, used to view your photos and videos.
		</p>
		<p>
			Settings: A gear or cog icon, used to access your phone&apos;s settings.
		</p>
		<p>
			Browser: A globe or compass icon, used to browse the internet.
		</p>
		<p>
			App Store/Play Store: A shopping bag or play button icon, used to download apps.
		</p>
		<p>
			Calendar: A calendar page icon, used to view and manage your schedule.
		</p>
		<p>
			Music: A musical note icon, used to access your music library or streaming service.
		</p>
		<p>
			Social Media: Icons for apps like Facebook, Twitter, Instagram, often represented by their respective logos.
		</p>
		<p>
			Clock: A clock face, used to access the alarm, stopwatch, and world clock features.
		</p>
		<p>
			Maps: A map or location pin icon, used for navigation and location services.
		</p>
		<p>
			These icons are shortcuts to different functionalities and apps on your phone. You can tap them to open the corresponding application or feature.
		</p>
	</div>`,
	},
	{
		question: 'How can I get my emails on my phone?',
		answer:
			'Go to Settings > Mail (iPhone) or Settings > Accounts (Android), and add your email account by entering your email and password. You can also use specific email apps like Gmail or Outlook.',
		longAnswers: `<div className="container">
		<h1>To get your emails on your phone, follow these steps:</h1>

		<h4>For iPhone:</h4>
		<p>Open Settings: Tap the Settings app on your home screen.</p>
		<p>Scroll and Tap Mail: Scroll down and select Mail.</p>
		<p>Add Account: Tap Accounts, then Add Account.</p>
		<p>
			Select Your Email Provider: Choose your email provider from the list (e.g., Google, Yahoo, Outlook). If your provider is not listed, tap Other.
		</p>
		<p>
			Enter Your Email Information: Follow the on-screen instructions to enter your email address, password, and any other required information.
		</p>
		<p>
			Save and Sync: Tap Next, then adjust the settings for what you want to sync (mail, contacts, calendars, etc.). Tap Save.
		</p>

		<h4>For Android:</h4>
		<p>Open Settings: Tap the Settings app on your home screen or app drawer.</p>
		<p>Accounts: Scroll down and tap Accounts or Accounts and backup.</p>
		<p>
			Add Account: Tap Add account, then select Email or Personal (IMAP/POP) if your email provider is not listed.
		</p>
		<p>
			Select Your Email Provider: Choose your email provider from the list or select Other.
		</p>
		<p>
			Enter Your Email Information: Follow the on-screen instructions to enter your email address, password, and any other required information.
		</p>
		<p>Sync Options: Adjust your sync settings as desired (mail, contacts, calendars, etc.). Tap Next or Save.</p>

		<h4>Using Email Apps:</h4>
		<p>You can also use specific email apps like Gmail, Outlook, or Yahoo Mail:</p>
		<p>Download the App: Go to the App Store (iPhone) or Google Play Store (Android) and download the email app.</p>
		<p>Open the App: Launch the app and follow the on-screen instructions.</p>
		<p>Sign In: Enter your email address and password to sign in.</p>
		<p>Customize Settings: Adjust any app-specific settings to fit your preferences.</p>
		<p>
			After completing these steps, your emails will be accessible on your phone through the email app or the built-in mail app.
		</p>
	</div>`,
	},
	{
		question: 'What is the difference between all the mail apps?',
		answer:
			'Mail apps differ in features, design, integration, and security. Native apps come pre-installed, while third-party apps like Gmail or Outlook offer extra features like categorization and scheduling.',
		longAnswers: `<div className="container">
		<h1>Here are some key distinctions among popular mail apps:</h1>
		<p>
			<strong>Native Mail Apps:</strong><br />
			<strong>Mail (iOS):</strong> Default for iPhone, integrates well with Apple services.<br />
			<strong>Gmail (Android):</strong> Default for Android, designed for Google accounts but supports others too.
		</p>
		<p>
			<strong>Third-Party Mail Apps:</strong><br />
			<strong>Gmail:</strong> Robust Google integration, strong search, and spam filtering.<br />
			<strong>Outlook:</strong> Integrates with Microsoft services, features a focused inbox and calendar.<br />
			<strong>Yahoo Mail:</strong> Customizable themes, news updates, supports various email accounts.
		</p>
		<p>
			<strong>Key Differences:</strong><br />
			<strong>User Interface:</strong> Design and ease of use.<br />
			<strong>Features:</strong> Email categorization, scheduling, integrated calendars.<br />
			<strong>Integration:</strong> With services like Google or Microsoft.<br />
			<strong>Security:</strong> Apps like ProtonMail offer encryption.<br />
			<strong>Customization:</strong> Notification settings, themes, layout.<br />
			<strong>Performance:</strong> Varies by device and email volume.
		</p>
		<p>
			Choose based on your needs for integration, features, and user interface preference.
		</p>
	</div>`,
	},
	{
		question: 'Can I get my school emails on my personal account?',
		answer:
			'Yes, you can forward school emails to your personal account or add your school email to your personal mail app. Check your schools settings for email forwarding',
		longAnswers: `<div className="container">
		<h1>Yes, you can get your school emails on your personal account by following these methods:</h1>

		<p><strong>Email Forwarding:</strong></p>
		<p>Set Up Forwarding from Your School Email:</p>
		<p>
			Log in to your school email account.<br />
			Go to settings and look for a forwarding option.<br />
			Enter your personal email address to forward incoming emails automatically.
		</p>

		<p><strong>Additional Tips:</strong></p>
		<p>
			Check with IT Support: Some schools have specific instructions for setting up email forwarding or adding accounts.
		</p>
		<p>
			Security: Ensure your personal account is secure, especially if it’s used for sensitive school information.
		</p>

		<p>
			By setting up forwarding or adding your school email to your personal account, you can conveniently manage all your emails in one place.
		</p>
	</div>`,
	},
	{
		question: 'What is the "page cannot be found" error i keep getting?',
		answer:
			'The "Error, page cannot be found" message typically occurs when your computer is trying to access a webpage that is either unavailable or doesnt exist.',
		longAnswers: `<div className="container">
		<h1>Common Computer Errors</h1>

		<h2>&ldquo;PAGE CAN NOT BE FOUND&rdquo; ERROR</h2>
		<p>
			The &ldquo;Error, page cannot be found&rdquo; message typically occurs when your computer is trying to access a webpage that is either unavailable or doesn&apos;t exist. Here are some common reasons why this happens:
		</p>
		<ul>
			<li>
				<strong>Broken or Dead Link:</strong> The webpage you&apos;re trying to visit may no longer exist or has been moved. Websites sometimes delete or change pages, leading to broken links.
			</li>
			<li>
				<strong>Incorrect URL:</strong> There might be a typo in the URL you entered, causing your browser to search for a non-existent page. Double-check the web address for errors.
			</li>
			<li>
				<strong>Website Server Issues:</strong> The website&apos;s server could be down or experiencing technical issues, making the page temporarily unavailable.
			</li>
			<li>
				<strong>Outdated Bookmark:</strong> If you&apos;re using a bookmark, it might be pointing to an old link that no longer works. Try navigating to the website manually.
			</li>
			<li>
				<strong>Caching Problems:</strong> Your browser may be loading an outdated version of the page from its cache. Clearing your browser&apos;s cache can help.
			</li>
			<li>
				<strong>DNS or Network Issues:</strong> Your computer might have trouble connecting to the website&apos;s server due to DNS (Domain Name System) issues or network connectivity problems.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Check the URL for typos.</li>
			<li>Refresh the page or try visiting it later.</li>
			<li>Clear your browser cache in settings.</li>
			<li>Restart your router or computer if there are network issues.</li>
			<li>Contact website support if the problem persists on their end.</li>
		</ul>
		<p>
			If the issue is only with one site, it&apos;s likely the site itself. If it happens often, it might be related to your browser or network settings.
		</p>

		<h2>&ldquo;404&rdquo; ERROR</h2>
		<p>
			A &ldquo;404&rdquo; error message means that the webpage you&apos;re trying to access cannot be found on the server. This is one of the most common web errors, and here&apos;s why it might occur:
		</p>
		<ul>
			<li>
				<strong>Page Does Not Exist:</strong> The webpage has been deleted or moved, but the URL hasn&apos;t been updated, leading to a broken link.
			</li>
			<li>
				<strong>Incorrect URL:</strong> You might have entered the wrong URL, causing the browser to search for a page that doesn&apos;t exist.
			</li>
			<li>
				<strong>Outdated Links or Bookmarks:</strong> If you&apos;re using a bookmark or clicking on a link from an old webpage, it could be pointing to a page that no longer exists.
			</li>
			<li>
				<strong>Website Restructuring:</strong> The website may have undergone restructuring or redesign, and certain pages might have been removed or relocated without proper redirects.
			</li>
			<li>
				<strong>Server Issue:</strong> There might be a problem with the website&apos;s server configuration, causing the page to be inaccessible even if it exists.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Check the URL for any typos or errors.</li>
			<li>Go to the website&apos;s homepage and use their navigation or search bar to find the page you&apos;re looking for.</li>
			<li>Clear your browser cache in case your browser is loading an outdated version of the page.</li>
			<li>Wait and try again later if the site is experiencing temporary issues.</li>
		</ul>
		<p>
			If you keep getting 404 errors on multiple websites, the problem might be with your internet connection or browser settings, though most of the time, it&apos;s a specific issue with the website you&apos;re trying to visit.
		</p>

		<h2>Advanced Security Warning</h2>
		<p>
			If your computer is getting an advanced security warning message, it generally means there&apos;s a potential security issue with the website or network you&apos;re trying to access. Here are common reasons why these warnings appear:
		</p>
		<ul>
			<li>
				<strong>Expired or Invalid SSL Certificates:</strong> Websites use SSL (Secure Sockets Layer) certificates to encrypt data and ensure secure communication. If a site&apos;s SSL certificate has expired, is invalid, or isn&apos;t trusted, your browser will trigger a security warning.
			</li>
			<li>
				<strong>Untrusted Website:</strong> The website you&apos;re trying to visit might not be considered trustworthy. This can happen if it&apos;s flagged for malware, phishing, or other malicious activities.
			</li>
			<li>
				<strong>Outdated Browser or Security Settings:</strong> An outdated browser may trigger security warnings if it can&apos;t properly handle the latest encryption standards. Ensure your browser is up to date.
			</li>
			<li>
				<strong>Insecure Connection (HTTP vs. HTTPS):</strong> If you&apos;re visiting a website that uses HTTP (instead of HTTPS), your browser might warn you that the connection is not secure, meaning your data could be exposed.
			</li>
			<li>
				<strong>Malware or Virus on Your Computer:</strong> In some cases, malware on your system might interfere with your browsing and trigger false security warnings. Running a malware scan can help determine if this is the issue.
			</li>
			<li>
				<strong>DNS Spoofing or Man-in-the-Middle Attack:</strong> If someone is intercepting your connection (e.g., on an unsecured public Wi-Fi), your browser might show a security warning. This protects you from entering sensitive information on a compromised network.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Check the URL to ensure you&apos;re visiting a legitimate website, especially for financial or sensitive services.</li>
			<li>Update your browser to the latest version.</li>
			<li>Clear your browser cache and cookies, as these can sometimes trigger security warnings.</li>
			<li>Check the website&apos;s SSL certificate: Click on the padlock icon next to the URL to view certificate details.</li>
			<li>Use a trusted Wi-Fi network: Avoid visiting sensitive sites on public or unsecured networks.</li>
			<li>Run a malware scan: Use antivirus software to check for malicious programs that could be triggering false warnings.</li>
		</ul>
		<p>
			If you&apos;re uncertain about a website&apos;s security, it&apos;s best to avoid entering any personal or financial information until you can verify it&apos;s safe.
		</p>

		<h2>&ldquo;CANNOT LOAD PAGE&rdquo; ERROR</h2>
		<p>
			The &ldquo;Cannot load page&rdquo; message typically occurs when your computer cannot access the website you&apos;re trying to visit. Here are some common reasons why this happens:
		</p>
		<ul>
			<li>
				<strong>Internet Connection Issues:</strong> Your computer might be offline, or there may be a weak or unstable connection. Ensure you&apos;re connected to the internet, and check your Wi-Fi or Ethernet connection.
			</li>
			<li>
				<strong>Website Server Problems:</strong> The website itself may be down or experiencing issues. If this happens on one specific site, the problem is likely on their end, and you can try again later.
			</li>
			<li>
				<strong>Incorrect URL:</strong> The web address you&apos;re trying to access might be wrong. Double-check the URL for any errors.
			</li>
			<li>
				<strong>Browser Cache Issues:</strong> Your browser may be trying to load an outdated or corrupted version of the page from its cache. Clearing your browser&apos;s cache can help fix this issue.
			</li>
			<li>
				<strong>Firewall or Security Settings:</strong> Your firewall, antivirus, or security settings might be blocking access to certain websites, preventing the page from loading.
			</li>
			<li>
				<strong>Browser Extensions or Plugins:</strong> Certain browser extensions or plugins could be interfering with the website. Try disabling them or using incognito/private mode to see if the page loads.
			</li>
			<li>
				<strong>DNS Problems:</strong> The DNS (Domain Name System) that translates website names into IP addresses might not be working properly. Restarting your router or changing your DNS settings (e.g., using Google&apos;s public DNS: 8.8.8.8) may help.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Check your internet connection by visiting another website to see if it loads.</li>
			<li>Try accessing the site from a different browser or device to see if the problem is browser-specific.</li>
			<li>Clear your browser cache and cookies.</li>
			<li>Disable browser extensions to rule out conflicts.</li>
			<li>Wait and try again later if the website is down.</li>
		</ul>
		<p>
			These steps should help resolve most &ldquo;Cannot load page&rdquo; errors. If the issue persists, you might need to contact your internet service provider or the website&apos;s support team.
		</p>

		<h2>&ldquo;NO INTERNET CONNECTION&rdquo; ERROR</h2>
		<p>
			The &ldquo;No Internet connection&rdquo; message means your computer is unable to connect to the internet. Here are the common reasons why this might happen and how to fix it:
		</p>
		<ul>
			<li>
				<strong>Wi-Fi or Ethernet Not Connected:</strong> Your computer may not be connected to a Wi-Fi network or Ethernet cable. Check your network connections to ensure you&apos;re properly connected.
			</li>
			<li>
				<strong>Weak or Unstable Wi-Fi Signal:</strong> The Wi-Fi signal might be too weak, causing intermittent or no connection.
			</li>
			<li>
				<strong>Router or Modem Issues:</strong> The router or modem may not be working properly or could need a reset.
			</li>
			<li>
				<strong>ISP (Internet Service Provider) Outage:</strong> Your ISP may be experiencing an outage, preventing internet access.
			</li>
			<li>
				<strong>Network Settings or Configuration:</strong> Incorrect network settings on your computer can block internet access.
			</li>
			<li>
				<strong>DNS or IP Address Issues:</strong> Problems with your DNS settings or IP address can prevent you from connecting.
			</li>
			<li>
				<strong>Firewall or Security Software Blocking the Connection:</strong> Security software, like a firewall or antivirus, may be blocking your internet connection.
			</li>
			<li>
				<strong>Network Adapter Problems:</strong> The network adapter on your computer might not be functioning properly.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Go to your computer&apos;s network settings and reconnect to your Wi-Fi or plug in your Ethernet cable.</li>
			<li>Move closer to the Wi-Fi router or reset the router to improve signal strength.</li>
			<li>Restart your router and modem by unplugging them for 30 seconds, then plugging them back in.</li>
			<li>Contact your ISP to check if there&apos;s a service outage in your area.</li>
			<li>Go to your computer&apos;s network settings, reset your network configuration, or troubleshoot the connection in the settings.</li>
			<li>You can try restarting your computer, resetting the network, or changing your DNS settings to something like Google&apos;s DNS (8.8.8.8).</li>
			<li>Temporarily disable the firewall or antivirus and see if the connection is restored.</li>
			<li>Run a network troubleshooter in your computer&apos;s settings or check for driver updates for the network adapter.</li>
		</ul>
		<p>
			These solutions should help you identify and fix the &ldquo;No Internet connection&rdquo; error. If none of these work, it might be a hardware issue, and contacting technical support could be necessary.
		</p>
	</div>`,
	},
	{
		question: 'What is the "404" error i keep getting?',
		answer:
			'A "404" error message means that the webpage youre trying to access cannot be found on the server. This is one of the most common web errors.',
		longAnswers: `<div className="container">
		<h1>Common Computer Errors</h1>

		<h2>&ldquo;PAGE CAN NOT BE FOUND&rdquo; ERROR</h2>
		<p>
			The &ldquo;Error, page cannot be found&rdquo; message typically occurs when your computer is trying to access a webpage that is either unavailable or doesn&apos;t exist. Here are some common reasons why this happens:
		</p>
		<ul>
			<li>
				<strong>Broken or Dead Link:</strong> The webpage you&apos;re trying to visit may no longer exist or has been moved. Websites sometimes delete or change pages, leading to broken links.
			</li>
			<li>
				<strong>Incorrect URL:</strong> There might be a typo in the URL you entered, causing your browser to search for a non-existent page. Double-check the web address for errors.
			</li>
			<li>
				<strong>Website Server Issues:</strong> The website&apos;s server could be down or experiencing technical issues, making the page temporarily unavailable.
			</li>
			<li>
				<strong>Outdated Bookmark:</strong> If you&apos;re using a bookmark, it might be pointing to an old link that no longer works. Try navigating to the website manually.
			</li>
			<li>
				<strong>Caching Problems:</strong> Your browser may be loading an outdated version of the page from its cache. Clearing your browser&apos;s cache can help.
			</li>
			<li>
				<strong>DNS or Network Issues:</strong> Your computer might have trouble connecting to the website&apos;s server due to DNS (Domain Name System) issues or network connectivity problems.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Check the URL for typos.</li>
			<li>Refresh the page or try visiting it later.</li>
			<li>Clear your browser cache in settings.</li>
			<li>Restart your router or computer if there are network issues.</li>
			<li>Contact website support if the problem persists on their end.</li>
		</ul>
		<p>
			If the issue is only with one site, it&apos;s likely the site itself. If it happens often, it might be related to your browser or network settings.
		</p>

		<h2>&ldquo;404&rdquo; ERROR</h2>
		<p>
			A &ldquo;404&rdquo; error message means that the webpage you&apos;re trying to access cannot be found on the server. This is one of the most common web errors, and here&apos;s why it might occur:
		</p>
		<ul>
			<li>
				<strong>Page Does Not Exist:</strong> The webpage has been deleted or moved, but the URL hasn&apos;t been updated, leading to a broken link.
			</li>
			<li>
				<strong>Incorrect URL:</strong> You might have entered the wrong URL, causing the browser to search for a page that doesn&apos;t exist.
			</li>
			<li>
				<strong>Outdated Links or Bookmarks:</strong> If you&apos;re using a bookmark or clicking on a link from an old webpage, it could be pointing to a page that no longer exists.
			</li>
			<li>
				<strong>Website Restructuring:</strong> The website may have undergone restructuring or redesign, and certain pages might have been removed or relocated without proper redirects.
			</li>
			<li>
				<strong>Server Issue:</strong> There might be a problem with the website&apos;s server configuration, causing the page to be inaccessible even if it exists.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Check the URL for any typos or errors.</li>
			<li>Go to the website&apos;s homepage and use their navigation or search bar to find the page you&apos;re looking for.</li>
			<li>Clear your browser cache in case your browser is loading an outdated version of the page.</li>
			<li>Wait and try again later if the site is experiencing temporary issues.</li>
		</ul>
		<p>
			If you keep getting 404 errors on multiple websites, the problem might be with your internet connection or browser settings, though most of the time, it&apos;s a specific issue with the website you&apos;re trying to visit.
		</p>

		<h2>Advanced Security Warning</h2>
		<p>
			If your computer is getting an advanced security warning message, it generally means there&apos;s a potential security issue with the website or network you&apos;re trying to access. Here are common reasons why these warnings appear:
		</p>
		<ul>
			<li>
				<strong>Expired or Invalid SSL Certificates:</strong> Websites use SSL (Secure Sockets Layer) certificates to encrypt data and ensure secure communication. If a site&apos;s SSL certificate has expired, is invalid, or isn&apos;t trusted, your browser will trigger a security warning.
			</li>
			<li>
				<strong>Untrusted Website:</strong> The website you&apos;re trying to visit might not be considered trustworthy. This can happen if it&apos;s flagged for malware, phishing, or other malicious activities.
			</li>
			<li>
				<strong>Outdated Browser or Security Settings:</strong> An outdated browser may trigger security warnings if it can&apos;t properly handle the latest encryption standards. Ensure your browser is up to date.
			</li>
			<li>
				<strong>Insecure Connection (HTTP vs. HTTPS):</strong> If you&apos;re visiting a website that uses HTTP (instead of HTTPS), your browser might warn you that the connection is not secure, meaning your data could be exposed.
			</li>
			<li>
				<strong>Malware or Virus on Your Computer:</strong> In some cases, malware on your system might interfere with your browsing and trigger false security warnings. Running a malware scan can help determine if this is the issue.
			</li>
			<li>
				<strong>DNS Spoofing or Man-in-the-Middle Attack:</strong> If someone is intercepting your connection (e.g., on an unsecured public Wi-Fi), your browser might show a security warning. This protects you from entering sensitive information on a compromised network.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Check the URL to ensure you&apos;re visiting a legitimate website, especially for financial or sensitive services.</li>
			<li>Update your browser to the latest version.</li>
			<li>Clear your browser cache and cookies, as these can sometimes trigger security warnings.</li>
			<li>Check the website&apos;s SSL certificate: Click on the padlock icon next to the URL to view certificate details.</li>
			<li>Use a trusted Wi-Fi network: Avoid visiting sensitive sites on public or unsecured networks.</li>
			<li>Run a malware scan: Use antivirus software to check for malicious programs that could be triggering false warnings.</li>
		</ul>
		<p>
			If you&apos;re uncertain about a website&apos;s security, it&apos;s best to avoid entering any personal or financial information until you can verify it&apos;s safe.
		</p>

		<h2>&ldquo;CANNOT LOAD PAGE&rdquo; ERROR</h2>
		<p>
			The &ldquo;Cannot load page&rdquo; message typically occurs when your computer cannot access the website you&apos;re trying to visit. Here are some common reasons why this happens:
		</p>
		<ul>
			<li>
				<strong>Internet Connection Issues:</strong> Your computer might be offline, or there may be a weak or unstable connection. Ensure you&apos;re connected to the internet, and check your Wi-Fi or Ethernet connection.
			</li>
			<li>
				<strong>Website Server Problems:</strong> The website itself may be down or experiencing issues. If this happens on one specific site, the problem is likely on their end, and you can try again later.
			</li>
			<li>
				<strong>Incorrect URL:</strong> The web address you&apos;re trying to access might be wrong. Double-check the URL for any errors.
			</li>
			<li>
				<strong>Browser Cache Issues:</strong> Your browser may be trying to load an outdated or corrupted version of the page from its cache. Clearing your browser&apos;s cache can help fix this issue.
			</li>
			<li>
				<strong>Firewall or Security Settings:</strong> Your firewall, antivirus, or security settings might be blocking access to certain websites, preventing the page from loading.
			</li>
			<li>
				<strong>Browser Extensions or Plugins:</strong> Certain browser extensions or plugins could be interfering with the website. Try disabling them or using incognito/private mode to see if the page loads.
			</li>
			<li>
				<strong>DNS Problems:</strong> The DNS (Domain Name System) that translates website names into IP addresses might not be working properly. Restarting your router or changing your DNS settings (e.g., using Google&apos;s public DNS: 8.8.8.8) may help.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Check your internet connection by visiting another website to see if it loads.</li>
			<li>Try accessing the site from a different browser or device to see if the problem is browser-specific.</li>
			<li>Clear your browser cache and cookies.</li>
			<li>Disable browser extensions to rule out conflicts.</li>
			<li>Wait and try again later if the website is down.</li>
		</ul>
		<p>
			These steps should help resolve most &ldquo;Cannot load page&rdquo; errors. If the issue persists, you might need to contact your internet service provider or the website&apos;s support team.
		</p>

		<h2>&ldquo;NO INTERNET CONNECTION&rdquo; ERROR</h2>
		<p>
			The &ldquo;No Internet connection&rdquo; message means your computer is unable to connect to the internet. Here are the common reasons why this might happen and how to fix it:
		</p>
		<ul>
			<li>
				<strong>Wi-Fi or Ethernet Not Connected:</strong> Your computer may not be connected to a Wi-Fi network or Ethernet cable. Check your network connections to ensure you&apos;re properly connected.
			</li>
			<li>
				<strong>Weak or Unstable Wi-Fi Signal:</strong> The Wi-Fi signal might be too weak, causing intermittent or no connection.
			</li>
			<li>
				<strong>Router or Modem Issues:</strong> The router or modem may not be working properly or could need a reset.
			</li>
			<li>
				<strong>ISP (Internet Service Provider) Outage:</strong> Your ISP may be experiencing an outage, preventing internet access.
			</li>
			<li>
				<strong>Network Settings or Configuration:</strong> Incorrect network settings on your computer can block internet access.
			</li>
			<li>
				<strong>DNS or IP Address Issues:</strong> Problems with your DNS settings or IP address can prevent you from connecting.
			</li>
			<li>
				<strong>Firewall or Security Software Blocking the Connection:</strong> Security software, like a firewall or antivirus, may be blocking your internet connection.
			</li>
			<li>
				<strong>Network Adapter Problems:</strong> The network adapter on your computer might not be functioning properly.
			</li>
		</ul>
		<p>Solutions:</p>
		<ul>
			<li>Go to your computer&apos;s network settings and reconnect to your Wi-Fi or plug in your Ethernet cable.</li>
			<li>Move closer to the Wi-Fi router or reset the router to improve signal strength.</li>
			<li>Restart your router and modem by unplugging them for 30 seconds, then plugging them back in.</li>
			<li>Contact your ISP to check if there&apos;s a service outage in your area.</li>
			<li>Go to your computer&apos;s network settings, reset your network configuration, or troubleshoot the connection in the settings.</li>
			<li>You can try restarting your computer, resetting the network, or changing your DNS settings to something like Google&apos;s DNS (8.8.8.8).</li>
			<li>Temporarily disable the firewall or antivirus and see if the connection is restored.</li>
			<li>Run a network troubleshooter in your computer&apos;s settings or check for driver updates for the network adapter.</li>
		</ul>
		<p>
			These solutions should help you identify and fix the &ldquo;No Internet connection&rdquo; error. If none of these work, it might be a hardware issue, and contacting technical support could be necessary.
		</p>
	</div>`,
	},
	{
		question: 'What is the "advance security warning" error i keep getting?',
		answer:
			'If your computer is getting an advanced security warning message, it generally means theres a potential security issue with the website or network youre trying to access.',
		longAnswers: `<div className="container">
			<h1>Common Computer Errors</h1>
	
			<h2>&ldquo;PAGE CAN NOT BE FOUND&rdquo; ERROR</h2>
			<p>
				The &ldquo;Error, page cannot be found&rdquo; message typically occurs when your computer is trying to access a webpage that is either unavailable or doesn&apos;t exist. Here are some common reasons why this happens:
			</p>
			<ul>
				<li>
					<strong>Broken or Dead Link:</strong> The webpage you&apos;re trying to visit may no longer exist or has been moved. Websites sometimes delete or change pages, leading to broken links.
				</li>
				<li>
					<strong>Incorrect URL:</strong> There might be a typo in the URL you entered, causing your browser to search for a non-existent page. Double-check the web address for errors.
				</li>
				<li>
					<strong>Website Server Issues:</strong> The website&apos;s server could be down or experiencing technical issues, making the page temporarily unavailable.
				</li>
				<li>
					<strong>Outdated Bookmark:</strong> If you&apos;re using a bookmark, it might be pointing to an old link that no longer works. Try navigating to the website manually.
				</li>
				<li>
					<strong>Caching Problems:</strong> Your browser may be loading an outdated version of the page from its cache. Clearing your browser&apos;s cache can help.
				</li>
				<li>
					<strong>DNS or Network Issues:</strong> Your computer might have trouble connecting to the website&apos;s server due to DNS (Domain Name System) issues or network connectivity problems.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check the URL for typos.</li>
				<li>Refresh the page or try visiting it later.</li>
				<li>Clear your browser cache in settings.</li>
				<li>Restart your router or computer if there are network issues.</li>
				<li>Contact website support if the problem persists on their end.</li>
			</ul>
			<p>
				If the issue is only with one site, it&apos;s likely the site itself. If it happens often, it might be related to your browser or network settings.
			</p>
	
			<h2>&ldquo;404&rdquo; ERROR</h2>
			<p>
				A &ldquo;404&rdquo; error message means that the webpage you&apos;re trying to access cannot be found on the server. This is one of the most common web errors, and here&apos;s why it might occur:
			</p>
			<ul>
				<li>
					<strong>Page Does Not Exist:</strong> The webpage has been deleted or moved, but the URL hasn&apos;t been updated, leading to a broken link.
				</li>
				<li>
					<strong>Incorrect URL:</strong> You might have entered the wrong URL, causing the browser to search for a page that doesn&apos;t exist.
				</li>
				<li>
					<strong>Outdated Links or Bookmarks:</strong> If you&apos;re using a bookmark or clicking on a link from an old webpage, it could be pointing to a page that no longer exists.
				</li>
				<li>
					<strong>Website Restructuring:</strong> The website may have undergone restructuring or redesign, and certain pages might have been removed or relocated without proper redirects.
				</li>
				<li>
					<strong>Server Issue:</strong> There might be a problem with the website&apos;s server configuration, causing the page to be inaccessible even if it exists.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check the URL for any typos or errors.</li>
				<li>Go to the website&apos;s homepage and use their navigation or search bar to find the page you&apos;re looking for.</li>
				<li>Clear your browser cache in case your browser is loading an outdated version of the page.</li>
				<li>Wait and try again later if the site is experiencing temporary issues.</li>
			</ul>
			<p>
				If you keep getting 404 errors on multiple websites, the problem might be with your internet connection or browser settings, though most of the time, it&apos;s a specific issue with the website you&apos;re trying to visit.
			</p>
	
			<h2>Advanced Security Warning</h2>
			<p>
				If your computer is getting an advanced security warning message, it generally means there&apos;s a potential security issue with the website or network you&apos;re trying to access. Here are common reasons why these warnings appear:
			</p>
			<ul>
				<li>
					<strong>Expired or Invalid SSL Certificates:</strong> Websites use SSL (Secure Sockets Layer) certificates to encrypt data and ensure secure communication. If a site&apos;s SSL certificate has expired, is invalid, or isn&apos;t trusted, your browser will trigger a security warning.
				</li>
				<li>
					<strong>Untrusted Website:</strong> The website you&apos;re trying to visit might not be considered trustworthy. This can happen if it&apos;s flagged for malware, phishing, or other malicious activities.
				</li>
				<li>
					<strong>Outdated Browser or Security Settings:</strong> An outdated browser may trigger security warnings if it can&apos;t properly handle the latest encryption standards. Ensure your browser is up to date.
				</li>
				<li>
					<strong>Insecure Connection (HTTP vs. HTTPS):</strong> If you&apos;re visiting a website that uses HTTP (instead of HTTPS), your browser might warn you that the connection is not secure, meaning your data could be exposed.
				</li>
				<li>
					<strong>Malware or Virus on Your Computer:</strong> In some cases, malware on your system might interfere with your browsing and trigger false security warnings. Running a malware scan can help determine if this is the issue.
				</li>
				<li>
					<strong>DNS Spoofing or Man-in-the-Middle Attack:</strong> If someone is intercepting your connection (e.g., on an unsecured public Wi-Fi), your browser might show a security warning. This protects you from entering sensitive information on a compromised network.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check the URL to ensure you&apos;re visiting a legitimate website, especially for financial or sensitive services.</li>
				<li>Update your browser to the latest version.</li>
				<li>Clear your browser cache and cookies, as these can sometimes trigger security warnings.</li>
				<li>Check the website&apos;s SSL certificate: Click on the padlock icon next to the URL to view certificate details.</li>
				<li>Use a trusted Wi-Fi network: Avoid visiting sensitive sites on public or unsecured networks.</li>
				<li>Run a malware scan: Use antivirus software to check for malicious programs that could be triggering false warnings.</li>
			</ul>
			<p>
				If you&apos;re uncertain about a website&apos;s security, it&apos;s best to avoid entering any personal or financial information until you can verify it&apos;s safe.
			</p>
	
			<h2>&ldquo;CANNOT LOAD PAGE&rdquo; ERROR</h2>
			<p>
				The &ldquo;Cannot load page&rdquo; message typically occurs when your computer cannot access the website you&apos;re trying to visit. Here are some common reasons why this happens:
			</p>
			<ul>
				<li>
					<strong>Internet Connection Issues:</strong> Your computer might be offline, or there may be a weak or unstable connection. Ensure you&apos;re connected to the internet, and check your Wi-Fi or Ethernet connection.
				</li>
				<li>
					<strong>Website Server Problems:</strong> The website itself may be down or experiencing issues. If this happens on one specific site, the problem is likely on their end, and you can try again later.
				</li>
				<li>
					<strong>Incorrect URL:</strong> The web address you&apos;re trying to access might be wrong. Double-check the URL for any errors.
				</li>
				<li>
					<strong>Browser Cache Issues:</strong> Your browser may be trying to load an outdated or corrupted version of the page from its cache. Clearing your browser&apos;s cache can help fix this issue.
				</li>
				<li>
					<strong>Firewall or Security Settings:</strong> Your firewall, antivirus, or security settings might be blocking access to certain websites, preventing the page from loading.
				</li>
				<li>
					<strong>Browser Extensions or Plugins:</strong> Certain browser extensions or plugins could be interfering with the website. Try disabling them or using incognito/private mode to see if the page loads.
				</li>
				<li>
					<strong>DNS Problems:</strong> The DNS (Domain Name System) that translates website names into IP addresses might not be working properly. Restarting your router or changing your DNS settings (e.g., using Google&apos;s public DNS: 8.8.8.8) may help.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check your internet connection by visiting another website to see if it loads.</li>
				<li>Try accessing the site from a different browser or device to see if the problem is browser-specific.</li>
				<li>Clear your browser cache and cookies.</li>
				<li>Disable browser extensions to rule out conflicts.</li>
				<li>Wait and try again later if the website is down.</li>
			</ul>
			<p>
				These steps should help resolve most &ldquo;Cannot load page&rdquo; errors. If the issue persists, you might need to contact your internet service provider or the website&apos;s support team.
			</p>
	
			<h2>&ldquo;NO INTERNET CONNECTION&rdquo; ERROR</h2>
			<p>
				The &ldquo;No Internet connection&rdquo; message means your computer is unable to connect to the internet. Here are the common reasons why this might happen and how to fix it:
			</p>
			<ul>
				<li>
					<strong>Wi-Fi or Ethernet Not Connected:</strong> Your computer may not be connected to a Wi-Fi network or Ethernet cable. Check your network connections to ensure you&apos;re properly connected.
				</li>
				<li>
					<strong>Weak or Unstable Wi-Fi Signal:</strong> The Wi-Fi signal might be too weak, causing intermittent or no connection.
				</li>
				<li>
					<strong>Router or Modem Issues:</strong> The router or modem may not be working properly or could need a reset.
				</li>
				<li>
					<strong>ISP (Internet Service Provider) Outage:</strong> Your ISP may be experiencing an outage, preventing internet access.
				</li>
				<li>
					<strong>Network Settings or Configuration:</strong> Incorrect network settings on your computer can block internet access.
				</li>
				<li>
					<strong>DNS or IP Address Issues:</strong> Problems with your DNS settings or IP address can prevent you from connecting.
				</li>
				<li>
					<strong>Firewall or Security Software Blocking the Connection:</strong> Security software, like a firewall or antivirus, may be blocking your internet connection.
				</li>
				<li>
					<strong>Network Adapter Problems:</strong> The network adapter on your computer might not be functioning properly.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Go to your computer&apos;s network settings and reconnect to your Wi-Fi or plug in your Ethernet cable.</li>
				<li>Move closer to the Wi-Fi router or reset the router to improve signal strength.</li>
				<li>Restart your router and modem by unplugging them for 30 seconds, then plugging them back in.</li>
				<li>Contact your ISP to check if there&apos;s a service outage in your area.</li>
				<li>Go to your computer&apos;s network settings, reset your network configuration, or troubleshoot the connection in the settings.</li>
				<li>You can try restarting your computer, resetting the network, or changing your DNS settings to something like Google&apos;s DNS (8.8.8.8).</li>
				<li>Temporarily disable the firewall or antivirus and see if the connection is restored.</li>
				<li>Run a network troubleshooter in your computer&apos;s settings or check for driver updates for the network adapter.</li>
			</ul>
			<p>
				These solutions should help you identify and fix the &ldquo;No Internet connection&rdquo; error. If none of these work, it might be a hardware issue, and contacting technical support could be necessary.
			</p>
		</div>`,
	},
	{
		question: 'What is the "cannot load page" error i keep getting?',
		answer:
			'The "Cannot load page" message typically occurs when your computer cannot access the website youre trying to visit.',
		longAnswers: `<div className="container">
			<h1>Common Computer Errors</h1>
	
			<h2>&ldquo;PAGE CAN NOT BE FOUND&rdquo; ERROR</h2>
			<p>
				The &ldquo;Error, page cannot be found&rdquo; message typically occurs when your computer is trying to access a webpage that is either unavailable or doesn&apos;t exist. Here are some common reasons why this happens:
			</p>
			<ul>
				<li>
					<strong>Broken or Dead Link:</strong> The webpage you&apos;re trying to visit may no longer exist or has been moved. Websites sometimes delete or change pages, leading to broken links.
				</li>
				<li>
					<strong>Incorrect URL:</strong> There might be a typo in the URL you entered, causing your browser to search for a non-existent page. Double-check the web address for errors.
				</li>
				<li>
					<strong>Website Server Issues:</strong> The website&apos;s server could be down or experiencing technical issues, making the page temporarily unavailable.
				</li>
				<li>
					<strong>Outdated Bookmark:</strong> If you&apos;re using a bookmark, it might be pointing to an old link that no longer works. Try navigating to the website manually.
				</li>
				<li>
					<strong>Caching Problems:</strong> Your browser may be loading an outdated version of the page from its cache. Clearing your browser&apos;s cache can help.
				</li>
				<li>
					<strong>DNS or Network Issues:</strong> Your computer might have trouble connecting to the website&apos;s server due to DNS (Domain Name System) issues or network connectivity problems.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check the URL for typos.</li>
				<li>Refresh the page or try visiting it later.</li>
				<li>Clear your browser cache in settings.</li>
				<li>Restart your router or computer if there are network issues.</li>
				<li>Contact website support if the problem persists on their end.</li>
			</ul>
			<p>
				If the issue is only with one site, it&apos;s likely the site itself. If it happens often, it might be related to your browser or network settings.
			</p>
	
			<h2>&ldquo;404&rdquo; ERROR</h2>
			<p>
				A &ldquo;404&rdquo; error message means that the webpage you&apos;re trying to access cannot be found on the server. This is one of the most common web errors, and here&apos;s why it might occur:
			</p>
			<ul>
				<li>
					<strong>Page Does Not Exist:</strong> The webpage has been deleted or moved, but the URL hasn&apos;t been updated, leading to a broken link.
				</li>
				<li>
					<strong>Incorrect URL:</strong> You might have entered the wrong URL, causing the browser to search for a page that doesn&apos;t exist.
				</li>
				<li>
					<strong>Outdated Links or Bookmarks:</strong> If you&apos;re using a bookmark or clicking on a link from an old webpage, it could be pointing to a page that no longer exists.
				</li>
				<li>
					<strong>Website Restructuring:</strong> The website may have undergone restructuring or redesign, and certain pages might have been removed or relocated without proper redirects.
				</li>
				<li>
					<strong>Server Issue:</strong> There might be a problem with the website&apos;s server configuration, causing the page to be inaccessible even if it exists.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check the URL for any typos or errors.</li>
				<li>Go to the website&apos;s homepage and use their navigation or search bar to find the page you&apos;re looking for.</li>
				<li>Clear your browser cache in case your browser is loading an outdated version of the page.</li>
				<li>Wait and try again later if the site is experiencing temporary issues.</li>
			</ul>
			<p>
				If you keep getting 404 errors on multiple websites, the problem might be with your internet connection or browser settings, though most of the time, it&apos;s a specific issue with the website you&apos;re trying to visit.
			</p>
	
			<h2>Advanced Security Warning</h2>
			<p>
				If your computer is getting an advanced security warning message, it generally means there&apos;s a potential security issue with the website or network you&apos;re trying to access. Here are common reasons why these warnings appear:
			</p>
			<ul>
				<li>
					<strong>Expired or Invalid SSL Certificates:</strong> Websites use SSL (Secure Sockets Layer) certificates to encrypt data and ensure secure communication. If a site&apos;s SSL certificate has expired, is invalid, or isn&apos;t trusted, your browser will trigger a security warning.
				</li>
				<li>
					<strong>Untrusted Website:</strong> The website you&apos;re trying to visit might not be considered trustworthy. This can happen if it&apos;s flagged for malware, phishing, or other malicious activities.
				</li>
				<li>
					<strong>Outdated Browser or Security Settings:</strong> An outdated browser may trigger security warnings if it can&apos;t properly handle the latest encryption standards. Ensure your browser is up to date.
				</li>
				<li>
					<strong>Insecure Connection (HTTP vs. HTTPS):</strong> If you&apos;re visiting a website that uses HTTP (instead of HTTPS), your browser might warn you that the connection is not secure, meaning your data could be exposed.
				</li>
				<li>
					<strong>Malware or Virus on Your Computer:</strong> In some cases, malware on your system might interfere with your browsing and trigger false security warnings. Running a malware scan can help determine if this is the issue.
				</li>
				<li>
					<strong>DNS Spoofing or Man-in-the-Middle Attack:</strong> If someone is intercepting your connection (e.g., on an unsecured public Wi-Fi), your browser might show a security warning. This protects you from entering sensitive information on a compromised network.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check the URL to ensure you&apos;re visiting a legitimate website, especially for financial or sensitive services.</li>
				<li>Update your browser to the latest version.</li>
				<li>Clear your browser cache and cookies, as these can sometimes trigger security warnings.</li>
				<li>Check the website&apos;s SSL certificate: Click on the padlock icon next to the URL to view certificate details.</li>
				<li>Use a trusted Wi-Fi network: Avoid visiting sensitive sites on public or unsecured networks.</li>
				<li>Run a malware scan: Use antivirus software to check for malicious programs that could be triggering false warnings.</li>
			</ul>
			<p>
				If you&apos;re uncertain about a website&apos;s security, it&apos;s best to avoid entering any personal or financial information until you can verify it&apos;s safe.
			</p>
	
			<h2>&ldquo;CANNOT LOAD PAGE&rdquo; ERROR</h2>
			<p>
				The &ldquo;Cannot load page&rdquo; message typically occurs when your computer cannot access the website you&apos;re trying to visit. Here are some common reasons why this happens:
			</p>
			<ul>
				<li>
					<strong>Internet Connection Issues:</strong> Your computer might be offline, or there may be a weak or unstable connection. Ensure you&apos;re connected to the internet, and check your Wi-Fi or Ethernet connection.
				</li>
				<li>
					<strong>Website Server Problems:</strong> The website itself may be down or experiencing issues. If this happens on one specific site, the problem is likely on their end, and you can try again later.
				</li>
				<li>
					<strong>Incorrect URL:</strong> The web address you&apos;re trying to access might be wrong. Double-check the URL for any errors.
				</li>
				<li>
					<strong>Browser Cache Issues:</strong> Your browser may be trying to load an outdated or corrupted version of the page from its cache. Clearing your browser&apos;s cache can help fix this issue.
				</li>
				<li>
					<strong>Firewall or Security Settings:</strong> Your firewall, antivirus, or security settings might be blocking access to certain websites, preventing the page from loading.
				</li>
				<li>
					<strong>Browser Extensions or Plugins:</strong> Certain browser extensions or plugins could be interfering with the website. Try disabling them or using incognito/private mode to see if the page loads.
				</li>
				<li>
					<strong>DNS Problems:</strong> The DNS (Domain Name System) that translates website names into IP addresses might not be working properly. Restarting your router or changing your DNS settings (e.g., using Google&apos;s public DNS: 8.8.8.8) may help.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check your internet connection by visiting another website to see if it loads.</li>
				<li>Try accessing the site from a different browser or device to see if the problem is browser-specific.</li>
				<li>Clear your browser cache and cookies.</li>
				<li>Disable browser extensions to rule out conflicts.</li>
				<li>Wait and try again later if the website is down.</li>
			</ul>
			<p>
				These steps should help resolve most &ldquo;Cannot load page&rdquo; errors. If the issue persists, you might need to contact your internet service provider or the website&apos;s support team.
			</p>
	
			<h2>&ldquo;NO INTERNET CONNECTION&rdquo; ERROR</h2>
			<p>
				The &ldquo;No Internet connection&rdquo; message means your computer is unable to connect to the internet. Here are the common reasons why this might happen and how to fix it:
			</p>
			<ul>
				<li>
					<strong>Wi-Fi or Ethernet Not Connected:</strong> Your computer may not be connected to a Wi-Fi network or Ethernet cable. Check your network connections to ensure you&apos;re properly connected.
				</li>
				<li>
					<strong>Weak or Unstable Wi-Fi Signal:</strong> The Wi-Fi signal might be too weak, causing intermittent or no connection.
				</li>
				<li>
					<strong>Router or Modem Issues:</strong> The router or modem may not be working properly or could need a reset.
				</li>
				<li>
					<strong>ISP (Internet Service Provider) Outage:</strong> Your ISP may be experiencing an outage, preventing internet access.
				</li>
				<li>
					<strong>Network Settings or Configuration:</strong> Incorrect network settings on your computer can block internet access.
				</li>
				<li>
					<strong>DNS or IP Address Issues:</strong> Problems with your DNS settings or IP address can prevent you from connecting.
				</li>
				<li>
					<strong>Firewall or Security Software Blocking the Connection:</strong> Security software, like a firewall or antivirus, may be blocking your internet connection.
				</li>
				<li>
					<strong>Network Adapter Problems:</strong> The network adapter on your computer might not be functioning properly.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Go to your computer&apos;s network settings and reconnect to your Wi-Fi or plug in your Ethernet cable.</li>
				<li>Move closer to the Wi-Fi router or reset the router to improve signal strength.</li>
				<li>Restart your router and modem by unplugging them for 30 seconds, then plugging them back in.</li>
				<li>Contact your ISP to check if there&apos;s a service outage in your area.</li>
				<li>Go to your computer&apos;s network settings, reset your network configuration, or troubleshoot the connection in the settings.</li>
				<li>You can try restarting your computer, resetting the network, or changing your DNS settings to something like Google&apos;s DNS (8.8.8.8).</li>
				<li>Temporarily disable the firewall or antivirus and see if the connection is restored.</li>
				<li>Run a network troubleshooter in your computer&apos;s settings or check for driver updates for the network adapter.</li>
			</ul>
			<p>
				These solutions should help you identify and fix the &ldquo;No Internet connection&rdquo; error. If none of these work, it might be a hardware issue, and contacting technical support could be necessary.
			</p>
		</div>`,
	},
	{
		question: 'What is the "no internet connection" error i keep getting?',
		answer: 'The "No Internet connection" message means your computer is unable to connect to the internet.',
		longAnswers: `<div className="container">
			<h1>Common Computer Errors</h1>
	
			<h2>&ldquo;PAGE CAN NOT BE FOUND&rdquo; ERROR</h2>
			<p>
				The &ldquo;Error, page cannot be found&rdquo; message typically occurs when your computer is trying to access a webpage that is either unavailable or doesn&apos;t exist. Here are some common reasons why this happens:
			</p>
			<ul>
				<li>
					<strong>Broken or Dead Link:</strong> The webpage you&apos;re trying to visit may no longer exist or has been moved. Websites sometimes delete or change pages, leading to broken links.
				</li>
				<li>
					<strong>Incorrect URL:</strong> There might be a typo in the URL you entered, causing your browser to search for a non-existent page. Double-check the web address for errors.
				</li>
				<li>
					<strong>Website Server Issues:</strong> The website&apos;s server could be down or experiencing technical issues, making the page temporarily unavailable.
				</li>
				<li>
					<strong>Outdated Bookmark:</strong> If you&apos;re using a bookmark, it might be pointing to an old link that no longer works. Try navigating to the website manually.
				</li>
				<li>
					<strong>Caching Problems:</strong> Your browser may be loading an outdated version of the page from its cache. Clearing your browser&apos;s cache can help.
				</li>
				<li>
					<strong>DNS or Network Issues:</strong> Your computer might have trouble connecting to the website&apos;s server due to DNS (Domain Name System) issues or network connectivity problems.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check the URL for typos.</li>
				<li>Refresh the page or try visiting it later.</li>
				<li>Clear your browser cache in settings.</li>
				<li>Restart your router or computer if there are network issues.</li>
				<li>Contact website support if the problem persists on their end.</li>
			</ul>
			<p>
				If the issue is only with one site, it&apos;s likely the site itself. If it happens often, it might be related to your browser or network settings.
			</p>
	
			<h2>&ldquo;404&rdquo; ERROR</h2>
			<p>
				A &ldquo;404&rdquo; error message means that the webpage you&apos;re trying to access cannot be found on the server. This is one of the most common web errors, and here&apos;s why it might occur:
			</p>
			<ul>
				<li>
					<strong>Page Does Not Exist:</strong> The webpage has been deleted or moved, but the URL hasn&apos;t been updated, leading to a broken link.
				</li>
				<li>
					<strong>Incorrect URL:</strong> You might have entered the wrong URL, causing the browser to search for a page that doesn&apos;t exist.
				</li>
				<li>
					<strong>Outdated Links or Bookmarks:</strong> If you&apos;re using a bookmark or clicking on a link from an old webpage, it could be pointing to a page that no longer exists.
				</li>
				<li>
					<strong>Website Restructuring:</strong> The website may have undergone restructuring or redesign, and certain pages might have been removed or relocated without proper redirects.
				</li>
				<li>
					<strong>Server Issue:</strong> There might be a problem with the website&apos;s server configuration, causing the page to be inaccessible even if it exists.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check the URL for any typos or errors.</li>
				<li>Go to the website&apos;s homepage and use their navigation or search bar to find the page you&apos;re looking for.</li>
				<li>Clear your browser cache in case your browser is loading an outdated version of the page.</li>
				<li>Wait and try again later if the site is experiencing temporary issues.</li>
			</ul>
			<p>
				If you keep getting 404 errors on multiple websites, the problem might be with your internet connection or browser settings, though most of the time, it&apos;s a specific issue with the website you&apos;re trying to visit.
			</p>
	
			<h2>Advanced Security Warning</h2>
			<p>
				If your computer is getting an advanced security warning message, it generally means there&apos;s a potential security issue with the website or network you&apos;re trying to access. Here are common reasons why these warnings appear:
			</p>
			<ul>
				<li>
					<strong>Expired or Invalid SSL Certificates:</strong> Websites use SSL (Secure Sockets Layer) certificates to encrypt data and ensure secure communication. If a site&apos;s SSL certificate has expired, is invalid, or isn&apos;t trusted, your browser will trigger a security warning.
				</li>
				<li>
					<strong>Untrusted Website:</strong> The website you&apos;re trying to visit might not be considered trustworthy. This can happen if it&apos;s flagged for malware, phishing, or other malicious activities.
				</li>
				<li>
					<strong>Outdated Browser or Security Settings:</strong> An outdated browser may trigger security warnings if it can&apos;t properly handle the latest encryption standards. Ensure your browser is up to date.
				</li>
				<li>
					<strong>Insecure Connection (HTTP vs. HTTPS):</strong> If you&apos;re visiting a website that uses HTTP (instead of HTTPS), your browser might warn you that the connection is not secure, meaning your data could be exposed.
				</li>
				<li>
					<strong>Malware or Virus on Your Computer:</strong> In some cases, malware on your system might interfere with your browsing and trigger false security warnings. Running a malware scan can help determine if this is the issue.
				</li>
				<li>
					<strong>DNS Spoofing or Man-in-the-Middle Attack:</strong> If someone is intercepting your connection (e.g., on an unsecured public Wi-Fi), your browser might show a security warning. This protects you from entering sensitive information on a compromised network.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check the URL to ensure you&apos;re visiting a legitimate website, especially for financial or sensitive services.</li>
				<li>Update your browser to the latest version.</li>
				<li>Clear your browser cache and cookies, as these can sometimes trigger security warnings.</li>
				<li>Check the website&apos;s SSL certificate: Click on the padlock icon next to the URL to view certificate details.</li>
				<li>Use a trusted Wi-Fi network: Avoid visiting sensitive sites on public or unsecured networks.</li>
				<li>Run a malware scan: Use antivirus software to check for malicious programs that could be triggering false warnings.</li>
			</ul>
			<p>
				If you&apos;re uncertain about a website&apos;s security, it&apos;s best to avoid entering any personal or financial information until you can verify it&apos;s safe.
			</p>
	
			<h2>&ldquo;CANNOT LOAD PAGE&rdquo; ERROR</h2>
			<p>
				The &ldquo;Cannot load page&rdquo; message typically occurs when your computer cannot access the website you&apos;re trying to visit. Here are some common reasons why this happens:
			</p>
			<ul>
				<li>
					<strong>Internet Connection Issues:</strong> Your computer might be offline, or there may be a weak or unstable connection. Ensure you&apos;re connected to the internet, and check your Wi-Fi or Ethernet connection.
				</li>
				<li>
					<strong>Website Server Problems:</strong> The website itself may be down or experiencing issues. If this happens on one specific site, the problem is likely on their end, and you can try again later.
				</li>
				<li>
					<strong>Incorrect URL:</strong> The web address you&apos;re trying to access might be wrong. Double-check the URL for any errors.
				</li>
				<li>
					<strong>Browser Cache Issues:</strong> Your browser may be trying to load an outdated or corrupted version of the page from its cache. Clearing your browser&apos;s cache can help fix this issue.
				</li>
				<li>
					<strong>Firewall or Security Settings:</strong> Your firewall, antivirus, or security settings might be blocking access to certain websites, preventing the page from loading.
				</li>
				<li>
					<strong>Browser Extensions or Plugins:</strong> Certain browser extensions or plugins could be interfering with the website. Try disabling them or using incognito/private mode to see if the page loads.
				</li>
				<li>
					<strong>DNS Problems:</strong> The DNS (Domain Name System) that translates website names into IP addresses might not be working properly. Restarting your router or changing your DNS settings (e.g., using Google&apos;s public DNS: 8.8.8.8) may help.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Check your internet connection by visiting another website to see if it loads.</li>
				<li>Try accessing the site from a different browser or device to see if the problem is browser-specific.</li>
				<li>Clear your browser cache and cookies.</li>
				<li>Disable browser extensions to rule out conflicts.</li>
				<li>Wait and try again later if the website is down.</li>
			</ul>
			<p>
				These steps should help resolve most &ldquo;Cannot load page&rdquo; errors. If the issue persists, you might need to contact your internet service provider or the website&apos;s support team.
			</p>
	
			<h2>&ldquo;NO INTERNET CONNECTION&rdquo; ERROR</h2>
			<p>
				The &ldquo;No Internet connection&rdquo; message means your computer is unable to connect to the internet. Here are the common reasons why this might happen and how to fix it:
			</p>
			<ul>
				<li>
					<strong>Wi-Fi or Ethernet Not Connected:</strong> Your computer may not be connected to a Wi-Fi network or Ethernet cable. Check your network connections to ensure you&apos;re properly connected.
				</li>
				<li>
					<strong>Weak or Unstable Wi-Fi Signal:</strong> The Wi-Fi signal might be too weak, causing intermittent or no connection.
				</li>
				<li>
					<strong>Router or Modem Issues:</strong> The router or modem may not be working properly or could need a reset.
				</li>
				<li>
					<strong>ISP (Internet Service Provider) Outage:</strong> Your ISP may be experiencing an outage, preventing internet access.
				</li>
				<li>
					<strong>Network Settings or Configuration:</strong> Incorrect network settings on your computer can block internet access.
				</li>
				<li>
					<strong>DNS or IP Address Issues:</strong> Problems with your DNS settings or IP address can prevent you from connecting.
				</li>
				<li>
					<strong>Firewall or Security Software Blocking the Connection:</strong> Security software, like a firewall or antivirus, may be blocking your internet connection.
				</li>
				<li>
					<strong>Network Adapter Problems:</strong> The network adapter on your computer might not be functioning properly.
				</li>
			</ul>
			<p>Solutions:</p>
			<ul>
				<li>Go to your computer&apos;s network settings and reconnect to your Wi-Fi or plug in your Ethernet cable.</li>
				<li>Move closer to the Wi-Fi router or reset the router to improve signal strength.</li>
				<li>Restart your router and modem by unplugging them for 30 seconds, then plugging them back in.</li>
				<li>Contact your ISP to check if there&apos;s a service outage in your area.</li>
				<li>Go to your computer&apos;s network settings, reset your network configuration, or troubleshoot the connection in the settings.</li>
				<li>You can try restarting your computer, resetting the network, or changing your DNS settings to something like Google&apos;s DNS (8.8.8.8).</li>
				<li>Temporarily disable the firewall or antivirus and see if the connection is restored.</li>
				<li>Run a network troubleshooter in your computer&apos;s settings or check for driver updates for the network adapter.</li>
			</ul>
			<p>
				These solutions should help you identify and fix the &ldquo;No Internet connection&rdquo; error. If none of these work, it might be a hardware issue, and contacting technical support could be necessary.
			</p>
		</div>`,
	},
	{
		question: 'How do I right-click?',
		answer:
			'On a mouse, press the right button. On a trackpad, tap with two fingers (Windows) or click while holding the Control key (Mac).',
		longAnswers: `<div className="container">
		<h1>To right-click on your computer:</h1>
		<p>
			1. With a Mouse:<br />
			<strong>Windows and Mac:</strong> Press the right button on your mouse. This opens a context menu with options related to what you clicked on.<br />
			2. With a Trackpad:<br />
			<strong>Windows:</strong> Tap the trackpad with two fingers at the same time, or press the bottom-right corner of the trackpad.<br />
			<strong>Mac:</strong> Tap with two fingers on the trackpad, or hold the Control (Ctrl) key and click.<br />
			You can adjust how right-click works in your system&apos;s Settings or Preferences under the Mouse or Trackpad section.
		</p>
	</div>`,
	},
	{
		question: 'How do I drag and drop?',
		answer:
			'Click and hold the item, drag it to a new location, and release it. On a trackpad, use your finger to drag and drop.',
		longAnswers: `<div className="container">
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
	</div>`,
	},
	{
		question: 'What is a trackpad?',
		answer:
			'A trackpad (also called a touchpad) is a built-in, flat, touch-sensitive surface on laptops that you can use instead of a mouse to control the cursor.',
		longAnswers: `<div className="container">
		<h1>How it works:</h1>
		<p>
			You move your finger across the trackpad to move the cursor on the screen. You can tap on it to click or use two-finger taps or swipes for right-clicking and scrolling.
		</p>
		<p>
			Trackpads often come with multi-touch gestures, like zooming, swiping between apps, and more, depending on your laptop&apos;s settings.
		</p>
	</div>`,
	},
	{
		question: 'What is a browser/search engine?',
		answer:
			'A browser is a software application that allows you to access and view websites on the internet. Popular browsers include Google Chrome, Safari, Firefox, and Microsoft Edge.',
		longAnswers: `<div className="container">
		<h1>Understanding Search Engines</h1>
		<p>
			A search engine is a tool that helps you find specific information on the web by typing in keywords or questions. Common search engines include Google, Bing, and DuckDuckGo.
		</p>
		<p>
			For example, you open a browser (like Chrome) and use a search engine (like Google) inside the browser to search for information. In short, the browser is the tool for navigating the web, and the search engine helps you find things on the web.
		</p>
	</div>`,
	},
	{
		question: 'What is the difference between a browser and app?',
		answer:
			'A browser is used to navigate the web, while an app performs specific tasks, like editing documents. Browsers can run web apps, but apps work directly on your device.',
		longAnswers: `<div className="container">
		<h1>Browser vs. Software Applications</h1>
		<p>
			A browser is a specific type of software application, but not all software applications are browsers. Here’s the difference:
		</p>
		<h2>Browser:</h2>
		<ul>
			<li><strong>Purpose:</strong> Designed to access and display web pages from the internet.</li>
			<li><strong>Function:</strong> Allows you to navigate websites, use web-based applications, and interact with online content.</li>
			<li><strong>Examples:</strong> Google Chrome, Mozilla Firefox, Safari, Microsoft Edge.</li>
		</ul>
		<h2>Software Application:</h2>
		<ul>
			<li><strong>Purpose:</strong> Any program or set of programs designed for end-users to perform specific tasks on a computer.</li>
			<li><strong>Function:</strong> Can serve a wide range of functions beyond web browsing, including productivity, design, communication, and more.</li>
			<li><strong>Examples:</strong> Microsoft Word (word processing), Adobe Photoshop (photo editing), Zoom (video conferencing), and browsers themselves.</li>
		</ul>
		<p>
			In summary, a browser is a type of software application specifically for navigating the web, whereas software applications encompass a broad range of programs for various tasks.
		</p>
	</div>`,
	},
	{
		question: 'What is Canvas?',
		answer: 'Canvas is an online platform used by schools for managing courses, assignments, and grades.',
		longAnswers: `<div className="container">
		<h1>Canvas (Learning Management System)</h1>
		<p>
			<strong>Purpose:</strong> A platform used by educational institutions for course management and online learning.
		</p>
		<p>
			<strong>Features:</strong> Includes tools for assignments, grading, discussion boards, and course materials.
		</p>
		<p>
			<strong>Example:</strong> Canvas by Instructure is a popular LMS used by schools and universities.
		</p>
	</div>`,
	},
	{
		question: 'How do I "search" the web?',
		answer:
			'Open a browser, go to a search engine like Google, type your keywords in the search bar, and press Enter to see results.',
		longAnswers: `<div className="container">
		<h1>Searching the Web</h1>
		<p>
			<strong>What It Means:</strong>
		</p>
		<ul>
			<li>
				<strong>Search Engine:</strong> A tool that indexes and organizes the content of websites to help users find specific information. Examples include Google, Bing, and Yahoo.
			</li>
			<li>
				<strong>Search Query:</strong> The words or phrases you type into the search engine to specify what you&apos;re looking for.
			</li>
		</ul>
		<p>
			<strong>How to Search:</strong>
		</p>
		<ol>
			<li>
				<strong>Open a Web Browser:</strong> Launch a web browser like Google Chrome, Safari, or Firefox.
			</li>
			<li>
				<strong>Go to a Search Engine:</strong> Navigate to a search engine website (e.g., www.google.com).
			</li>
			<li>
				<strong>Enter Your Query:</strong> Type keywords, questions, or phrases related to what you want to find in the search bar.
			</li>
			<li>
				<strong>Press Enter:</strong> Hit the Enter key or click the search icon to submit your query.
			</li>
			<li>
				<strong>Review Results:</strong> Browse through the list of search results to find the information you need.
			</li>
		</ol>
		<p>
			<strong>Example:</strong>
		</p>
		<ul>
			<li>
				You want to find recipes for chocolate chip cookies.
			</li>
			<li>
				You type “chocolate chip cookie recipes” into the search bar and press Enter.
			</li>
			<li>
				The search engine displays a list of webpages, articles, and images related to chocolate chip cookie recipes.
			</li>
		</ul>
		<p>
			Searching the web allows you to quickly locate information, resources, and answers on a vast range of topics.
		</p>
	</div>`,
	},
	{
		question: 'Where do i find my computer settings?',
		answer:
			'Find settings by opening the Start Menu (Windows) or System Preferences (macOS). Adjust brightness, sound, display, and cursor speed to suit your needs.',
		longAnswers: `<div className="container">
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
	</div>`,
	},
	{
		question: 'Where do i find where i saved my file?',
		answer:
			'Search common folders like Documents, Downloads, or Desktop. You can also use the search bar in File Explorer (Windows) or Finder (macOS).',
		longAnswers: `<div className="container">
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
	</div>`,
	},
	{
		question: 'How do i sign into Wi-Fi?',
		answer:
			'Click the Wi-Fi icon on your taskbar (Windows) or menu bar (macOS), select your network, enter the password, and connect.',
		longAnswers: `<div className="container">
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
	</div>`,
	},
	{
		question: 'What is cache & cookies?',
		answer:
			'Cache stores website data for faster loading, and cookies save your login and preferences. Clearing them can fix some browsing issues.',
		longAnswers: `<div className="container">
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
	</div>`,
	},
	{
		question: 'How do I go back to the previous page?',
		answer:
			'Click the back arrow in your browser or press Alt + Left Arrow (Windows) or Command + Left Arrow (Mac) to return to the previous page.',
		longAnswers: `<div className="container">
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
	</div>`,
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
		longAnswers: `<div className="container">
		<h1>How to Verify Your Email Account</h1>
		<p>To verify you&apos;re using the correct email account, follow these steps:</p>

		<h2>1. Check the Email Address:</h2>
		<p>
			<strong>Look at the Email Address:</strong> Make sure it matches your official student email address or the email account you intended to use. This is usually visible in the email app or web interface.
		</p>

		<h2>2. Verify Account Information:</h2>
		<p>
			<strong>Account Settings:</strong>
		</p>
		<ul>
			<li><strong>Windows Mail:</strong> Go to Settings &gt; Manage Accounts and check the account details.</li>
			<li><strong>macOS Mail:</strong> Go to Mail &gt; Preferences &gt; Accounts and review the account information.</li>
			<li><strong>Webmail:</strong> Click on your profile icon or settings in the webmail interface to view the email address currently in use.</li>
		</ul>

		<h2>3. Check the Inbox for Correct Content:</h2>
		<p>
			<strong>Look for Expected Emails:</strong> Ensure that the emails you receive are from relevant sources (e.g., school announcements, course updates) and that you have access to the expected messages.
		</p>

		<h2>4. Sign Out and Sign In:</h2>
		<p>
			Sign out of your current email account and then sign in again using the correct credentials to make sure you&apos;re accessing the right account.
		</p>

		<h2>5. Check Account Name or Profile:</h2>
		<p>
			<strong>Email Signature:</strong> Often, the email signature or profile name will include the correct email address or identifying information.
		</p>

		<p>
			By following these steps, you can ensure that you&apos;re using the right email account for your needs.
		</p>
	</div>`,
	},
	{
		question: "Where do I find my professor's contact info?",
		answer:
			'Check the course syllabus, the university website’s faculty directory, or your learning management system (Canvas, Blackboard, etc.).',
		longAnswers: `<div className="container">
		<h1>How to Find Your Professor&apos;s Contact Information</h1>
		<p>To find your professor&apos;s contact information, try the following methods:</p>

		<h2>1. Course Syllabus:</h2>
		<p>
			<strong>Check the Syllabus:</strong> Professors often include their contact details in the course syllabus or outline provided at the beginning of the semester.
		</p>

		<h2>2. University Website:</h2>
		<p>
			<strong>Faculty Directory:</strong> Visit your university&apos;s website and look for the faculty directory or departmental pages where professors&apos; contact information is listed.
		</p>

		<h2>3. Learning Management System (LMS):</h2>
		<p>
			<strong>Canvas, Blackboard, etc.: </strong>Log into your LMS and navigate to the course page. Professors often post their contact details in the course materials or announcements sections.
		</p>

		<h2>4. Email or Portal:</h2>
		<p>
			<strong>Student Portal:</strong> Access your student portal where professors&apos; contact information might be available under course or faculty listings.
		</p>

		<h2>5. Contact the Department Office:</h2>
		<p>
			<strong>Department Contact:</strong> Call or email the department office of your professor&apos;s field of study to ask for their contact information.
		</p>

		<p>
			Using these methods should help you easily locate your professor&apos;s contact information.
		</p>
	</div>`,
	},
];

export default faqItems;
