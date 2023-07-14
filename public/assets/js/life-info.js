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
const houseCards = [
    { title: 'Cozy Condo', image: 'cozycondo',
        price: '320', sell: { red: '260', black: '450' },
        description: 'Classy, casual, or crazy, no matter how you decorate, in the city, you\'ll find yourself quite comfy in this cozy condo.'
    },
    { title: 'Beach House', image: 'beachhouse',
        price: '280', sell: { red: '220', black: '400' },
        description: 'By the sea, <i>lake</i>, or even the Nile, this beach house has everything you need for your life by the water.'
    },
    { title: 'Tudor', image: 'tudor',
        price: '550', sell: { red: '420', black: '800' },
        description: 'This tudor house comes with tufloors and tubaths. It\'s the perfect home for tusims to raise tukids.'
    },
    { title: 'Spanish Villa', image: 'spanishvilla',
        price: '700', sell: { red: '600', black: '1,000' },
        description: 'Bienvenidos to this Mediterranean home. Includes a large kitchen to cook tapas, paella, and more. Delicioso!'
    },
    { title: 'Farmhouse', image: 'farmhouse',
        price: '500', sell: { red: '420', black: '700' },
        description: 'With a yard big enough for a sheep...dog, this all American house will make you feel like you\'re living large!'
    },
    { title: 'Eco Home', image: 'ecohome',
        price: '220', sell: { red: '180', black: '360' },
        description: 'With walls made of recyclable material and a grass roof, living in an eco home is good for the environment.'
    },
    { title: 'Wood Shack', image: 'woodshack',
        price: '80', sell: { red: '60', black: '160' },
        description: 'So what if you\'re in a remote bog or bayou? You got this at a braggable bargain! Wait, are those mosquitoes?'
    },
    { title: 'Mobile Home', image: 'mobilehome',
        price: '180', sell: { red: '120', black: '300' },
        description: 'Without a permanent foundation, the great thing about a mobile home is that you can move it to a nicer trailer park.'
    },
    { title: 'Japanese Townhouse', image: 'japanesetownhouse',
        price: '480', sell: { red: '400', black: '650' },
        description: 'With bamboo <i>tatami</i> floors and futons behind the sliding <i>fususma</i> doors, this house just transports you to Japan.'
    },
    { title: 'Victorian', image: 'victorian',
        price: '800', sell: { red: '650', black: '1,200' },
        description: 'This large house has a library, parlor, 19th century servants\' quarters, marble fireplaces, and a wraparound porch.'
    },
];

// ACTION CARDS
const actionCards = [
    { title: '', image: '', type: '', reward: '' },
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