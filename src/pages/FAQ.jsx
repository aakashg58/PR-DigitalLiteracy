import { Link } from 'react-router-dom';
import '../Layouts/Main/FAQ/FAQ.css';
import elasticlunr from 'elasticlunr';
import React, { useState, useEffect } from 'react';
import faqItems from '../Layouts/Main/FAQ/constants';

const MAX_ANSWER_LENGTH = 100; // max character length for answers

export default function FAQ() {
	const [activeIndex, setActiveIndex] = useState(null);
	const [searchQuery, setSearchQuery] = useState(''); // To store the search input
	const [index, setIndex] = useState(null); // Store the Elasticlunr index
	const [filteredFAQItems, setFilteredFAQItems] = useState(faqItems); // Filtered FAQ results

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	useEffect(() => {
		// Initialize Elasticlunr index
		const newIndex = elasticlunr();
		newIndex.addField('question'); // Add question field to index
		newIndex.addField('answer'); // Add answer field to index
		newIndex.setRef('id'); // Set unique identifier for each document

		// Add FAQ data to the index
		faqItems.forEach((item, idx) => {
			newIndex.addDoc({ id: idx, question: item.question, answer: item.answer });
		});

		setIndex(newIndex); // Store the index in state
	}, []);

	const toggleFAQ = (faqIndex) => {
		setActiveIndex(activeIndex === faqIndex ? null : faqIndex);
	};

	const renderAnswer = (item) => {
		const { answer, question, longAnswers } = item;

		return (
			<>
				{answer.length > MAX_ANSWER_LENGTH ? `${answer.substring(0, MAX_ANSWER_LENGTH)}...` : answer}
				{longAnswers && (
					<Link
						to={`/InfoPage/${encodeURIComponent(question)}`}
						className="text-blue-500 bg-transparent border-none cursor-pointer text-sm underline ml-2"
					>
						Read More
					</Link>
				)}
			</>
		);
	};

	const handleSearch = (query) => {
		setSearchQuery(query);
		if (index && query.trim()) {
			// Execute the search using Elasticlunr index
			const results = index.search(query, {
				expand: true, // Expand search to match related terms
			});

			// Filter FAQ items based on search results
			const filteredResults = results.map(({ ref }) => faqItems[ref]);
			setFilteredFAQItems(filteredResults);
		} else {
			// If no search query, show all FAQ items
			setFilteredFAQItems(faqItems);
		}
	};

	return (
		<div className="faq-container">
			<header>
				<h1>Frequently Asked Questions</h1>
				<div>Got a question? We&apos;re here to answer. If you don&apos;t see your question below, ask it here:</div>
			</header>

			<div className="search-bar">
				<input
					type="text"
					placeholder="Search Questions"
					value={searchQuery}
					onChange={(e) => handleSearch(e.target.value)} // Update searchQuery when input changes
				/>
			</div>

			<ul className="faq-list">
				{filteredFAQItems.map((item, faqIndex) => (
					<li
						key={`faq-${item.question}`} // Use a unique identifier as the key instead of the array index
						className={`faq-item ${activeIndex === faqIndex ? 'active' : ''}`}
					>
						<div
							className="question"
							onClick={() => toggleFAQ(faqIndex)}
							onKeyPress={(e) => e.key === 'Enter' && toggleFAQ(faqIndex)}
							role="button"
							tabIndex={0}
						>
							<span>{item.question}</span>
							<span>{activeIndex === faqIndex ? '-' : '>'}</span>
						</div>
						{activeIndex === faqIndex && <div className="answer">{renderAnswer(item)}</div>}
					</li>
				))}
			</ul>
		</div>
	);
}
