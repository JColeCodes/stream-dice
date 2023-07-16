const socket = io(); // SOCKET.IO

const cardStack = document.querySelector('.card-stack');
const leftCard = cardStack.querySelector('.left');
const rightCard = cardStack.querySelector('.right');

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function displayCard(card, card_type, side) {
    const cardImg = document.querySelector(side).querySelector('.card-img');
    if (card_type === 'career') {
        cardImg.innerHTML = `<h1>${careerCards[card].title}</h1>
        <img src="assets/images/LIFE/${card_type}/${careerCards[card].image}.png"
            alt="${careerCards[card].title}" class="career-img" />
        <div class="salary-table">
            <div class="salary">
                <h2>Salary</h2>
                <ul>
                    <li><img src="assets/images/LIFE/icons/money.svg" alt="Base Salary" /> ${careerCards[card].nocollege.salary}k</li>
                    <li><img src="assets/images/LIFE/icons/college.svg" alt="College Salary" /> ${careerCards[card].college.salary}k</li>
                    <li><img src="assets/images/LIFE/icons/collegex2.svg" alt="Extended College Salary" /> ${careerCards[card].university.salary}k</li>
                </ul>
            </div>
            <div class="taxes">
                <h2><img src="assets/images/LIFE/icons/taxes.svg" alt="Taxes" /> Taxes</h2>
                <ul>
                    <li><img src="assets/images/LIFE/icons/money.svg" alt="Base Tax" /> ${careerCards[card].nocollege.taxes}k</li>
                    <li><img src="assets/images/LIFE/icons/college.svg" alt="College Tax" /> ${careerCards[card].college.taxes}k</li>
                    <li><img src="assets/images/LIFE/icons/collegex2.svg" alt="Extended College Tax" /> ${careerCards[card].university.taxes}k</li>
                </ul>
            </div>
        </div>`;
    } else if (card_type === 'house') {
        cardImg.innerHTML = `<h1>${houseCards[card].title}</h1>
        <img src="assets/images/LIFE/${card_type}/${houseCards[card].image}.png"
            alt="${houseCards[card].title}" class="house-img" />
        <p class='house-description'>${houseCards[card].description}</p>
        <p class='house-price'>$${houseCards[card].price},000</p>
        <hr />
        <div class='sell-house'>
            <span>SELL!</span>
            <div class='sell-prices'>
                <p class="sell-loss"><img src="assets/images/LIFE/icons/spintowin-red.svg" alt="Spin Red" /> $${houseCards[card].sell.red},000</p>
                <p class="sell-gain"><img src="assets/images/LIFE/icons/spintowin-black.svg" alt="Spin Black" /> $${houseCards[card].sell.black},000</p>
            </div>
        </div>`;
    } else if (card_type === 'action') {
        cardImg.innerHTML = 'And this one is for ACTION.';
    }
}

function selectCard(side) {
    let other = '';
    if (side === 'left') {
        other = 'right';
    } else if (side === 'right') {
        other = 'left';
    }
    cardStack.querySelector(`.${side}`).classList.add('selected');
    cardStack.querySelector(`.${side}`).classList.remove('unselected');
    cardStack.querySelector(`.${other}`).classList.add('unselected');
    cardStack.querySelector(`.${other}`).classList.remove('selected');
}

function removeInit() {
    document.querySelectorAll('.initial').forEach(init => {
        setTimeout(() => {
            init.classList.remove('initial');
        }, 1100);
    });
}
removeInit();


