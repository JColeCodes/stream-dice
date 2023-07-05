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

if (document.querySelector('#pick-card-type')) {
    // document.querySelector('#pick-card-type').addEventListener('change', event => {
    //     if (event.target.value === 'select-type') {
    //         document.querySelector('#pick-card').classList.add('hidden');
    //     } else {
    //         document.querySelector('#pick-card').classList.remove('hidden');
    //     }

    //     socket.emit('life', {
    //         current: 'card-type',
    //         value: event.target.value
    //     });
    // });

    // document.querySelector('#pick-card').addEventListener('click', (event) => {
    //     event.preventDefault();
        
    //     // Emit the following information
    //     socket.emit('life', {
    //         current: 'card-face',
    //         card: randomize(0, 6)
    //     });
    // });
    
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
                // while (cardInfoA === cardInfoB) {
                //     cardInfoB = randomize(0, 19);
                // }
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
    if (data.current === 'dice') {

        let times = randomize(5, 7);
        diceRoll(times, data.dice);

    }
    else if (data.current === 'card-face') {
        const card = document.querySelector('.card');
        if (card.classList.contains('flip')) {
            card.classList.toggle('flip');
            displayCard(data.card);
        } else {
            for (let i = 0; i < 2; i++) {
                setTimeout(function() {
                    card.classList.toggle('flip');
                    if (i === 1) {
                        displayCard(data.card);
                    }
                }, 600 * i);
            }
        }
        setTimeout(function() {
            card.classList.add('flip');
        }, 60000);
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

            // Hides after 2 minutes
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