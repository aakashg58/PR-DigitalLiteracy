import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchTopicsAndSubtopics } from '../../../../firebase/firebaseReadWrite';
import TextInputField from '../../../../components/InputFields/TextInputField';
import TagsInputField from '../../../../components/InputFields/TagsInputField';
import SelectionInputField from '../../../../components/InputFields/SelectionInputField';

export default function VideoInputSection({
	url,
	setUrl,
	validateUrlFunction,
	tags,
	setTags,
	operatingSystem,
	setOs,
	category,
	setCategory,
	subtopic,
	setSubtopic,
}) {
	const subtopics = fetchTopicsAndSubtopics();
	const [displaySubtopics, setDisplayedSubtopics] = useState([]);

	// Fetch subtopics corresponding to the category when the user selects a category
	useEffect(() => {
		if (category && subtopics) {
			const relevantSubtopics = subtopics.find((item) => item[0]?.toLowerCase() === category.toLowerCase())?.[1] ?? [];

			setDisplayedSubtopics(relevantSubtopics);

			// Reset subtopic only if it's not in the new list of relevantSubtopics
			if (!relevantSubtopics.includes(subtopic)) {
				setSubtopic('');
			}
		}
	}, [category, subtopics]);

	return (
		<div className="bg-backgroundColor shadow-md rounded-xl py-12 px-12">
			<div className="flex flex-col gap-6">
				<TextInputField
					headerText="Youtube Link:"
					placeholder="Input Youtube Video Url"
					onChangeFocusFunction={validateUrlFunction}
					value={url}
					onChangeFunction={setUrl}
					id="urlTextField_"
				/>

				<TagsInputField
					headerText="Tags:"
					placeholder="To add tags, input the desired word and press Enter"
					value={tags}
					onChangeFunction={setTags}
					id="tagsField_"
				/>

				<SelectionInputField
					headerText="Operating System:"
					inputLabel="What kind of device is this for?"
					value={operatingSystem}
					onChangeFunction={setOs}
					id="operatingSystemSelectionField_"
					selectionFields={[
						{ type: 'header', text: 'Mobile Devices', disabled: true },
						{ type: 'selection', text: 'iOS', value: 'iOS' },
						{ type: 'selection', text: 'Android', value: 'Android' },
						{ type: 'divider' },
						{ type: 'header', text: 'PC', disabled: true },
						{ type: 'selection', text: 'Windows', value: 'Windows' },
						{ type: 'selection', text: 'Mac', value: 'Mac' },
						{ type: 'selection', text: 'Linux', value: 'Linux' },
						{ type: 'divider' },
						{ type: 'selection', text: 'All', value: 'All' },
					]}
				/>

				<SelectionInputField
					headerText="Video Category:"
					inputLabel="What category is this video for?"
					value={category}
					onChangeFunction={setCategory}
					id="categorySelectionField_"
					selectionFields={[
						{ type: 'selection', text: 'Technology Use in Daily Life', value: 'daily_life' },
						{ type: 'selection', text: 'Technology Safety and Privacy', value: 'safety_privacy' },
						{ type: 'selection', text: 'Technology use for Class and Work', value: 'class_word' },
						{ type: 'selection', text: 'Financial Well Being and Management', value: 'finance' },
					]}
				/>

				{category && subtopics?.length > 0 && (
					<SelectionInputField
						headerText="Subtopic:"
						inputLabel="Select a Subtopic"
						id="subtopicSelectionField_"
						value={subtopic}
						onChangeFunction={setSubtopic}
						selectionFields={displaySubtopics.map((subtopicVal) => ({
							type: 'selection',
							value: subtopicVal,
							text: subtopicVal,
						}))}
					/>
				)}
			</div>
		</div>
	);
}

VideoInputSection.propTypes = {
	url: PropTypes.string.isRequired,
	setUrl: PropTypes.func.isRequired,
	validateUrlFunction: PropTypes.func.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	setTags: PropTypes.func.isRequired,
	operatingSystem: PropTypes.string.isRequired,
	setOs: PropTypes.func.isRequired,
	category: PropTypes.string.isRequired,
	setCategory: PropTypes.func.isRequired,
	subtopic: PropTypes.string.isRequired,
	setSubtopic: PropTypes.func.isRequired,
};

export const validateVideoInputSection = (url, operatingSystem, category, subtopic, setPopup) => {
	// Check YouTube URL field
	if (url === '') {
		setPopup({
			text: 'Please enter a Youtube video URL.',
			title: 'Oops...',
			visible: true,
			icon: 'error',
		});
		return false;
	}

	// Check operating system
	if (operatingSystem === '') {
		setPopup({
			text: 'Please select an Operating System.',
			title: 'Oops...',
			visible: true,
			icon: 'error',
		});
		return false;
	}

	// Check category
	if (category === '') {
		setPopup({
			text: 'Please select a video category.',
			title: 'Oops...',
			visible: true,
			icon: 'error',
		});
		return false;
	}

	// Check subtopic
	if (subtopic === '') {
		setPopup({
			text: 'Please select a subtopic.',
			title: 'Oops...',
			visible: true,
			icon: 'error',
		});
		return false;
	}

	return true;
};
