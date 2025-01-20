import React from 'react';

function interviewTips() {
	return (
		<div className="flex-col">
			<div className="flex items-center justify-center pt-10">
				<h1 className="font-bold text-5xl">How to deal with interviews</h1>
			</div>

			<div className="card flex-col mt-10">
				<h3 className="font-bold text-4xl break-normal py-5">How to use your strengths</h3>
				<p className=" break-normal">
					Many interviews will ask you what your strengths are. How should we go about this?
				</p>
				<ol>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">1. Provide Examples: </span> Back up your strengths with specific examples
							from past experiences. For instance, if you want to highlight your leadership skills, you can explain a
							time you effectively managed a team.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">2. Identify Your key strengths: </span> Think about the skills that you put
							down on your resume that make you a valuable candidate. These can be technical skills, or can be soft
							skills like leadership and communication.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">3. Relate it to the job: </span> Understand what the requirements are for the
							job and tie it in with your strengths
						</p>
					</li>
				</ol>
			</div>

			<div className="card flex-col mt-20">
				<h3 className="font-bold text-4xl break-normal py-5">How To Overcome Weaknesses</h3>
				<p className=" break-normal">
					Many interviews will ask you what your Weaknesses are. How should we go about this?
				</p>
				<ol>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">1. Be honest yet strategic: </span> When discussing your weaknesses choose
							ones that a genuine, but will not hinder your ability to complete the job.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">2. Show self-improvement: </span> Discuss any steps you’ve taken to address
							your weaknesses, such as training programs or therapy. This shows initiative and self commitment.
						</p>
					</li>
				</ol>
			</div>

			<div className="card flex-col mt-20">
				<h3 className="font-bold text-4xl break-normal py-5">How To Talk About Yourself</h3>
				<p className=" break-normal">Many interviews will ask you about yourself. How should we go about this?</p>
				<ol>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">1.Keep it concise and relevant: </span> Provide a brief overview of your
							professional background, focusing on experiences and skills most relevant for the job. Keep your response
							to 2-3 minutes.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">2. Show passion: </span> Express enthusiasm for the opportunity. Share why
							you’re excited about the role, and again connect your skills.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">3. End positively:</span> Conclude your response by summarizing why your
							interested and how you believe you can help the company. Thank the interviewer for the opportunity to
							share.
						</p>
					</li>
				</ol>
			</div>

			<div className="card flex-col mt-20">
				<h3 className="font-bold text-4xl break-normal py-5">Why You Want To Work For Us</h3>
				<p className=" break-normal">
					Many interviews will ask you about why you want to work for them. How should we go about this?
				</p>
				<ol>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">1.Research the company: </span>Before the company, look at the company’s
							mission, value, culture, products and services. Use this knowledge to help craft your responses.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">3. Show Similarities: </span>Identify aspects of the company that resonate
							with you and align with your own values, interests and career goals.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">3. Connect Your Skills: </span>Again connect your skills to the job and
							express why you would be beneficial to company. Highlight how your background makes you uniquely
							qualified.
						</p>
					</li>
				</ol>
			</div>

			<div className="card flex-col mt-20">
				<h3 className="font-bold text-4xl break-normal py-5">How To Overcome Criminal Record</h3>
				<p className=" break-normal">
					Interviews may ask you about your criminal record. Here is how to handle that:{' '}
					<span className="text-xl font-bold border-solid border-2 border-black rounded-lg  bg-white">
						{' '}
						More Criminal Record Info{' '}
					</span>
				</p>
				<ol>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold"> 1. Know your rights: </span> Understand your rights regarding disclosing
							criminal records in job interviews.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">2. Be Honest: </span> If disclosure of criminal records is necessary based on
							jurisdiction, tell the truth about your criminal records.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">3. Provide Context: </span> If relevant provide context surrounding the
							offense. Include steps you have taken to address the situation.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">4. Focus on improvement: </span> Highlight efforts you’ve made in regards to
							personal growth since the offense. This could include therapy, rehabilitation programs or volunteering.
						</p>
					</li>
				</ol>
			</div>
		</div>
	);
}
export default interviewTips;
