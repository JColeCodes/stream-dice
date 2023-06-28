const socket = io(); // SOCKET.IO

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function displayCard(card) {
    const cardImg = document.querySelector('.card-img');
    // cardImg.innerHTML = `<img src="/assets/images/${cards[card].image}.png"
    //     alt="${cards[card].title}" />
    //     <p>${cards[card].title}</p>`;
}

if (document.querySelector('#pick-card-type')) {
    document.querySelector('#pick-card-type').addEventListener('change', event => {
        if (event.target.value === 'select-type') {
            document.querySelector('#pick-card').classList.add('hidden');
        } else {
            document.querySelector('#pick-card').classList.remove('hidden');
        }

        socket.emit('life', {
            current: 'card-type',
            value: event.target.value
        });
    });

    document.querySelector('#pick-card').addEventListener('click', (event) => {
        event.preventDefault();
        
        // Emit the following information
        socket.emit('life', {
            current: 'card-face',
            card: randomize(0, 6)
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
        const card = document.querySelector('.card');
        const cardBack = document.querySelector('.card-back');

        if (data.value === 'select-type') {
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
                }
                cardBack.classList.remove('career');
                cardBack.classList.remove('house');
                cardBack.classList.remove('action');

                if (data.value === 'career') {
                    cardBack.classList.add('career');
                }
                else if (data.value === 'house') {
                    cardBack.classList.add('house');
                }
                else if (data.value === 'action') {
                    cardBack.classList.add('action');
                }
            }, 200);
        }

        // Hides after 1 minute
        setTimeout(() => {
            card.classList.remove('card-show');
            card.classList.add('card-hidden');
        }, 60000);
    }
});