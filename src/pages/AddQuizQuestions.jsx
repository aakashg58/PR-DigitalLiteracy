import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import AddQuizQuestion from '../Layouts/Main/AddQuizQuestion/AddQuizQuestion';

function AddQuizQuestions() {
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (currentUser && currentUser.uid === process.env.REACT_APP_ADMIN_UID) {
			navigate('/addQuizQuestions');
		} else {
			navigate('/');
		}
	}, [currentUser, navigate]);

	return (
		<div>
			<AddQuizQuestion />
		</div>
	);
}

export default AddQuizQuestions;
