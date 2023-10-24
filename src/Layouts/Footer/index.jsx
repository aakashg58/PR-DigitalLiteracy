import React from 'react';

function Footer() {
	return (
		<div className="mt-5">
			<div className="h-48 flex flex-col items-center w-full bg-black">
				<p className="text-white text-center text-lg md:text-base xs:text-xs my-12">
					© {new Date().getFullYear()} Project Rebound | All Rights Reserved
				</p>
			</div>
		</div>
	);
}

export default Footer;
