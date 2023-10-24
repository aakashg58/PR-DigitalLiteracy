import React from 'react';

function Footer() {
	return (
		<div className="mt-5">
			<div className="h-16 flex items-center justify-center w-full bg-blue-900">
				<p className="text-white font-InriaSans text-center text-lg md:text-base xs:text-xs">
					© {new Date().getFullYear()} Project Rebound | All Rights Reserved
				</p>
			</div>
		</div>
	);
}

export default Footer;
