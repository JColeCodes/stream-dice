const socket = io(); // SOCKET.IO

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function displayCard(card, card_type, side) {
    const cardImg = document.querySelector(side).querySelector('.card-img');
    if (card_type === 'career') {
        cardImg.innerHTML = `<img src="assets/images/LIFE/${card_type}/${careerCards[card].image}.png"
            alt="${careerCards[card].title}" />
            <p>${careerCards[card].title}</p>`;
    } else if (card_type === 'house') {
        cardImg.innerHTML = 'This is a HOUSE card!!!! ';
    } else if (card_type === 'action') {
        cardImg.innerHTML = 'And this one is for ACTION.';
    }
}

// CAREER CARDS
const careerCards = [
    { title: 'Actor', image: 'actor', salary: '', taxes: '' },
    { title: 'Artist', image: 'artist', salary: '', taxes: '' },
    { title: 'Astronaut', image: 'astronaut', salary: '', taxes: '' },
    { title: 'Athlete', image: 'athlete', salary: '', taxes: '' },
    { title: 'Babysitter', image: 'babysitter', salary: '', taxes: '' },
    { title: 'Chef', image: 'chef', salary: '', taxes: '' },
    { title: 'Civil Designer', image: 'civildesigner', salary: '', taxes: '' },
    { title: 'Criminal', image: 'criminal', salary: '', taxes: '' },
    { title: 'Critic', image: 'critic', salary: '', taxes: '' },
    { title: 'Detective', image: 'detective', salary: '', taxes: '' },
    { title: 'Doctor', image: 'doctor', salary: '', taxes: '' },
    { title: 'Lawyer', image: 'lawyer', salary: '', taxes: '' },
    { title: 'Lifeguard', image: 'lifeguard', salary: '', taxes: '' },
    { title: 'Politician', image: 'politician', salary: '', taxes: '' },
    { title: 'Scientist', image: 'scientist', salary: '', taxes: '' },
    { title: 'Secret Agent', image: 'secretagent', salary: '', taxes: '' },
    { title: 'Simfluencer', image: 'simfluencer', salary: '', taxes: '' },
    { title: 'Streamer', image: 'streamer', salary: '', taxes: '' },
    { title: 'Teacher', image: 'teacher', salary: '', taxes: '' },
    { title: 'Tech Guru', image: 'techguru', salary: '', taxes: '' },
];

// HOUSE CARDS
const houseCards = [
    { title: '', image: '', price: '', maxSell: '' },
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

function removeInit() {
    document.querySelectorAll('.initial').forEach(init => {
        setTimeout(() => {
            init.classList.remove('initial');
        }, 1100);
    });
}
removeInit();

if (document.querySelector('#pick-card-type')) {
    document.querySelector('#spin-wheel').addEventListener('click', e=> {
        e.preventDefault();

        const randomSpin = (randomize(8, 12) * 360) + randomize(0, 359);

        socket.emit('life', {
            current: 'spinner-spin',
            spin: randomSpin
        });

    });

    document.querySelector('#toggle-wheel').addEventListener('click', e=> {
        e.preventDefault();

        const typeID = document.querySelector('.spin').dataset.type;

        socket.emit('life', {
            current: 'spinner-toggle',
            type: typeID
        });

    });

    document.querySelector('#spin-result-reset').addEventListener('click', e=> {
        e.preventDefault();
        socket.emit('life', {
            current: 'spinner-result-reset'
        });

    });
    
    document.querySelectorAll('.card-face-options button').forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();

            const typeID = button.id.split('-')[1];

            // Emit the following information
            socket.emit('life', {
                current: 'card-type',
                type: typeID
            });
        })
    });

    const cardStack = document.querySelector('.card-stack');
    cardStack.addEventListener('click', e => {
        e.preventDefault();

        let cardInfoA = 0;
        let cardInfoB = 0;
        const typeID = cardStack.dataset.type;

        if (cardStack.querySelector('.left').classList.contains('flip')) {
            if (typeID === 'career') {
                cardInfoA = randomize(0, 19);
                cardInfoB = randomize(0, 19);

                while (cardInfoA === cardInfoB) {
                    cardInfoB = randomize(0, 19);
                }
            }
            else if (typeID === 'house') {
                cardInfoA = randomize(0, 1);
                cardInfoB = randomize(0, 1);
            }
            else if (typeID === 'action') {
                cardInfoA = randomize(0, 1);
                cardInfoB = randomize(0, 1);
            }
        }

        socket.emit('life', {
            current: 'card-flip',
            type: typeID,
            cardA: cardInfoA,
            cardB: cardInfoB,
        });
    });
}
  
