// CAREER CARDS
const careerCards = [
    { title: 'Actor', image: 'actor',
        nocollege: { salary: '80', taxes: '40' },
        college: { salary: '100', taxes: '80' },
        university: { salary: '110', taxes: '100' }
    },
    { title: 'Artist', image: 'artist',
        nocollege: { salary: '60', taxes: '30' },
        college: { salary: '80', taxes: '50' },
        university: { salary: '90', taxes: '60' }
    },
    { title: 'Astronaut', image: 'astronaut',
        nocollege: { salary: '90', taxes: '70' },
        college: { salary: '110', taxes: '100' },
        university: { salary: '140', taxes: '130' }
    },
    { title: 'Athlete', image: 'athlete',
        nocollege: { salary: '60', taxes: '40' },
        college: { salary: '80', taxes: '60' },
        university: { salary: '110', taxes: '100' }
    },
    { title: 'Babysitter', image: 'babysitter',
        nocollege: { salary: '30', taxes: '10' },
        college: { salary: '50', taxes: '30' },
        university: { salary: '80', taxes: '50' }
    },
    { title: 'Chef', image: 'chef',
        nocollege: { salary: '70', taxes: '60' },
        college: { salary: '90', taxes: '80' },
        university: { salary: '100', taxes: '90' }
    },
    { title: 'Civil Designer', image: 'civildesigner',
        nocollege: { salary: '50', taxes: '30' },
        college: { salary: '70', taxes: '40' },
        university: { salary: '80', taxes: '50' }
    },
    { title: 'Criminal', image: 'criminal',
        nocollege: { salary: '70', taxes: '30' },
        college: { salary: '80', taxes: '40' },
        university: { salary: '90', taxes: '50' }
    },
    { title: 'Critic', image: 'critic',
        nocollege: { salary: '50', taxes: '30' },
        college: { salary: '60', taxes: '40' },
        university: { salary: '70', taxes: '50' }
    },
    { title: 'Detective', image: 'detective',
        nocollege: { salary: '60', taxes: '40' },
        college: { salary: '70', taxes: '50' },
        university: { salary: '90', taxes: '70' }
    },
    { title: 'Doctor', image: 'doctor',
        nocollege: { salary: '20', taxes: '10' }, // If you're a doctor who didn't go to school, you're doing it underground and illegally
        college: { salary: '100', taxes: '80' },
        university: { salary: '130', taxes: '120' }
    },
    { title: 'Lawyer', image: 'lawyer',
        nocollege: { salary: '80', taxes: '60' },
        college: { salary: '100', taxes: '80' },
        university: { salary: '120', taxes: '110' }
    },
    { title: 'Lifeguard', image: 'lifeguard',
        nocollege: { salary: '40', taxes: '20' },
        college: { salary: '60', taxes: '30' },
        university: { salary: '70', taxes: '40' }
    },
    { title: 'Politician', image: 'politician',
        nocollege: { salary: '70', taxes: '20' },
        college: { salary: '80', taxes: '30' },
        university: { salary: '90', taxes: '40' }
    },
    { title: 'Scientist', image: 'scientist',
        nocollege: { salary: '90', taxes: '70' },
        college: { salary: '100', taxes: '80' },
        university: { salary: '110', taxes: '100' }
    },
    { title: 'Secret Agent', image: 'secretagent',
        nocollege: { salary: '80', taxes: '60' },
        college: { salary: '90', taxes: '70' },
        university: { salary: '110', taxes: '100' }
    },
    { title: 'Simfluencer', image: 'simfluencer',
        nocollege: { salary: '80', taxes: '60' },
        college: { salary: '90', taxes: '70' },
        university: { salary: '100', taxes: '80' }
    },
    { title: 'Streamer', image: 'streamer',
        nocollege: { salary: '70', taxes: '50' },
        college: { salary: '80', taxes: '60' },
        university: { salary: '100', taxes: '80' }
    },
    { title: 'Teacher', image: 'teacher',
        nocollege: { salary: '40', taxes: '20' },
        college: { salary: '60', taxes: '40' },
        university: { salary: '80', taxes: '50' }
    },
    { title: 'Tech Guru', image: 'techguru',
        nocollege: { salary: '50', taxes: '30' },
        college: { salary: '80', taxes: '70' },
        university: { salary: '110', taxes: '100' }
    },
];

