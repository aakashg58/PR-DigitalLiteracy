import React from 'react';
import Footer from '../Layouts/Footer';
import Home from '../Layouts/Main/Home';
import Navbar from '../Layouts/Navbar';

function HomePage() {
	return (
		<div>
			<div className="px-5 md:px-0">
				<Navbar />
				<Home />
			</div>
			<Footer />
		</div>
	);
}

export default HomePage;
