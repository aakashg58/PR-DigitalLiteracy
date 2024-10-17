import React from 'react';
import '../Layouts/Main/FAQ/LongAnswers.css';

const StudentEmail = () => (
	<div className="container">
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
	</div>
);

export default StudentEmail;
