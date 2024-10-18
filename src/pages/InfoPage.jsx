import React from 'react';
import { useParams } from 'react-router-dom';
import faqItems from '../Layouts/Main/FAQ/constants';

const InfoPage = () => {
	const { title } = useParams();

	const faqItem = faqItems.find((item) => item.title === title);

	return (
		<div className="my-40 mx-auto max-w-3xl p-24 bg-gray-100 rounded-lg shadow-md">
			{faqItem ? (
				<>
					<h1 className="text-2xl font-bold text-gray-800 mb-5">{faqItem.title}</h1>
					{faqItem.body.map((paragraph, index) => (
						<p className="text-lg text-gray-700 leading-relaxed mb-4" key={index}>
							{paragraph}
						</p>
					))}
				</>
			) : (
				<p>FAQ not found.</p>
			)}
		</div>
	);
};

export default InfoPage;
