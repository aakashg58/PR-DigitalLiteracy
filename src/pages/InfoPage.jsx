import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import faqItems from '../Layouts/Main/FAQ/constants';
import '../Layouts/Main/FAQ/LongAnswers.css';

const InfoPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const { question } = useParams();

	const faqItem = faqItems.find((item) => item.question === question);

	return (
		<div className="container">
			{faqItem ? <div dangerouslySetInnerHTML={{ __html: faqItem.longAnswers }} /> : <p>FAQ not found.</p>}
		</div>
	);
};

export default InfoPage;
