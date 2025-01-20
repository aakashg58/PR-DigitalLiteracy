import { useEffect, useState } from 'react';
import { doc } from 'firebase/firestore';
import AddVideo from '../AddVideo/AddVideo';
import { fetchVideoFromFirebase, fetchTranscriptFromFirebase } from '../../../firebase/firebaseReadWrite';
import { db } from '../../../firebase/firebase';

export default function UpdateVideoLayout(videoId, editType) {
	const [videoData, setVideoData] = useState(null);

	const collectionName = editType === 'archive' ? 'youtube-deleted-history' : 'youtube-videos';
	const videoDocRef = doc(db, collectionName, videoId);
	const transcriptDocRef = doc(db, 'youtube-transcripts', videoId);

	const { video, loadingVideo, errorVideo } = fetchVideoFromFirebase(videoDocRef);
	const { transcript, loadingTranscript, errorTranscript } = fetchTranscriptFromFirebase(transcriptDocRef, videoId);

	useEffect(() => {
		if (video) {
			const updatedVideo = {
				...video,
				transcript: transcript ? transcript.transcript : null,
				key: videoId,
			};
			setVideoData(updatedVideo);
		}
	}, [video, transcript, videoId]);

	if (loadingVideo || loadingTranscript) {
		return <div>Loading...</div>;
	}

	// Handle the case where the video exists but the transcript doesn't
	if (errorTranscript && !errorVideo) {
		return (
			<div>
				<AddVideo editVideoData={{ ...video, transcript: null, key: videoId }} editType={editType} />
			</div>
		);
	}

	if (errorVideo) {
		return <div>Error: {errorVideo}</div>;
	}

	return <div>{videoData && <AddVideo editVideoData={videoData} editType={editType} />}</div>;
}
