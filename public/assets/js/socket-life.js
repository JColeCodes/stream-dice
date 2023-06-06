const socket = io(); // SOCKET.IO

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function displayCard(card) {
    const cardImg = document.querySelector('.card-img');
    cardImg.innerHTML = `<img src="/assets/images/${cards[card].image}.png"
        alt="${cards[card].title}" />
        <p>${cards[card].title}</p>`;
}


if (document.querySelector('#pick-card-type')) {
    document.querySelector('#pick-card-type').addEventListener('change', event => {
        console.log(event.target.value);
        if (event.target.value === 'select-type') {
            document.querySelector('#pick-card').classList.add('hidden');
        } else {
            document.querySelector('#pick-card').classList.remove('hidden');
        }
    });

    document.querySelector('#pick-card').addEventListener('click', (event) => {
        event.preventDefault();
        
        // Emit the following information
        socket.emit('life', {
            current: 'card',
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
    else if (data.current === 'card') {
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
    }
});