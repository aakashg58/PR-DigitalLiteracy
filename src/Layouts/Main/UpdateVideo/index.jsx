import { useEffect } from 'react';
import AddVideo from '../AddVideo/AddVideo';
import { fetchVideoFromFirebase } from '../../../firebase/firebaseReadWrite';

export default function UpdateVideoLayout(videoId) {
	const { video, loading, error } = fetchVideoFromFirebase(videoId);

	useEffect(() => {
		if (video) {
			video.key = videoId;
		}
	}, [video]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return <div>{video && <AddVideo editVideoData={video} />}</div>;
}
