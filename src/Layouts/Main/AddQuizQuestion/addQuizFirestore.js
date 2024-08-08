import { collection, doc, setDoc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

export default async function addQuizQuestionToFirestore(questionData) {
	const quizCollectionRef = collection(db, 'quiz');
	const platformDocRef = doc(quizCollectionRef, questionData.platform);
	const difficultyDocRef = doc(platformDocRef, 'difficulty', questionData.difficulty);
	const questionDocRef = doc(difficultyDocRef, 'questions', questionData.id);

	const firestoreData = { ...questionData };

	// Convert main question images to Base64
	firestoreData.questionImages = await Promise.all(
		questionData.questionImages.map(
			async (image) =>
				new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.readAsDataURL(image.file);
					reader.onload = () => resolve(reader.result);
					reader.onerror = (error) => reject(error);
				}),
		),
	);

	// Convert main answer images to Base64
	firestoreData.answerImages = await Promise.all(
		questionData.answerImages.map(
			async (image) =>
				new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.readAsDataURL(image.file);
					reader.onload = () => resolve(reader.result);
					reader.onerror = (error) => reject(error);
				}),
		),
	);

	// Convert option images to Base64
	firestoreData.options = await Promise.all(
		questionData.options.map(async (option) => {
			const optionImages = await Promise.all(
				option.images.map(
					async (image) =>
						new Promise((resolve, reject) => {
							const reader = new FileReader();
							reader.readAsDataURL(image.file);
							reader.onload = () => resolve(reader.result);
							reader.onerror = (error) => reject(error);
						}),
				),
			);
			return { ...option, images: optionImages };
		}),
	);

	// Use setDoc with an empty object to create the documents if they don't exist
	await setDoc(platformDocRef, { platform: questionData.platform });
	await setDoc(difficultyDocRef, { difficulty: questionData.difficulty });

	// Set the question data (this will either create a new document or overwrite if it exists)
	await setDoc(questionDocRef, firestoreData);
}

export async function retrieveAllQuestionsForPlatform(platform) {
	const platformDocRef = doc(db, 'quiz', platform);
	const platformDocSnapshot = await getDoc(platformDocRef);

	if (!platformDocSnapshot.exists()) {
		throw new Error(`No platform found with name ${platform}`);
	}

	const difficultyCollectionRef = collection(platformDocRef, 'difficulty');
	const difficultySnapshot = await getDocs(difficultyCollectionRef);

	const questionsByDifficulty = {
		easy: [],
		medium: [],
		hard: [],
	};

	difficultySnapshot.docs.forEach(async (difficultyDoc) => {
		const difficultyId = difficultyDoc.id;
		const questionsCollectionRef = collection(difficultyDoc.ref, 'questions');
		const questionsSnapshot = await getDocs(questionsCollectionRef);

		questionsSnapshot.docs.forEach((questionDoc) => {
			const questionData = questionDoc.data();
			questionsByDifficulty[difficultyId].push({
				...questionData,
				id: questionDoc.id,
			});
		});
	});

	return { [platform]: questionsByDifficulty };
}
