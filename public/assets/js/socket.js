const socket = io(); // SOCKET.IO

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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
        console.log('DICE:', data.dice);
        const diceImg = document.querySelector('.dice-img');
        diceImg.innerHTML = `<img src="/assets/images/dice-${data.dice}.png" alt="Dice ${data.dice}" />`;
    }
    else if (data.current === 'card') {
        console.log('CARD:', cards[data.card].title);
        const cardImg = document.querySelector('.card-img');
        cardImg.innerHTML = `<img src="/assets/images/${cards[data.card].image}.png"
            alt="Dice ${cards[data.card].title}" />
            <p>${cards[data.card].title}</p>`;

    }
});