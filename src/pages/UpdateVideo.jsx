import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import UpdateVideoLayout from '../Layouts/Main/UpdateVideo';

function UpdateVideo() {
	const { videoId, editType } = useParams();

	const { currentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!currentUser || currentUser.uid !== process.env.REACT_APP_ADMIN_UID) {
			navigate('/');
		}
	}, [currentUser]);

	return <div>{UpdateVideoLayout(videoId, editType)}</div>;
}

export default UpdateVideo;