// HOUSE CARDS
// Selling a house is always positive. RED sells for 10% increase, while BLACK sells for 80% increase.
const houseCards = [
    { title: 'Cozy Condo', image: 'cozycondo',
        price: '320', sell: { red: '350', black: '570' },
        description: 'Classy, casual, or crazy, no matter how you decorate, in the city, you\'ll find yourself quite comfy in this cozy condo.'
    },
    { title: 'Beach House', image: 'beachhouse',
        price: '280', sell: { red: '310', black: '500' },
        description: 'By the sea, <i>lake</i>, or even the Nile, this beach house has everything you need for your life by the water.'
    },
    { title: 'Tudor', image: 'tudor',
        price: '550', sell: { red: '600', black: '990' },
        description: 'This tudor house comes with tufloors and tubaths. It\'s the perfect home for tusims to raise tukids.'
    },
    { title: 'Spanish Villa', image: 'spanishvilla',
        price: '700', sell: { red: '770', black: '1,260' },
        description: 'Bienvenidos to this Mediterranean home. Includes a large kitchen to cook tapas, paella, and more. Delicioso!'
    },
    { title: 'Farmhouse', image: 'farmhouse',
        price: '500', sell: { red: '550', black: '900' },
        description: 'With a yard big enough for a sheep...dog, this all American house will make you feel like you\'re living large!'
    },
    { title: 'Eco Home', image: 'ecohome',
        price: '220', sell: { red: '240', black: '400' },
        description: 'With walls made of recyclable material and a grass roof, living in an eco home is good for the environment.'
    },
    { title: 'Wood Shack', image: 'woodshack',
        price: '80', sell: { red: '90', black: '140' },
        description: 'So what if you\'re in a remote bog or bayou? You got this at a braggable bargain! Wait, are those mosquitoes?'
    },
    { title: 'Mobile Home', image: 'mobilehome',
        price: '180', sell: { red: '200', black: '320' },
        description: 'Without a permanent foundation, the great thing about a mobile home is that you can move it to a nicer trailer park.'
    },
    { title: 'Japanese Townhouse', image: 'japanesetownhouse',
        price: '480', sell: { red: '530', black: '860' },
        description: 'With bamboo <i>tatami</i> floors and futons behind the sliding <i>fususma</i> doors, this house just transports you to Japan.'
    },
    { title: 'Victorian', image: 'victorian',
        price: '800', sell: { red: '880', black: '1,440' },
        description: 'This large house has a library, parlor, 19th century servants\' quarters, marble fireplaces, and a wraparound porch.'
    },
];

// ACTION CARDS
// Types: Regular (heart, book, pig), Opponent (select opponent), All (all players spin), Collect (spin to collect)
const actionCards = [
    { title: 'Go Bowling', image: 'bowling', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Meet Father Winter', image: 'fatherwinter', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Go Fishing', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Get a Cow', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Get a Fez Chicken', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Grow a Cowplant', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Order Pizza', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Play The Sims on a Computer', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Visit the Splash Pads', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Celebrate Harvestfest', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Ride a Horse', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Meet a werewolf', image: 'werewolf', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Talk to Grim', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Learn a New Skill', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Repair a Broken Shower', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Hack Battle at Geek Con', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Use a Telescope', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Visit the Museum', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Perform a Seance', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Contact Aliens', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Complete a Puzzle', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Analyze Samples', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Eat a Bizarre Fruit', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Upgrade an Appliance', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Upgrade a Computer', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Publish a Book', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Build a Treehouse', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Find Treasure in a Dumpster', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Sell a Creation on Plopsy', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Exchange Rare Postcards', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Find a Fossil', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Find City Posters', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Get a Snow Globe for Collection', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Open a Simmi Capsule', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Search Pockets in a Clothing Pile', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Get a Hamster', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Celebrate Your Birthday', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Go On Vacation', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Snowboard Down a Mountain', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Go to the Spa', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Go to the Movie Theater', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Travel to Batuu', image: 'placeholder', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Travel to Sixam', image: 'sixam', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Explore a Temple in Selvadorada', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Build a Robot', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Buy a Bookshelf', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Visit the Sylvan Glade', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Discover University', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Breed Frogs', image: 'placeholder', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Buy a Pool', image: 'pool', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Own a Retail Shop', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy a Statue of Princess Cordelia', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy a Talking Toilet', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy a Big Screen TV', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy Lottery Tickets', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy a Cupcake Machine', image: 'placeholder', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Space Race', image: 'placeholder', type: 'opponent' },
    { title: 'Chess Battle', image: 'placeholder', type: 'opponent' },
    { title: 'Humor & Hijinks Festival', image: 'placeholder', type: 'opponent' },
    { title: 'Host a Costume Party', image: 'placeholder', type: 'all' },
    { title: 'Ultimate Dance Battle', image: 'placeholder', type: 'all' },
    { title: 'Pie Competition at the Fair', image: 'placeholder', type: 'all' },
    { title: 'Karaoke Contest', image: 'placeholder', type: 'all' },
    { title: 'Play Don\'t Wake the Llama', image: 'placeholder', type: 'all' },
    { title: 'Rummage through Garbage', image: 'placeholder', type: 'collect' },
    { title: 'Use the Wishing Well', image: 'placeholder', type: 'collect' },
    { title: 'Rebate Day!', image: 'placeholder', type: 'collect' },
];

// SPINNER RESULTS
const numberResults = [
    { num: 10, color: '00dae0' },
    { num: 9, color: '00aeff' },
    { num: 8, color: '4a54ff' },
    { num: 7, color: '8b53ff' },
    { num: 6, color: 'ce20ff' },
    { num: 5, color: 'ff00ff' },
    { num: 4, color: 'ff0000' },
    { num: 3, color: 'ff9d00' },
    { num: 2, color: 'ffe700' },
    { num: 1, color: 'fefc00' },
];
const fateResults = [
    { title: 'Career', color: '1491d2', min: 0, max: 1 },
    { title: 'House', color: 'f87d2b', min: 1, max: 2 },
    { title: 'Family', color: 'dc2977', min: 2, max: 3 },
    { title: 'Taxes', color: 'e00006', min: 3, max: 6 },
    { title: '100K', color: '9465eb', min: 6, max: 8 },
    { title: 'Action', color: 'f7c837', min: 8, max: 10 }
];