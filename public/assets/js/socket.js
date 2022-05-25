const socket = io(); // SOCKET.IO

const diceImg = document.querySelector('.dice-img');

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function diceRoll(times, dice) {
    for (let i = 0; i < times; i++) {
        setTimeout(function() {
            if (i === times - 1) {
                diceImg.innerHTML = `<img src="/assets/images/dice-${dice}.png" alt="Dice ${dice}" />`;
            } else {
                diceImg.innerHTML = `<img src="/assets/images/dice-${randomize(1, 7)}.png" alt="Rolling..." />`;
            }
        }, 150 * i);
    }
}

const cards = [
    { title: 'Candycane Forest', image: 'candycane' },
    { title: 'Peanut Acres', image: 'nuts' },
    { title: 'Licorice Forest', image: 'licorice' },
    { title: 'Snow Flake Lake', image: 'cottoncandy' },
    { title: 'Lollipop Woods', image: 'lollipop' },
    { title: 'Chocolate Swamp', image: 'chocolate' }
];

if (document.querySelector('#roll-dice')) {
    document.querySelector('#roll-dice').addEventListener('click', (event) => {
        event.preventDefault();
        
        // Emit the following information
        socket.emit('dice', {
            current: 'dice',
            dice: randomize(1, 7)
        });
    });

    document.querySelector('#pick-card').addEventListener('click', (event) => {
        event.preventDefault();
        
        // Emit the following information
        socket.emit('dice', {
            current: 'card',
            card: randomize(0, 6)
        });
    });
}
  
// Socket on taking in the information from the emit
socket.on('dice', (data) => {
    if (data.current === 'dice') {

        let times = randomize(5, 7);
        diceRoll(times, data.dice);

    }
    else if (data.current === 'card') {
        const cardImg = document.querySelector('.card-img');
        cardImg.classList.remove('card-back');
        cardImg.innerHTML = `<img src="/assets/images/${cards[data.card].image}.png"
            alt="${cards[data.card].title}" />
            <p>${cards[data.card].title}</p>`;

    }
});