import React from 'react';
import Footer from '../Layouts/Footer';
import Home from '../Layouts/Main/Home';
import Navbar from '../Layouts/Navbar';

function HomePage() {
	return (
		<div>
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}

export default HomePage;