function addMyCards(card) {
    const cardList = document.querySelector('.personal-view .card-list');
    const noCardsMsg = document.querySelector('.no-cards-msg');

    const cardNum = parseInt(card.dataset.num);
    const cardType = cardStack.dataset.type;

    if (cardType === 'career') {
        if (document.querySelector('.personal-view .list-career')) {
            document.querySelector('.personal-view .list-career').remove();
        }
        const listCareer = document.createElement('div');
        listCareer.classList.add('list-career');
        listCareer.innerHTML = `<h1>${careerCards[cardNum].title}</h1>
        <img src="assets/images/LIFE/${cardType}/${careerCards[cardNum].image}.png"
            alt="${careerCards[cardNum].title}" class="career-img" />
        <div class="salary-table">
            <div class="salary">
                <h2>Salary</h2>
                <ul>
                    <li><img src="assets/images/LIFE/icons/money.svg" alt="Base Salary" /> ${careerCards[cardNum].nocollege.salary}k</li>
                    <li><img src="assets/images/LIFE/icons/college.svg" alt="College Salary" /> ${careerCards[cardNum].college.salary}k</li>
                    <li><img src="assets/images/LIFE/icons/collegex2.svg" alt="Extended College Salary" /> ${careerCards[cardNum].university.salary}k</li>
                </ul>
            </div>
            <div class="taxes">
                <h2>Taxes</h2>
                <ul>
                    <li><img src="assets/images/LIFE/icons/money.svg" alt="Base Tax" /> ${careerCards[cardNum].nocollege.taxes}k</li>
                    <li><img src="assets/images/LIFE/icons/college.svg" alt="College Tax" /> ${careerCards[cardNum].college.taxes}k</li>
                    <li><img src="assets/images/LIFE/icons/collegex2.svg" alt="Extended College Tax" /> ${careerCards[cardNum].university.taxes}k</li>
                </ul>
            </div>
        </div>`;
        cardList.prepend(listCareer);

    } else if (cardType === 'house') {
        const listHouse = document.createElement('div');
        listHouse.classList.add('list-house');
        listHouse.innerHTML = `<h1>${houseCards[cardNum].title}</h1>
        <img src="assets/images/LIFE/${cardType}/${houseCards[cardNum].image}.png"
            alt="${houseCards[cardNum].title}" class="house-img" />
        <p class='house-price'>$${houseCards[cardNum].price},000</p>
        <hr />
        <div class='sell-house'>
            <span>SELL!</span>
            <div class='sell-prices'>
                <p class="sell-loss"><img src="assets/images/LIFE/icons/spintowin-red.svg" alt="Spin Red" /> $${houseCards[cardNum].sell.red},000</p>
                <p class="sell-gain"><img src="assets/images/LIFE/icons/spintowin-black.svg" alt="Spin Black" /> $${houseCards[cardNum].sell.black},000</p>
            </div>
        </div>`;

        const closeHouse = document.createElement('div');
        closeHouse.classList.add('close-house');
        closeHouse.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        closeHouse.addEventListener('click', () => {
            listHouse.remove();
            if (cardList.innerHTML === '') {
                noCardsMsg.classList.remove('hidden');
            }
        });
        listHouse.appendChild(closeHouse);

        cardList.appendChild(listHouse);
    }

    if (cardList.innerHTML !== '') {
        noCardsMsg.classList.add('hidden');
    } else {
        noCardsMsg.classList.remove('hidden');
    }
}

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

    const cardBottom = document.querySelector('.card.bottom');
    cardBottom.addEventListener('click', e => {
        e.preventDefault();

        let cardInfoL = 0;
        let cardInfoR = 0;
        const typeID = cardStack.dataset.type;

        if (leftCard.classList.contains('flip')) {
            if (typeID === 'career') {
                cardInfoL = randomize(0, 20);
                cardInfoR = randomize(0, 20);

                while (cardInfoL === cardInfoR) {
                    cardInfoR = randomize(0, 20);
                }
            }
            else if (typeID === 'house') {
                cardInfoL = randomize(0, 10);
                cardInfoR = randomize(0, 10);

                while (cardInfoL === cardInfoR) {
                    cardInfoR = randomize(0, 10);
                }
            }
            else if (typeID === 'action') {
                cardInfoL = randomize(0, 1);
                cardInfoR = randomize(0, 1);
            }
        }

        leftCard.dataset.num = cardInfoL;
        rightCard.dataset.num = cardInfoR;

        socket.emit('life', {
            current: 'card-flip',
            type: typeID,
            cardL: cardInfoL,
            cardR: cardInfoR,
        });
    });

    const cardLeft = document.querySelector('.card.left');
    cardLeft.addEventListener('click', e => {
        e.preventDefault();

        addMyCards(cardLeft);

        socket.emit('life', {
            current: 'card-left-select'
        });
    });

    const cardRight = document.querySelector('.card.right');
    cardRight.addEventListener('click', e => {
        e.preventDefault();

        addMyCards(cardRight);

        socket.emit('life', {
            current: 'card-right-select'
        });
    });

    document.querySelector('#how-to-play').addEventListener('click', () => {
        const infoPanel = window.open('', 'infoPanel', 'width=550,height=722');
        infoPanel.document.write(`
        <html lang="en">
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
                        <h4>The Spinner</h4>
                        <ul>
                            <li>The default spinner is the NUMBERS wheel, but you can toggle on the FATE wheel (via the purple button) for when you land on a fate circle.</li>
                            <li>To spin the wheel, you press the "Spin the Wheel" button, which will pop the result in front of the spinner when the spin finishes. You can close the result by pressing the pink "Close Spin Result" button. (It will automatically hide after one minute.)</li>
                        </ul>
                        <h4>The Cards</h4>
                        <ul>
                            <li>To select a card, press a button to determine which type of card you're selecting. "Career", "House", or "Action". Once selected, the card stack will slide in from the right.</li>
                            <li>Click on the card stack once to draw 2 cards, which will flip over and show side by side.</li>
                            <li>You can select your card by clicking on the one you pick. Doing that will put your selected card in the front view.</li>
                            <li>You can click on your selected card once more to put them back in the stack for the next person.</li>
                            <li>You can also hide the card stack by pressing the pink "Reset Cards" button, which will put all cards back into the stack and/or move the stack off screen. (It will automatically do this 2 minutes after the initial card stack call.)</li>
                            <li>All cards listed under "My Cards" are visible only to you in this session. If you refresh, your cards will disappear.</li>
                            <li>In "My Cards", selecting a new career will replace the career card (only 1 career at a time), but all new houses will be added (you can own multiple houses). To remove a specific house card, hover over the card and a red "x" will appear. Click the "x" to get rid of the card.</li>
                        </ul>
                    </div>
                </div>
            </body>
        </html>`);
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
        }, 60000);

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
        cardStack.dataset.type = data.type;

        document.querySelectorAll('.card').forEach(card => {
            const cardBack = card.querySelector('.card-back');
            const cardTitle = card.querySelector('.card-title');

            if (!card.classList.contains('flip')) {
                card.classList.add('flip');
            }
            if (card.classList.contains('selected')) {
                card.classList.remove('selected');
            }
            if (card.classList.contains('unselected')) {
                card.classList.remove('unselected');
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
        let flipTimeout = 0;
        if (leftCard.classList.contains('selected') || leftCard.classList.contains('unselected') || rightCard.classList.contains('selected') || rightCard.classList.contains('unselected') ) {
            flipTimeout = 700;

            if (leftCard.classList.contains('selected')) {
                leftCard.style.zIndex = 3;
            } else if (rightCard.classList.contains('selected')) {
                rightCard.style.zIndex = 3;
            }
        }

        setTimeout(() => {
            if (leftCard.classList.contains('flip')) {
                leftCard.classList.remove('flip');
                leftCard.classList.add('move-left');
                displayCard(data.cardL, data.type, '.left');
            } else {
                leftCard.classList.add('flip');
                leftCard.classList.remove('move-left');
            }

            if (rightCard.classList.contains('flip')) {
                rightCard.classList.remove('flip');
                rightCard.classList.add('move-right');
                displayCard(data.cardR, data.type, '.right');
            } else {
                rightCard.classList.add('flip');
                rightCard.classList.remove('move-right');
            }
            leftCard.style.zIndex = '';
            rightCard.style.zIndex = '';
        }, flipTimeout);

        leftCard.classList.remove('selected');
        leftCard.classList.remove('unselected');
        rightCard.classList.remove('selected');
        rightCard.classList.remove('unselected');

    } else if (data.current === 'card-left-select') {
        selectCard('left');
    } else if (data.current === 'card-right-select') {
        selectCard('right');
    }
});