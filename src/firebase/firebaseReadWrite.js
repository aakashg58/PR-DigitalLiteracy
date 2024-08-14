import {
	updateDoc,
	onSnapshot,
	setDoc,
	collection,
	addDoc,
	getDocs,
	where,
	query,
	doc,
	getDoc,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';

import { db } from './firebase';

const videoCollectionName = 'youtube-videos';
const transcriptCollectionName = 'youtube-transcripts';

export const addData = async (docRef, docData) => {
	console.log('docRef:', docRef);
	await setDoc(docRef, docData, { merge: true })
		.then(console.log('Document added'))
		.catch((e) => {
			console.log('error is ', e);
		});
};

export const updateData = async (docRef, docData) => {
	if (typeof docData !== 'object' || Array.isArray(docData)) {
		console.error('Invalid data:', docData);
		return;
	}

	await updateDoc(docRef, docData)
		.then(console.log('Document updated'))
		.catch((e) => {
			console.log('error is ', e);
		});
};

export const addVideoData = async (collectionName, docData) => {
	try {
		const docRef = await addDoc(collection(db, collectionName), docData);
		console.log('Document added with ID: ', docRef.id);
	} catch (e) {
		console.log('Error adding document:', e);
	}
};

export const fetchVideosFromFirebase = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, videoCollectionName), (snapshot) => {
			const videoData = snapshot.docs.map((document) => ({
				...document.data(),
				key: document.id,
			}));
			setVideos(videoData);
		});

		return unsubscribe;
	}, []);

	return videos;
};

export const fetchVideoFromFirebase = (docRef, docID) => {
	const [video, setVideo] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVideo = async () => {
			try {
				const unsubscribe = onSnapshot(docRef, (docSnap) => {
					if (docSnap.exists()) {
						setVideo(docSnap.data());
					} else {
						console.warn('No video found with the given document ID.');
						setError('Video not found');
					}
					setLoading(false);
				});

				return () => unsubscribe(); // Cleanup on unmount
			} catch (err) {
				console.error('Error fetching video:', err);
				setError(err.message); // Store the error message
				setLoading(false); // Set loading to false on error
			}
		};

		fetchVideo();
	}, [docID]); // Include d

	return { video, error, loading };
};

// Get unique topics
export const getTopics = async () => {
	try {
		const videosRef = collection(db, videoCollectionName);
		const querySnapshot = await getDocs(videosRef);

		const topicsSet = new Set();
		querySnapshot.forEach((document) => {
			const videoData = document.data();
			if (videoData.category) {
				topicsSet.add(videoData.category);
			}
		});

		return Array.from(topicsSet); // Convert Set to Array
	} catch (error) {
		console.error('Error fetching topics: ', error);
		return [];
	}
};

export const getSubtopics = async (category) => {
	try {
		const videosRef = collection(db, videoCollectionName);
		const queryConstraint = where('category', '==', category);
		const querySnapshot = await getDocs(query(videosRef, queryConstraint));

		const subtopicsSet = new Set();
		querySnapshot.forEach((document) => {
			const videoData = document.data();
			if (videoData.subtopic) {
				subtopicsSet.add(videoData.subtopic);
			}
		});

		return Array.from(subtopicsSet);
	} catch (error) {
		console.error('Error fetching subtopics: ', error);
		return [];
	}
};

export const fetchTopicsAndSubtopics = () => {
	const [subtopicGroups, setSubtopicGroups] = useState(null);

	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, videoCollectionName), async (snapshot) => {
			const topics = await getTopics();
			const allSubtopics = {};

			// Fetch subtopics for each topic in parallel
			const subtopicPromises = topics.map(async (category) => {
				const subtopics = await getSubtopics(category);
				allSubtopics[category] = subtopics;
			});

			// Wait for all subtopic fetches to complete
			await Promise.all(subtopicPromises);
			setSubtopicGroups(Object.entries(allSubtopics));
		});

		return unsubscribe;
	}, []);

	return subtopicGroups;
};

export const fetchTrancriptsFromFirebase = () => {
	const [transcripts, setTranscripts] = useState([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, transcriptCollectionName), (snapshot) => {
			const transcriptData = snapshot.docs.map((document) => ({
				...document.data(),
				key: document.id,
			}));
			setTranscripts(transcriptData);
		});

		return unsubscribe;
	}, []);

	return transcripts;
};
