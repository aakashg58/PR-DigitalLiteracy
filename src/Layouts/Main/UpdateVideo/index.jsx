import { useEffect, useState } from 'react'; // Import useState
import { doc } from 'firebase/firestore';
import AddVideo from '../AddVideo/AddVideo';
import { fetchVideoFromFirebase, fetchTranscriptFromFirebase } from '../../../firebase/firebaseReadWrite';
import { db } from '../../../firebase/firebase';

export default function UpdateVideoLayout(videoId, editType) {
	const [videoData, setVideoData] = useState(null); // State to hold combined data

	const collectionName = editType === 'archive' ? 'youtube-deleted-history' : 'youtube-videos';
	const videoDocRef = doc(db, collectionName, videoId); // Renamed for clarity
	const transcriptDocRef = doc(db, 'youtube-transcripts', videoId); // Create docRef for transcript

	const { video, loadingVideo, errorVideo } = fetchVideoFromFirebase(videoDocRef);
	const { transcript, loadingTranscript, errorTranscript } = fetchTranscriptFromFirebase(transcriptDocRef, videoId);

	useEffect(() => {
		if (video && transcript) {
			const updatedVideo = { ...video, transcript: transcript.transcript, key: videoId };
			setVideoData(updatedVideo);
		}
	}, [video, transcript, videoId]);

	if (loadingVideo || loadingTranscript) {
		return <div>Loading...</div>;
	}

	if (errorVideo || errorTranscript) {
		return <div>Error: {errorVideo || errorTranscript}</div>;
	}

	return <div>{videoData && <AddVideo editVideoData={videoData} editType={editType} />}</div>;
}
