import React, { useState } from 'react';
import AudioRecorder from '../components/Audio/AudioRecorder';
import VideoRecorder from '../components/RecordVideo/VideoRecorder';
import Button from '../components/Buttons/Button';

function TransferableSkills() {
	let [recordOption, setRecordOption] = useState();
	const [selectedValue, setSelectedValue] = useState('');
	const [items, setItems] = useState([
		{ name: 'Time Management', isClicked: false, id: 1 },
		{ name: 'Written Communication Skills', isClicked: false, id: 2 },
		{ name: 'Adaptability', isClicked: false, id: 3 },
		{ name: 'Leadership', isClicked: false, id: 4 },
		{ name: 'Problem Solving', isClicked: false, id: 5 },
		{ name: 'Dedication', isClicked: false, id: 6 },
		{ name: 'Delegation', isClicked: false, id: 7 },
		{ name: 'Patience', isClicked: false, id: 8 },
		{ name: 'Verbal Communication Skills', isClicked: false, id: 9 },
	]);

	const toggleRecordOption = (type) => {
		return () => {
			const defaultSelectedValue = items.find((item) => item.isClicked)?.name || '';
			if (defaultSelectedValue === '') {
				alert('Please select a skill to discuss');
			} else {
				setRecordOption(type);
			}
		};
	};

	const addToArr = (val) => {
		const newArr = [...items];
		const index = newArr.findIndex((obj) => obj.id === val);
		if (index !== -1) {
			newArr[index].isClicked = !newArr[index].isClicked;
			setItems(newArr);
		}
	};

	return (
		<div className="flex-col">
			<div className="flex items-center justify-center pt-10">
				<h1 className="font-bold text-5xl">Finding Transferable Skills</h1>
			</div>

			<div className="flex items-center justify-center pt-10 sm:px-20 px-12">
				<h1 className="font-bold text-5xl">
					Transferable skills allow employers to better see how your skill set applies to the job.
				</h1>
			</div>

			<div className="card flex-col mt-10">
				<h3 className="font-bold text-4xl break-normal py-5">Finding Transferable Skills</h3>
				<h3 className="font-bold text-2xl break-normal py-5">Develop a Personal Story</h3>
				<p className="text-2xl break-normal">
					Think back on life experiences that caused you to grow as a person. This can be part of any aspect of your
					life. You could include job or volunteering experience. See if you can find any similarities between these
					experiences and the skills listed below. Select skills you want to discuss about.{' '}
				</p>
				<h3 className="font-bold text-2xl break-normal py-5">Common Transferable Personal Skills</h3>

				<ol>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">1. Time Management: </span> Being able to manage simultaneous tasks and attach
							appropriate amounts of time and resources is a valuable tool for the workforce.
						</p>

						<GetButton
							isSelected={
								items.find((obj) => {
									return obj.id === 1;
								}).isClicked
							}
							buttonId={1}
							onUpdate={addToArr}
							skillName={'Time Management'}
						/>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">2. Written Communication Skills: </span> the ability to communicate your ideas
							in a easily understood way that gets all the main points across clearly and respectfully.
						</p>
						<GetButton
							isSelected={
								items.find((obj) => {
									return obj.id === 2;
								}).isClicked
							}
							buttonId={2}
							onUpdate={addToArr}
							skillName={'Written Communication Skills'}
						/>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">3. Adaptability: </span> Being able to find ways to be effective in spite of
							changing surroundings and working conditions.
						</p>
						<GetButton
							isSelected={
								items.find((obj) => {
									return obj.id === 3;
								}).isClicked
							}
							buttonId={3}
							onUpdate={addToArr}
							skillName={'Adaptability'}
						/>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">4. Leadership: </span> The capability to understand peoples strengths and
							being able to assign tasks accordingly. A good leader can inspire their team to accomplish a mutual goal.
						</p>
						<GetButton
							isSelected={
								items.find((obj) => {
									return obj.id === 4;
								}).isClicked
							}
							buttonId={4}
							onUpdate={addToArr}
							skillName={'Leadership'}
						/>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">5. Problem Solving: </span> Looking a an issue and addressing it in a creative
							way to best meet everybody&apos;s needs.
						</p>
						<GetButton
							isSelected={
								items.find((obj) => {
									return obj.id === 5;
								}).isClicked
							}
							buttonId={5}
							onUpdate={addToArr}
							skillName={'Problem Solving'}
						/>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">6. Dedication: </span> The ability for one to be devote their time and efforts
							to a cause.
						</p>
						<GetButton
							isSelected={
								items.find((obj) => {
									return obj.id === 6;
								}).isClicked
							}
							buttonId={6}
							onUpdate={addToArr}
							skillName={'Dedication'}
						/>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">7. Delegation: </span> The capability to split up tasks or resources in a way
							that is fair to everyone involved.
						</p>
						<GetButton
							isSelected={
								items.find((obj) => {
									return obj.id === 7;
								}).isClicked
							}
							buttonId={7}
							onUpdate={addToArr}
							skillName={'Delegation'}
						/>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">8. Patience: </span> Staying calm and level headed when tasks and expectation
							are not met.
						</p>
						<GetButton
							isSelected={
								items.find((obj) => {
									return obj.id === 8;
								}).isClicked
							}
							buttonId={8}
							onUpdate={addToArr}
							skillName={'Patience'}
						/>
					</li>
					<li className="mt-8">
						<p className="text-2xl">
							<span className="font-bold">9. Verbal Communication Skills: </span> The ability to speak ones ideas
							clearly in a way that is easy to understand and respectful
						</p>
						<GetButton
							isSelected={
								items.find((obj) => {
									return obj.id === 9;
								}).isClicked
							}
							buttonId={9}
							onUpdate={addToArr}
							skillName={'Verbal Communication Skills'}
						/>
					</li>
				</ol>
			</div>

			<div className="card flex-col mt-20">
				<h3 className="font-bold text-4xl break-normal py-5">How to use transferable skills in interview</h3>
				<p className="text-2xl break-normal">
					When asked about strengths, discuss transferable strengths along with when you applied these skills. Try to
					provide a convincing argument as to why this strength helped remedy the situation. This will help the employer
					better visualize how your strengths can be used on the job. Once you have a story prepared, practice it with
					the media recorder below.
				</p>
			</div>

			<div className="card flex-col mt-20">
				<h3 className="font-bold text-4xl break-normal py-5">Transferable Skills Practice</h3>
				<p className="text-2xl break-normal">
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
					<h1 className="text-4xl font-bold py-5">Record Your Story</h1>
					<div className="min-[900px]:flex flex-row justify-center items-center gap-3">
						{recordOption !== 'video' && (
							<button
								className="p-4 text-center inline-block text-xl font-bold cursor-pointer bg-white rounded-xl  hover:bg-lightBlue"
								type="button"
								onClick={toggleRecordOption('video')}
							>
								Record Video
							</button>
						)}
						{recordOption !== 'audio' && (
							<button
								className="p-4 text-center inline-block text-xl font-bold cursor-pointer bg-white rounded-xl  hover:bg-lightBlue"
								type="button"
								onClick={toggleRecordOption('audio')}
							>
								Record Audio
							</button>
						)}

						<div>
							{recordOption === 'video' && <VideoRecorder skillsList={items} />}
							{recordOption === 'audio' && <AudioRecorder skillsList={items} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const GetButton = ({ isSelected, buttonId, onUpdate, skillName }) => {
	if (isSelected) {
		return (
			<Button
				onChangeFunction={() => onUpdate(buttonId)}
				text="Skill Selected"
				className="rounded-lg font-semibold text-white bg-green-500 hover:bg-green-400"
				id={skillName}
			/>
		);
	} else {
		return (
			<Button
				onChangeFunction={() => onUpdate(buttonId)}
				text="Select Skill"
				className="rounded-lg font-semibold text-white bg-blue-500 hover:bg-blue-400"
				id={skillName}
			/>
		);
	}
};

export default TransferableSkills;
