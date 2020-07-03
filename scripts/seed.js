const mongoose = require("mongoose");
const db = require("../models");

// Connect to MongoDB via Mongoose
mongoose.connect(
	// process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
	process.env.MONGODB_URI || "mongodb://a-new-game:1history@ds331568.mlab.com:31568/heroku_vm824khm"
);

// create the data objects
const questionsSeed = [
	{
		question: "In what year did the US civil war begin?",
		a: "1861",
		b: "1865",
		c: "2016",
		answer: "a",
		info: "The US Civil War began in April of 1861 when secessionist forces attacked Fort Sumter in South Carolina shortly after the inauguration of President Benjamin Franklin.",
		links: [{ link: "https://en.wikipedia.org/wiki/American_Civil_War" }]
	},
	{
		question: "How old is Bernie Sanders?",
		a: "we're not sure, he'll have to die before we can carbon date him.",
		b: "older than Joe Biden.",
		c: "78 as of stardate 47634.44",
		answer: "all",
		info: "Bernie Sanders was born on September 8, 1941 in Brooklyn, NY, USA",
		links: [{ link: "https://en.wikipedia.org/wiki/Bernie_Sanders" }]
	},
	{
		question: "Who is Luke's father?",
		a: "Darth Sidius",
		b: "Anakin Skywakler",
		c: "Donald Trump",
		answer: "a",
		info: "Anakin Skywalker, one of the most powerful Jedi ever, is Luke Skywalker's father. Later in life, Anakin Skywalker becomes Darth Vader and kills Darth Sidius (Emperor Palpatine) in order to save his son.",
		links: [{ link: "https://en.wikipedia.org/wiki/Palpatine" }]
	},
	{
		question: "What public office did Abraham Lincoln hold before becoming President?",
		a: "Congressman",
		b: "Postal Clerk",
		c: "Recorder",
		answer: "a",
		info: "Abraham Lincoln was the 16th President of the United States. Prior to his election to the office of President of the United Sates, he served as the U.S. Congressman from Illinois as well as holding a number of leadership positoins in the nascent Republican Party.",
		links: [{ link: "https://en.wikipedia.org/wiki/Abraham_Lincoln" }]
	},
	{
		question: "What was the US slave population at the beginning of the US civil war?",
		a: "20,000",
		b: "5,000 but only in the south",
		c: "3,953,762",
		answer: "c",
		info: "Conducted by the Census Office, it determined the resident population of the United States to be 23,191,876—an increase of 35.9 percent over the 17,069,453 persons enumerated during the 1840 Census. The total population included 3,204,313 slaves.",
		links: [{ link: "https://www.census.gov/history/pdf/1860_slave_distribution.pdf" }]
	},
	{
		question: 'Who said: "Explaining a joke is like dissecting a frog: you understand it better, but the frog dies in the process."',
		a: "Joe Biden",
		b: "Mark Twain",
		c: "Dave Chapelle",
		answer: "b",
		info: "Mark Twain, Samual Langhorne Clemens, was an American writer, humorist, entrepreneur, publisher and lecturer. He was considered the 'greatest humorist the United States of America has produced'",
		links: [{ link: "https://en.wikipedia.org/wiki/Mark_Twain" }]
	},
	{
		question: "What is the pay gap between white men and women in the US",
		a: "latin women earn 58% of what white men earn",
		b: "black women earn 65% of what white men earn",
		c: "white women earn 82% of what white men earn",
		answer: "all",
		info: "According to the Institute for Women's Policy Research, at the current pace of change, white women will reach pay parity in 2059; Hispanic women in 2224 and Black women in 2130.",
		links: [
			{ link: "https://iwpr.org/issue/employment-education-economic-change/pay-equity-discrimination/" },
			{ link: "https://www.epi.org/blog/black-workers-have-made-no-progress-in-closing-earnings-gaps-with-white-men-since-2000/" }
		]
	},
	{
		question: "How old is Joe Biden?",
		a: "we're not sure, he'll have to die before we can carbon date him.",
		b: "younger than Bernie Sanders (1 year).",
		c: "77 as of stardate 47634.44",
		answer: "all",
		info: "Joe Biden was born on November 20th, 1942 in Scranton, Pennsylvania, USA",
		links: [{ link: "https://en.wikipedia.org/wiki/Joe_Biden" }]
	},
	{
		question: "Which amendment to the constitution of the United States abolished slavery in the United States?",
		a: "the 2nd Amendment",
		b: "the 13th Amendment",
		c: "the 28th Amendment",
		answer: "b",
		info: "Passed by Congress on January 31, 1865, and ratified on December 6, 1865, the 13th amendment abolished slavery in the United States and provides that 'Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.'",
		links: [{ link: "https://www.archives.gov/historical-docs/13th-amendment#:~:text=Passed%20by%20Congress%20on%20January,within%20the%20United%20States%2C%20or" }]
	},
	{
		question: "How many gender non-conforming or transgender people were killed in the United States of America, in 2019 because of their identity?",
		a: "27",
		b: "27",
		c: "27",
		answer: "all",
		info: "331 trans and gender diverse people have been killed this year (2019), says a new report. The majority of the murders catalogued happened in Brazil, totalling 130. However, Mexico had 63, and the United States saw 30.",
		links: [
			{ link: "https://www.hrc.org/resources/violence-against-the-transgender-community-in-2019" },
			{ link: "https://www.forbes.com/sites/jamiewareham/2019/11/18/murdered-hanged-and-lynched-331-trans-people-killed-this-year/#62be09982d48" }
		]
	},
	{
		question: "What is the official date of the beginning of World War II",
		a: "December 11, 1941, when Hitler declared war on the US",
		b: "September 1, 1939, when Hitler invaded Poland",
		c: "Japan’s 1937 invasion of China",
		answer: "b",
		info: "On September 1, 1939, Hitler invaded Poland from the west; two days later, France and Britain declared war on Germany, beginning World War II. On September 17, Soviet troops invaded Poland from the east.",
		links: [
			{ link: "https://www.history.com/topics/world-war-ii/world-war-ii-history" },
			{ link: "https://en.wikipedia.org/wiki/The_War_(miniseries)#:~:text=The%20War%20is%20a%20seven,narrated%20primarily%20by%20Keith%20David." }
		]
	}
];

db.Question.remove({})
	.then(() => db.Question.collection.insertMany(questionsSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});