// Socket on taking in the information from the emit
socket.on('life', (data) => {
    if (data.current === 'spinner-spin') {
        const baseSpin = data.spin%360;
        const spinner = document.querySelector('.spin');
        const resultEl = document.querySelector('#spin-result');
        const redBlack = resultEl.querySelector('.rb-circle');
        const toggleBtn = document.querySelector('#toggle-wheel');

        if (!resultEl.classList.contains('hidden')) {
            resultEl.classList.add('hidden');
        }
        if (!redBlack.classList.contains('hidden')) {
            redBlack.classList.add('hidden');
        }
        if (toggleBtn) {
            toggleBtn.classList.add('disabled');
        }

        const spinners = document.querySelectorAll('.spinner');
        spinners.forEach(spinner => {
            spinner.style.transform = `rotate(${data.spin}deg)`;

            setTimeout(() => {
                spinner.classList.add('no-transition');
                spinner.style.transform = `rotate(${baseSpin}deg)`;
                setTimeout(() => {
                    spinner.classList.remove('no-transition');
                }, 100);
            }, 5500);
        });

        if (spinner.dataset.type === 'numbers') {
            let number = 0;
            setTimeout(() => {
                redBlack.classList.remove('hidden');
                numberResults.forEach((num, i) => {
                    if (baseSpin >= (i * 36) && baseSpin < ((i + 1) * 36)) {
                        number = num.num;
                        resultEl.style.backgroundColor = `#${num.color}`;
                        resultEl.style.fontSize = '8em';

                        if (i%2 === 0) {
                            redBlack.style.backgroundColor = '#000000';
                        } else {
                            redBlack.style.backgroundColor = '#ff0000';
                        }
                    };
                });

                resultEl.querySelector('p').textContent = number;
            }, 5000);
        } else if (spinner.dataset.type === 'fate') {
            let title = '';
            setTimeout(() => {
                fateResults.forEach(fate => {
                    if (baseSpin >= (fate.min * 36) && baseSpin < (fate.max * 36)) {
                        title = fate.title;
                        resultEl.style.backgroundColor = `#${fate.color}`;
                        resultEl.style.fontSize = '5em';
                    };
                });

                resultEl.querySelector('p').textContent = title;
            }, 5000);
        }

        setTimeout(() => {
            resultEl.classList.remove('hidden');
            if (toggleBtn) {
                toggleBtn.classList.remove('disabled');
            }
        }, 5500);
        setTimeout(() => {
            resultEl.classList.add('hidden');
        }, 120000);

    } else if (data.current === 'spinner-toggle') {
        const spinner = document.querySelector('.spin');
        const fate = spinner.querySelector('.fate');
        const toggleBtn = document.querySelector('#toggle-wheel');
        const resultEl = document.querySelector('#spin-result');

        if (!resultEl.classList.contains('hidden')) {
            resultEl.classList.add('hidden');
        }

        if (data.type === 'numbers') {
            spinner.dataset.type = 'fate';
            fate.classList.add('show');
            fate.classList.remove('hidden');
            if (toggleBtn) {
                toggleBtn.textContent = 'Numbers Wheel';
            }
        } else if (data.type === 'fate') {
            spinner.dataset.type = 'numbers';
            fate.classList.add('hidden');
            fate.classList.remove('show');
            if (toggleBtn) {
                toggleBtn.textContent = 'Fate Wheel';
            }
        }
        
    } else if (data.current === 'spinner-result-reset') {
        const resultEl = document.querySelector('#spin-result');

        if (!resultEl.classList.contains('hidden')) {
            resultEl.classList.add('hidden');
        }

    } else if (data.current === 'card-type') {
        const cardStack = document.querySelector('.card-stack');

        cardStack.dataset.type = data.type;

        document.querySelectorAll('.card').forEach(card => {
            const cardBack = card.querySelector('.card-back');
            const cardTitle = card.querySelector('.card-title');

            if (!card.classList.contains('flip')) {
                card.classList.add('flip');
            }
            if (card.classList.contains('move-left') || card.classList.contains('move-right')) {
                card.classList.remove('move-left');
                card.classList.remove('move-right');
            }
            if (data.type === 'reset') {
                card.classList.add('card-hidden');
                card.classList.remove('card-show');
            } else {
                if (card.classList.contains('card-show')) {
                    card.classList.remove('card-show');
                    card.classList.add('card-hidden');
                }
                setTimeout(() => {
                    if (card.classList.contains('card-hidden')) {
                        card.classList.remove('card-hidden');
                        card.classList.add('card-show');
                        cardTitle.textContent = '';
                    }
                    cardBack.classList.remove('career');
                    cardBack.classList.remove('house');
                    cardBack.classList.remove('action');

                    if (data.type === 'career') {
                        cardBack.classList.add('career');
                        cardTitle.textContent = 'Careers';
                    }
                    else if (data.type === 'house') {
                        cardBack.classList.add('house');
                        cardTitle.textContent = 'Houses';
                    }
                    else if (data.type === 'action') {
                        cardBack.classList.add('action');
                        cardTitle.textContent = 'Actions';
                    }
                }, 200);
            }

            // Hides after 1.2 minutes
            setTimeout(() => {
                card.classList.remove('card-show');
                card.classList.add('card-hidden');
            }, 120000);
        });
    } else if (data.current === 'card-flip') {
        const cardStack = document.querySelector('.card-stack');
        const leftCard = cardStack.querySelector('.left');
        const rightCard = cardStack.querySelector('.right');

        if (leftCard.classList.contains('flip')) {
            leftCard.classList.remove('flip');
            leftCard.classList.add('move-left');
            displayCard(data.cardA, data.type, '.left');
        } else {
            leftCard.classList.add('flip');
            leftCard.classList.remove('move-left');
        }

        if (rightCard.classList.contains('flip')) {
            rightCard.classList.remove('flip');
            rightCard.classList.add('move-right');
            displayCard(data.cardB, data.type, '.right');
        } else {
            rightCard.classList.add('flip');
            rightCard.classList.remove('move-right');
        }
    }
});