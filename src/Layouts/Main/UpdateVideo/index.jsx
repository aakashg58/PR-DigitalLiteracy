import { useEffect } from 'react';
import { doc } from 'firebase/firestore';
import AddVideo from '../AddVideo/AddVideo';
import { fetchVideoFromFirebase } from '../../../firebase/firebaseReadWrite';
import { db } from '../../../firebase/firebase';

export default function UpdateVideoLayout(videoId, editType) {
	const collectionName = editType === 'archive' ? 'youtube-deleted-history' : 'youtube-videos';
	const docRef = doc(db, collectionName, videoId);

	const { video, loading, error } = fetchVideoFromFirebase(docRef);

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

	return <div>{video && <AddVideo editVideoData={video} editType={editType} />}</div>;
}
