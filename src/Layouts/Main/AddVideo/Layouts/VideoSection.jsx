import React from 'react';
import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';

export default function VideoSection({ reactVideoPlayerRef, url }) {
	return (
		<div className="sticky top-32 bg-backgroundColor shadow-md mx-12 md:mx-20 lg:mx-0 lg:mr-4">
			<div style={{ aspectRatio: '16/9' }}>
				<ReactPlayer
					ref={reactVideoPlayerRef}
					className="react-player"
					url={url}
					width="100%"
					height="100%"
					config={{
						youtube: {
							playerVars: {
								controls: 1,
								showinfo: 1,
							},
						},
					}}
				/>
			</div>
		</div>
	);
}

VideoSection.propTypes = {
	reactVideoPlayerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
	url: PropTypes.string.isRequired,
};
