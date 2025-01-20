import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { deleteAndArchiveVideo } from '../../../firebase/firebaseVideoArchive';
import PATHS from '../../../paths';

export default function AdminVideoControls({ videoId }) {
	const navigate = useNavigate();

	const onArchive = () => {
		deleteAndArchiveVideo(videoId);
	};

	const onEdit = () => {
		navigate(PATHS.updateVideo.replace(':videoId', videoId).replace(':editType', 'update'));
	};

	return (
		<div className="flex justify-center gap-12 my-4">
			<button type="button" className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => onArchive()}>
				Archive
			</button>
			<button type="button" className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => onEdit()}>
				Edit
			</button>
		</div>
	);
}

AdminVideoControls.propTypes = {
	videoId: PropTypes.string.isRequired,
};
