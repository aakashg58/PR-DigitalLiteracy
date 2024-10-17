import React from 'react';
import '../Layouts/Main/FAQ/LongAnswers.css';

const ComputerErrors = () => (
	<div className="container">
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
	</div>
);

export default ComputerErrors;
