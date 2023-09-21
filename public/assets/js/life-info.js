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
    { title: 'Go Fishing', image: 'fishing', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Get a Cow', image: 'cow', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Cook a Grilled Cheese', image: 'grilledcheese', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Get a Fez Chicken', image: 'fezchicken', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Grow a Cowplant', image: 'cowplant', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Order Pizza', image: 'pizza', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Play The Sims on a Computer', image: 'playsims', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Visit the Splash Pads', image: 'splashpads', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Celebrate Harvestfest', image: 'harvestfest', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Ride a Horse', image: 'horse', type: 'regular', reward: { icon: 'heart', amount: 1 } },
    { title: 'Meet a werewolf', image: 'werewolf', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Talk to Grim', image: 'grim', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Learn a New Skill', image: 'newskill', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Repair a Broken Shower', image: 'shower', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Hack Battle at Geek Con', image: 'hackbattle', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Use a Telescope', image: 'telescope', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Visit the Museum', image: 'museum', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Perform a Seance', image: 'seance', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Contact Aliens', image: 'contactaliens', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Complete a Puzzle', image: 'puzzle', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Analyze Samples', image: 'analyzesamples', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Eat a Bizarre Fruit', image: 'bizarrefruit', type: 'regular', reward: { icon: 'book', amount: 1 } },
    { title: 'Upgrade an Appliance', image: 'appliance', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Upgrade a Computer', image: 'computer', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Publish a Book', image: 'publishbook', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Build a Treehouse', image: 'treehouse', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Find Treasure in a Dumpster', image: 'dumpster', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Sell a Creation on Plopsy', image: 'plopsy', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Exchange Rare Postcards', image: 'postcards', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Find a Fossil', image: 'fossil', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Find City Posters', image: 'posters', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Get a Snow Globe for Collection', image: 'snowglobes', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Open a Simmi Capsule', image: 'simmicapsule', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Search Pockets in a Clothing Pile', image: 'clothingpile', type: 'regular', reward: { icon: 'pig', amount: 1 } },
    { title: 'Get a Hamster', image: 'hamster', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Celebrate Your Birthday', image: 'birthday', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Go On Vacation', image: 'vacation', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Snowboard Down a Mountain', image: 'snowboard', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Go to the Spa', image: 'spa', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Go to the Movie Theater', image: 'movietheater', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Travel to Batuu', image: 'batuu', type: 'regular', reward: { icon: 'heart', amount: 2 } },
    { title: 'Travel to Sixam', image: 'sixam', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Explore a Temple in Selvadorada', image: 'selvadorada', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Build a Robot', image: 'robot', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Buy a Bookshelf', image: 'bookshelf', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Visit the Sylvan Glade', image: 'sylvanglade', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Discover University', image: 'university', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Breed Frogs', image: 'breedfrogs', type: 'regular', reward: { icon: 'book', amount: 2 } },
    { title: 'Buy a Pool', image: 'pool', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Own a Retail Shop', image: 'retailshop', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy a Statue of Princess Cordelia', image: 'princesscordelia', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy a Talking Toilet', image: 'talkingtoilet', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy a Big Screen TV', image: 'bigscreentv', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy Lottery Tickets', image: 'lottery', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Buy a Cupcake Machine', image: 'cupcakemachine', type: 'regular', reward: { icon: 'pig', amount: 2 } },
    { title: 'Space Race', image: 'spacerace', type: 'opponent' },
    { title: 'Chess Battle', image: 'chess', type: 'opponent' },
    { title: 'Humor & Hijinks Festival', image: 'humorhijinks', type: 'opponent' },
    { title: 'Host a Costume Party', image: 'costumeparty', type: 'all' },
    { title: 'Ultimate Dance Battle', image: 'dancebattle', type: 'all' },
    { title: 'Pie Competition at the Fair', image: 'piecompetition', type: 'all' },
    { title: 'Karaoke Contest', image: 'karaoke', type: 'all' },
    { title: 'Play Don\'t Wake the Llama', image: 'dontwake', type: 'all' },
    { title: 'Rummage through Garbage', image: 'garbage', type: 'collect' },
    { title: 'Use the Wishing Well', image: 'wishingwell', type: 'collect' },
    { title: 'Rebate Day!', image: 'rebate', type: 'collect' },
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

const howToPlay = `<html lang="en">
    <head>
        <title>How To Play</title>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Luckiest+Guy&family=Milonga&family=Akshar:wght@300;500;700&family=Lato:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
        <link rel='stylesheet' href='/assets/css/style.css' />
        <link rel='stylesheet' href='/assets/css/life.css' />
        <link rel='icon' href='/assets/images/fez.png' />
    </head>
    <body>
        <div class="info-panel">
            <h3>How to play</h3>
            <div class="info-panel-content">
                <i>Any spin you make, any card you pick, EVERY player can see it.</i>
                <h4>Stream Display</h4>
                <ul>
                    <li>This changes the green screen view page for EVERYONE, so all players showing the page in OBS can have a synced overlay. Requires at least one person to click the buttons, but not every single streamer needs to be responsible for toggling their displays on/off in OBS.</li>
                    <li>The spinner will automatically hide after 12 seconds and the cards will automatically hide after 20 seconds.</li>
                </ul>
                <h4>The Spinner</h4>
                <ul>
                    <li>The default spinner is the NUMBERS wheel, but you can toggle on the FATE wheel (via the purple button) for when you land on a fate circle.</li>
                    <li>To spin the wheel, you press the "Spin the Wheel" button, which will pop the result in front of the spinner when the spin finishes. You can close the result by pressing the pink "Close Spin Result" button. (It will automatically hide after 12 seconds.)</li>
                </ul>
                <h4>The Cards</h4>
                <ul>
                    <li>To select a card, press a button to determine which type of card you're selecting. "Career", "House", or "Action". Once selected, the card stack will slide in from the right.</li>
                    <li>Click on the card stack once to draw 2 cards, which will flip over and show side by side.</li>
                    <li>You can select your card by clicking on the one you pick. Doing that will put your selected card in the front view.</li>
                    <li>You can click on your selected card once more to put them back in the stack for the next person.</li>
                    <li>You can also hide the card stack by pressing the pink "Reset Cards" button, which will put all cards back into the stack and/or move the stack off screen. (It will automatically do this 20 seconds after the initial card stack call.)</li>
                    <li>All cards listed under "My Cards" are visible only to you in this session. If you refresh, your cards will disappear.</li>
                    <li>In "My Cards", selecting a new career will replace the career card (only 1 career at a time), but all new houses will be added (you can own multiple houses). To remove a specific house card, hover over the card and a red "x" will appear. Click the "x" to get rid of the card.</li>
                    <li>The "Turn on/off Bucket List" button will toggle the bucket list (for when you retire at the end), so you can only pull certain types of action cards. The button will turn it on/off for ONLY you, so once you retire, you can just turn it on once.</li>
                </ul>
                <h4>The Calculator</h4>
                <ul>
                    <li>The calculator is an optional tool to use to tally up your points. You can input your numbers as you play. It is NOT automatic, so you must manually enter the numbers as you play.</li>
                    <li>The calculator is only visible to you. No one else can see it. They have their own calculators.</li>
                    <li>Money needs the full money value you have at the end of the game (i.e. 800000 or 135800). The calculator will divide this number by 1000 for the score.</li>
                    <li>Loans is the number of loans you needed to get during the game. Most people will get 0 loans. But if you do end up getting them, each loan will subtract 100 per loan.</li>
                    <li>The heart (happiness), book (knowledge), and pig (wealth) are the number of those attributes you collect during the game (from the action cards). Each one is worth 20 points.</li>
                    <li>If you have the highest number of a certain attribute (or are the first one to get the highest number when there is a tie), you get a CROWN for that attribute. You can select "I have the crown" and it will grant you an additional 400 points.</li>
                </ul>
            </div>
        </div>
    </body>
</html>`;