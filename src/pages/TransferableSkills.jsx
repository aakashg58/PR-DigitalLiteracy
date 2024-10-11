import { useState } from 'react';
import AudioRecorder from '../components/Audio/AudioRecorder';
import VideoRecorder from '../components/RecordVideo/VideoRecorder';

function TransferableSkills() {
	let [recordOption, setRecordOption] = useState();

	const toggleRecordOption = (type) => {
		return () => {
			setRecordOption(type);
		};
	};

	return (
		<div className="flex-col">
			<div className="flex items-center justify-center pt-10">
				<h1 className="font-bold text-5xl">Finding Transferable Skills</h1>
			</div>

			<div className="flex items-center justify-center pt-10 px-36">
				<h1 className="font-bold text-5xl">
					Transferable skills allow employers to better see how your skill set applies to the job.
				</h1>
			</div>

			<div className="card flex-col mt-10">
				<h3 className="font-bold text-4xl break-normal py-5">Finding Transferable Skills</h3>
				<h3 className="font-bold text-2xl break-normal py-5">Develop a Personal Story</h3>
				<p className="text-2xl break-normal">
					Think back on life experiences that caused you to grow as a person. This can be part of any aspect of your
					life. You could include job or volunteering experience. Write down all of these experiences. Reach out to
					friends, family and mentors to help gain another perspective of areas that you personally do well in. See if
					you can find any similarities between these experiences, . If there where any areas that you consistently
					excel in. To give some ideas, below are examples of transferable skills.{' '}
				</p>
				<h3 className="font-bold text-2xl break-normal py-5">Common Transferable Personal Skills</h3>

				<ol>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">1. Time Management: </span> Being able to manage simultaneous tasks and attach
							appropriate amounts of time and resources is a valuable tool for the workforce.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">2. Written Communication Skills: </span> the ability to communicate your ideas
							in a easily understood way that gets all the main points across clearly and respectfully.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">3. Adaptability: </span> Being able to find ways to be effective in spite of
							changing surroundings and working conditions.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">4. Leadership: </span> The capability to understand peoples strengths and
							being able to assign tasks accordingly. A good leader can inspire their team to accomplish a mutual goal.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">5. Problem Solving: </span> Looking a an issue and addressing it in a creative
							way to best meet everybody&apos;s needs.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">6. Dedication: </span> The ability for one to be devote their time and efforts
							to a cause.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">7. Delegation: </span> The capability to split up tasks or resources in a way
							that is fair to everyone involved.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">8. Patience: </span> Staying calm and level headed when tasks and expectation
							are not met.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">8. Verbal Communication Skills: </span> The ability to speak ones ideas
							clearly in a way that is easy to understand and respectful
						</p>
					</li>
				</ol>
			</div>

			<div className="card flex-col mt-20">
				<h3 className="font-bold text-4xl break-normal py-5">How to use transferable skills in interview</h3>
				<p className="text-xl break-normal">
					When asked about strengths, discuss transferable strengths along with when you applied these skills. Try to
					provide a convincing argument as to why this strength helped remedy the situation. This will help the employer
					better visualize how your strengths can be used on the job.
				</p>
			</div>

			<div className="card flex-col mt-20">
				<h3 className="font-bold text-4xl break-normal py-5">Transferable Skills Practice</h3>
				<p className=" break-normal">
					To get some practice with interviews prepare a speech about when you helped address a situation with your own
					skills.
				</p>
				<ol>
					<li className="mt-8">
						<p className="text-2xl font-bold">1. Press the record button to record your story.</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl font-bold">
							2. Play back this recording and analyze your speech and make changes as necessary.
						</p>
					</li>
					<li className="mt-8">
						<p className="text-2xl font-bold">
							3. Once your satisfied with your speech, press record and then submit your speech for review.
						</p>
					</li>
				</ol>

				<div>
					<h1 className="text-4xl font-bold">Record Your Story</h1>
					<div className="flex justify-center items-center gap-3">
						<button
							className="p-4 text-center inline-block text-xl font-bold cursor-pointer bg-white rounded-xl"
							type="button"
							onClick={toggleRecordOption('video')}
						>
							Record Video
						</button>
						<button
							className="p-4 text-center inline-block text-xl font-bold cursor-pointer bg-white rounded-xl"
							type="button"
							onClick={toggleRecordOption('audio')}
						>
							Record Audio
						</button>
						{recordOption === 'video' ? <VideoRecorder /> : recordOption === 'audio' ? <AudioRecorder /> : <div></div>}
					</div>
				</div>
			</div>
		</div>
	);
}
export default TransferableSkills;
