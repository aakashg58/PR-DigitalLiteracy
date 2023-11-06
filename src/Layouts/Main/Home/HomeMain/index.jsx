import HomeCard from '../../../../components/homeCard';
import cardImage1 from '../../../../assets/images/card-image-1.png';
import cardImage2 from '../../../../assets/images/card-image-2.png';
import cardImage3 from '../../../../assets/images/card-image-3.png';
import cardImage4 from '../../../../assets/images/card-image-4.png';
import cardImage5 from '../../../../assets/images/card-image-5.png';
// import cardImage6 from '../../../../assets/images/card-image-6.png';

const cardData = [
	{
		image: cardImage1,
		heading: 'Technology Use in Daily Life',
		subItems: ['Apps for different purposes', 'Google Search Techniques', 'Privacy Settings'],
	},
	{
		image: cardImage2,
		heading: 'Technology use for Class and Work',
		subItems: ['Microsoft Office Basics', 'Printing and Scanning', 'Email and Document Upload'],
	},
	{
		image: cardImage3,
		heading: 'Technology Safety and Privacy',
		subItems: ['Phishing and Scams', 'Financial Security', 'Malware and More'],
	},
	{
		image: cardImage4,
		heading: 'Financial Well Being and Management',
		subItems: ['Auto Pay', 'Bill Check', 'Credit Rating'],
	},
	{
		image: cardImage5,
		heading: 'Job Application Support',
		subItems: ['Job Search', 'Identify Your Skills', 'Resume Builder'],
	},
	// {
	// 	image: cardImage6,
	// 	heading: 'Accessing Public Services and Resources',
	// 	subItems: ['Social Services', 'Govt Support', 'NGO Support'],
	// },
];

const HomeMain = () => (
	<div className="w-full flex items-center justify-center pb-36">
		<div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-16 max-w-screen-xl">
			{cardData.map((card, i) => (
				<HomeCard key={card.heading} index={i} image={card.image} heading={card.heading} subItems={card.subItems} />
			))}
		</div>
	</div>
);

export default HomeMain;
