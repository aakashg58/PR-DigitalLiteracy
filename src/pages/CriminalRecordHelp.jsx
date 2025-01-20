import React from 'react';
import Green from '../assets/images/green.png';
import Yellow from '../assets/images/yellow.png';
import Red from '../assets/images/red.png';

function CriminalRecordHelp() {
	return (
		<div className="flex-col">
			<div className="flex items-center justify-center pb-10">
				<h1 className="font-bold text-5xl">How to Deal With Criminal Record</h1>
			</div>

			<div className="card flex-col">
				<h3 className="font-bold text-4xl break-normal py-5">Use Honest Jobs to find hires</h3>
				<ol>
					<li>
						<p className="text-2xl ">1. Honest Jobs allows you to find jobs with a Criminal Record.</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl"> 2. Fill out the sign up and add criminal record information.</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">3. Attach your resume and add previous jobs and qualifications to see matches</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">4. Search Jobs and see ratings. </p>
					</li>
				</ol>

				<div>
					<h3 className="text-4xl break-normal py-4 text-sky-950 font-bold">honest jobs rating system</h3>
				</div>

				<div className="float-left clear-both">
					<ul className="block">
						<li className="float-left ml-8 max-[1005px]: wd-full">
							<div className="align-top inline-block text-center w-44">
								<img src={Green} className="w-40 h-20 bg-gray-400 rounded-xl" alt="" />
								<div className="block">
									<h3 className="text-2xl break-normal pb-2">One Bar</h3>
									<p className="text-lg">Job may accept applicants with a crimial record</p>
								</div>
							</div>
						</li>

						<li className="float-left ml-8 max-[1005px]: wd-full">
							<div className="align-top inline-block text-center w-44">
								<img src={Yellow} className="w-40 h-20 bg-gray-400  rounded-xl " alt="" />
								<div className="block">
									<h3 className="text-2xl break-normal pb-2">Two Bars</h3>
									<p className="text-lg">Job is unlikely to accept applicants with a crimial record</p>
								</div>
							</div>
						</li>

						<li className="float-left ml-8 max-[1005px]: wd-full">
							<div className="align-top inline-block text-center w-44">
								<img src={Red} className="w-40 h-20 bg-gray-400 rounded-xl" alt="" />
								<div className="block">
									<h3 className="text-2xl break-normal pb-2">Three Bars</h3>
									<p className="text-lg">Job will not accept applicants with a crimial record</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex items-center justify-center pt-10">
				<h1 className="font-bold text-5xl">Know Your Rights</h1>
			</div>

			<div className="card flex-col mt-10">
				<h3 className="font-bold text-4xl break-normal py-5">Ban-in-the-Box Law - Fair Chance Act</h3>
				<ol>
					<li>
						<p className="text-2xl">
							1. The law prohibits employers from asking questions about a person’s conviction and criminal history
							before a conditional job offer has been made.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							2. After offering you a job, employers are allowed to do a criminal background check. However, the law
							requires an assessment about your conviction history.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							3. The employer cannot take back the job offer without an assessment considering the nature of the
							criminal history and the job.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							4. If an employer has violated a law, you have three years to file a complaint with the civil rights
							department of California. See the link for more details.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							5.Click{' '}
							<a
								className="font-bold underline"
								href="https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2022/11/Fair-Chance-Act-FAQ_ENG.pdf"
							>
								Here
							</a>{' '}
							for more details.
						</p>
					</li>
				</ol>
			</div>

			<div className="card flex-col mt-20">
				<h3 className="font-bold text-4xl break-normal py-5">Cleaning Your Record</h3>
				<ol>
					<li>
						<p className="text-2xl">
							1. California and other states offer opportunities for criminal records to be cleaned.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							2. An expungement under California law allows you to withdraw a plea of guilty or no contest, to re-enter
							of not guilty, then have the criminal case dismissed.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							3. You may be eligible if you completed probation and you do not have an open criminal case and your
							conviction was not for a serious violent or sex offender crime.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							5.Click{' '}
							<a className="font-bold underline" href="https://selfhelp.courts.ca.gov/clean-your-record">
								Here
							</a>{' '}
							to see if you are eligible.
						</p>
					</li>
				</ol>
			</div>

			<div className="card flex-col mt-20 ">
				<h3 className="font-bold text-4xl break-normal py-5">
					<p className="text-2xl">
						5.Click{' '}
						<a
							className="font-bold underline"
							href="https://helpforfelons.org/wp-content/uploads/2015/01/Companies-That-Hire-Felons-List.pdf"
						>
							Here
						</a>{' '}
						for full list.
					</p>
				</h3>

				<div>
					<div className="float-left">
						<ol>
							<li>Aamco</li>
							<li className="mt-2 text-large">Ace Hardware</li>
							<li className="mt-2 text-large">Albertsons</li>
							<li className="mt-2 text-large">Allied Van Lines</li>
							<li className="mt-2 text-large">American Greetings</li>
							<li className="mt-2 text-large">Anderson Windows</li>
							<li className="mt-2 text-large">Apple Inc.</li>
							<li className="mt-2 text-large">Applebees</li>
							<li className="mt-2 text-large">Aramark</li>
							<li className="mt-2 text-large">AT&T</li>
							<li className="mt-2 text-large">Avon Products</li>
							<li className="mt-2 text-large">Bahama Breeze</li>
						</ol>
					</div>

					<div className="float-left ml-20 max-[500px]:hidden">
						<ol>
							<li>Baskin-Robbins</li>
							<li className="mt-2 text-large">Bed,Bath & Beyond</li>
							<li className="mt-2 text-large">Best Western</li>
							<li className="mt-2 text-large">Black & Decker</li>
							<li className="mt-2 text-large">Blue Cross Blue Shield</li>
							<li className="mt-2 text-large">Braum’s Inc</li>
							<li className="mt-2 text-large">Bridgestrone</li>
							<li className="mt-2 text-large">Buffalo Wild Wings</li>
							<li className="mt-2 text-large">Campbell’s Soup</li>
							<li className="mt-2 text-large">Canon</li>
							<li className="mt-2 text-large">Carl’s Jr</li>
							<li className="mt-2 text-large">Carrier Corporation</li>
						</ol>
					</div>

					<div className="float-left ml-20 max-[1030px]:hidden">
						<ol>
							<li>Caterpillar Inc</li>
							<li className="mt-2 text-large">CDW</li>
							<li className="mt-2 text-large">Chili’s</li>
							<li className="mt-2 text-large">Chipotle</li>
							<li className="mt-2 text-large">Crysler</li>
							<li className="mt-2 text-large">ConArga Foods</li>
							<li className="mt-2 text-large">Dairy Queen</li>
							<li className="mt-2 text-large">Dart Containers</li>
							<li className="mt-2 text-large">Deer Park Spring Water</li>
							<li className="mt-2 text-large">Delta Faucet</li>
							<li className="mt-2 text-large">Denny’s</li>
							<li className="mt-2 text-large">Dole Food Company</li>
						</ol>
					</div>
				</div>
			</div>

			<div className="helpcard mt-10 flex-col max-[765px]:w-11/12">
				<div>
					<p className="text- xl font-bold clear-both">
						Ask for help: <span className="border-solid border-2 border-black rounded-sm  bg-white">Need Help?</span>
					</p>
				</div>

				<div>
					<p className="text-lg font-bold">We Understand This is Difficult, We are here to help.</p>
				</div>
			</div>
		</div>
	);
}
export default CriminalRecordHelp;
