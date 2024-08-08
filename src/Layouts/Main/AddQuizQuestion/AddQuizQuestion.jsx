import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addQuizQuestionToFirestore from './addQuizFirestore';
import Button from '../../../components/Buttons/Button';
import TextAreaField from '../../../components/InputFields/TextAreaField';
import TextInputField from '../../../components/InputFields/TextInputField';
import SelectionInputField from '../../../components/InputFields/SelectionInputField';
import ImageInputField from '../../../components/InputFields/ImageInputField';
import CheckboxInputField from '../../../components/InputFields/CheckboxInputField';

/**
 * AddQuizQuestions Component
 *
 * This component provides a form for adding new quiz questions to a quiz.
 * It includes fields for platform, difficulty, question text, answer text, and multiple-choice options.
 * Questions and answers can be uploaded as images.
 *
 * @returns {JSX.Element} The AddQuizQuestions form.
 */
export default function AddQuizQuestions() {
	const [platform, setPlatform] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [id, setId] = useState('');
	const [answerText, setAnswerText] = useState('');
	const [answerImages, setAnswerImages] = useState([]);
	const [questionImages, setQuestionImages] = useState([]);
	const [questionText, setQuestionText] = useState('');
	const [options, setOptions] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const questionData = {
			platform,
			difficulty,
			id,
			questionText,
			questionImages,
			answerText,
			answerImages,
			options,
		};

		try {
			await addQuizQuestionToFirestore(questionData);

			// Reset form fields
			setPlatform('');
			setDifficulty('');
			setId('');
			setQuestionText('');
			setQuestionImages([]);
			setAnswerText('');
			setAnswerImages([]);
			setOptions([]);

			// Display success message
			toast.success('Question Added Successfully!', {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
				transition: Zoom,
			});
		} catch (error) {
			toast.error(`Error adding video: ${error.message}`, {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
				transition: Zoom,
			});
		}
	};

	const handleImageDragOver = (e) => {
		e.preventDefault();
	};

	const handleAnswerImageDrop = (e) => {
		e.preventDefault();
		const files = Array.from(e.dataTransfer.files);

		// Map files to an array of objects with a unique ID and the file itself
		const uploadedImages = files.map((file) => ({
			id: uuidv4(),
			file,
		}));

		setAnswerImages((prevImages) => [...prevImages, ...uploadedImages]);
	};

	const handleQuestionImageDrop = (e) => {
		e.preventDefault();
		const files = Array.from(e.dataTransfer.files);

		// Map files to an array of objects with a unique ID and the file itself
		const uploadedImages = files.map((file) => ({
			id: uuidv4(),
			file,
		}));

		setQuestionImages((prevImages) => [...prevImages, ...uploadedImages]);
	};

	const handleOptionImageDrop = (e, optionIndex) => {
		e.preventDefault();
		const files = Array.from(e.dataTransfer.files);

		// Map files to an array of objects with a unique ID and the file itself
		const uploadedImages = files.map((file) => ({
			id: uuidv4(),
			file,
		}));

		setOptions((prevOptions) =>
			prevOptions.map((option, index) =>
				index === optionIndex ? { ...option, images: [...option.images, ...uploadedImages] } : option,
			),
		);
	};

	const handleOptionChange = (index, field, value) => {
		setOptions((prevOptions) => prevOptions.map((option, i) => (i === index ? { ...option, [field]: value } : option)));
	};

	const handleAddOption = () => {
		// Generate a unique ID for the new option
		setOptions((prevOptions) => [...prevOptions, { id: uuidv4(), label: '', images: [], isCorrect: false }]);
	};

	const handleRemoveOption = (index) => {
		setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
	};

	return (
		<form onDragOver={handleImageDragOver} className="px-8 text-primaryColor">
			<section className="flex flex-col gap-6 bg-backgroundColor shadow-md rounded-xl p-12">
				<SelectionInputField
					headerText="Platform:"
					inputLabel="Select Platform"
					value={platform}
					onChangeFunction={setPlatform}
					selectionFields={[
						{ type: 'header', text: 'Select Platform' },
						{ type: 'selection', value: 'mobile', text: 'Mobile' },
						{ type: 'selection', value: 'desktop', text: 'Desktop' },
					]}
					id="platformSelectionField_"
				/>

				<SelectionInputField
					headerText="Difficulty:"
					inputLabel="Select Difficulty"
					value={difficulty}
					onChangeFunction={setDifficulty}
					selectionFields={[
						{ type: 'header', text: 'Select Difficulty' },
						{ type: 'selection', value: 'easy', text: 'Easy' },
						{ type: 'selection', value: 'medium', text: 'Medium' },
						{ type: 'selection', value: 'hard', text: 'Hard' },
					]}
					id="difficultySelectionField_"
				/>

				<TextInputField
					headerText="ID:"
					placeholder="Enter Question ID"
					value={id}
					onChangeFunction={setId}
					id="idTextField_"
				/>

				<TextAreaField
					headerText="Question Text:"
					placeholder="Enter Question Text"
					value={questionText}
					onChangeFunction={setQuestionText}
					id="questionTextField_"
				/>

				<ImageInputField
					headerText="Question Image:"
					placeholder="Upload Question Image"
					value={questionImages}
					onChangeFunction={handleQuestionImageDrop}
					id="questionImageField_"
				/>

				<TextAreaField
					headerText="Answer Text:"
					placeholder="Enter Answer Text"
					value={answerText}
					onChangeFunction={setAnswerText}
					id="answerTextField_"
				/>

				<ImageInputField
					headerText="Answer Image:"
					placeholder="Upload Answer Image"
					value={answerImages}
					onChangeFunction={handleAnswerImageDrop}
					id="answerImageField_"
				/>
			</section>

			<section className="bg-backgroundColor shadow-md rounded-xl p-12 mt-10">
				<h3 className="text-lg font-bold mb-4 mt-6">Options:</h3>
				{options.map((option, optionIndex) => (
					<div key={option.id} className="flex flex-col gap-2 mb-6 border-2 rounded-md p-4 shadow-sm">
						<TextInputField
							headerText={`Option ${optionIndex + 1}:`}
							placeholder={`Enter Text for Option ${optionIndex + 1}`}
							value={option.label}
							onChangeFunction={(value) => handleOptionChange(optionIndex, 'label', value)}
							id={`optionTextField${optionIndex}_`}
						/>

						<ImageInputField
							onChangeFunction={(e) => handleOptionImageDrop(e, optionIndex)}
							value={option.images}
							placeholder={`Drag & Drop Images for Option ${optionIndex + 1}`}
							id={`optionImageField${optionIndex}_`}
						/>

						<CheckboxInputField
							value={option.isCorrect}
							onChangeFunction={(newValue) => handleOptionChange(optionIndex, 'isCorrect', newValue)}
							headerText="Is Correct"
							id={`optionCheckboxField${optionIndex}_`}
						/>

						<div className="flex">
							<Button
								onChangeFunction={() => handleRemoveOption(optionIndex)}
								text="Remove Option"
								className="bg-red-500 hover:bg-red-700 px-3"
								id="removeOptionButton_"
							/>
						</div>
					</div>
				))}
				<div className="flex">
					<Button
						onChangeFunction={handleAddOption}
						text="Add Option"
						className="bg-green-500 hover:bg-green-700 px-3"
						id="addOptionButton_"
					/>
				</div>
			</section>

			<div className="flex justify-center mt-8">
				<Button onChangeFunction={handleSubmit} text="Submit" id="submitButton_" />
				<ToastContainer />
			</div>
		</form>
	);
}
