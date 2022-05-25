const socket = io(); // SOCKET.IO

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const cards = [
    'Candycane Forest',
    'Peanut Acres',
    'Licorice Forest',
    'Snow Flake Lake',
    'Lollipop Woods',
    'Chocolate Swamp'
];

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
  
// Socket on taking in the information from the emit
socket.on('dice', (data) => {
    if (data.current === 'dice') {
        console.log('DICE:', data.dice);
    }
    else if (data.current === 'card') {
        console.log('CARD:', cards[data.card]);
    }
});