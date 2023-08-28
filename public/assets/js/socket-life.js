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
        const cardCareer = careerCards[card];
        cardImg.innerHTML = `<h1>${cardCareer.title}</h1>
        <img src="assets/images/LIFE/${card_type}/${cardCareer.image}.png"
            alt="${cardCareer.title}" class="career-img" />
        <div class="salary-table">
            <div class="salary">
                <h2>Salary</h2>
                <ul>
                    <li><img src="assets/images/LIFE/icons/money.svg" alt="Base Salary" /> ${cardCareer.nocollege.salary}k</li>
                    <li><img src="assets/images/LIFE/icons/college.svg" alt="College Salary" /> ${cardCareer.college.salary}k</li>
                    <li><img src="assets/images/LIFE/icons/collegex2.svg" alt="Extended College Salary" /> ${cardCareer.university.salary}k</li>
                </ul>
            </div>
            <div class="taxes">
                <h2><img src="assets/images/LIFE/icons/taxes.svg" alt="Taxes" /> Taxes</h2>
                <ul>
                    <li><img src="assets/images/LIFE/icons/money.svg" alt="Base Tax" /> ${cardCareer.nocollege.taxes}k</li>
                    <li><img src="assets/images/LIFE/icons/college.svg" alt="College Tax" /> ${cardCareer.college.taxes}k</li>
                    <li><img src="assets/images/LIFE/icons/collegex2.svg" alt="Extended College Tax" /> ${cardCareer.university.taxes}k</li>
                </ul>
            </div>
        </div>`;
    } else if (card_type === 'house') {
        const cardHouse = houseCards[card];
        cardImg.innerHTML = `<h1>${cardHouse.title}</h1>
        <img src="assets/images/LIFE/${card_type}/${cardHouse.image}.png"
            alt="${cardHouse.title}" class="house-img" />
        <p class='house-description'>${cardHouse.description}</p>
        <p class='house-price'>$${cardHouse.price},000</p>
        <hr />
        <div class='sell-house'>
            <span>SELL!</span>
            <div class='sell-prices'>
                <p class="sell-loss"><img src="assets/images/LIFE/icons/spintowin-red.svg" alt="Spin Red" /> $${cardHouse.sell.red},000</p>
                <p class="sell-gain"><img src="assets/images/LIFE/icons/spintowin-black.svg" alt="Spin Black" /> $${cardHouse.sell.black},000</p>
            </div>
        </div>`;
    } else if (card_type === 'action') {
        const cardAction = actionCards[card];
        cardImg.innerHTML = `<h1>${cardAction.title}</h1>
        <img src="assets/images/LIFE/${card_type}/${cardAction.image}.png"
            alt="${cardAction.title}" class="action-img" />`;
        const rewards = document.createElement('div');
        rewards.classList.add('action-rewards');
        if (cardAction.type !== 'regular') {
            rewards.classList.add('with-spinner');
        }
        if (cardAction.type === 'regular') {
            if (cardAction.reward.amount === 1) {
                rewards.innerHTML = `<div class='rewards-icons ${cardAction.reward.icon}'>
                    <img src="assets/images/LIFE/icons/${cardAction.reward.icon}.svg" alt="Reward: 1 ${cardAction.reward.icon}" />
                </div>`;
            } else if (cardAction.reward.amount === 2) {
                rewards.innerHTML = `<div class='remove-money'>
                    <img src="assets/images/LIFE/icons/money.svg" alt="Remove Money" /> -100k
                </div>
                <div class='rewards-icons ${cardAction.reward.icon}'>
                    <img src="assets/images/LIFE/icons/${cardAction.reward.icon}.svg" alt="Reward: 2 ${cardAction.reward.icon}s" />
                    <img src="assets/images/LIFE/icons/${cardAction.reward.icon}.svg" alt="Reward: 2 ${cardAction.reward.icon}s" />
                </div>`;
            }
        } else if (cardAction.type === 'opponent') {
            rewards.innerHTML = `<div class='spinner-reward'>
                <img src="assets/images/LIFE/icons/spinner.svg" alt="Spinner Icon" />
                <span>Select Your Opponent!</span>
            </div>
            <div class='action-opponent'>
                <p class='winner'>Winner - <img src="assets/images/LIFE/icons/money.svg" alt="Money" /> <span class='money-text'>100k</span></p>
                <p>from Opponent</p>
            </div>`;
        } else if (cardAction.type === 'all') {
            rewards.innerHTML = `<div class='spinner-reward'>
                <img src="assets/images/LIFE/icons/spinner.svg" alt="Spinner Icon" />
                <span>All Players Spin</span>
            </div>
            <div class='action-all'>
                <p>1<span class='ordinal'>st</span> - <img src="assets/images/LIFE/icons/money.svg" alt="Money" /> <span class='money-text'>200k</span></p>
                <p>2<span class='ordinal'>nd</span> - <img src="assets/images/LIFE/icons/money.svg" alt="Money" /> <span class='money-text'>80k</span></p>
                <p>3<span class='ordinal'>rd</span> - <img src="assets/images/LIFE/icons/money.svg" alt="Money" /> <span class='money-text'>40k</span></p>
                <p>4<span class='ordinal'>th</span> - <img src="assets/images/LIFE/icons/money.svg" alt="Money" /> <span class='money-text'>10k</span></p>
            </div>`;
        } else if (cardAction.type === 'collect') {
            rewards.innerHTML = `<div class='spinner-reward'>
                <img src="assets/images/LIFE/icons/spinner.svg" alt="Spinner Icon" />
                <span>Spin to Win</span>
            </div>
            <div class='action-collect'>
                <p><img src="assets/images/LIFE/icons/spintowin-black.svg" alt="Spin Black" /> - <img src="assets/images/LIFE/icons/money.svg" alt="Money" /> <span class='money-text'>80k</span></p>
                <p><img src="assets/images/LIFE/icons/spintowin-red.svg" alt="Spin Red" /> - <img src="assets/images/LIFE/icons/money.svg" alt="Money" /> <span class='money-text'>20k</span></p>
            </div>`;
        }
        cardImg.appendChild(rewards);
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


let actionMax = actionCards.length;

if (document.querySelector('#pick-card-type')) {

    const cardRetire = document.querySelector('#card-retire');
    cardRetire.addEventListener('click', e=> {
        e.preventDefault();
        if (actionMax === actionCards.length) {
            cardRetire.textContent = 'Turn off Bucket List';
            actionMax = 35;
        } else if (actionMax === 35) {
            cardRetire.textContent = 'Turn on Bucket List';
            actionMax = actionCards.length;
        }
    });

    const streamDisplay = ['stream-none', 'stream-spinner', 'stream-cards'];
    streamDisplay.forEach(display => {
        document.querySelector(`#${display}`).addEventListener('click', () => {
            socket.emit('life', {
                current: 'stream-display',
                display: display,
                streamDisplay: streamDisplay
            });
        });
    });
    const allButtons =  document.querySelectorAll('main.life button');
    allButtons.forEach(button => {
        button.classList.add('disabled');
    });

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

            if (typeID !== 'retire') {
                // Emit the following information
                socket.emit('life', {
                    current: 'card-type',
                    type: typeID
                });
            }
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
                const careerMax = careerCards.length;
                cardInfoL = randomize(0, careerMax);
                cardInfoR = randomize(0, careerMax);

                while (cardInfoL === cardInfoR) {
                    cardInfoR = randomize(0, careerMax);
                }
            }
            else if (typeID === 'house') {
                const houseMax = houseCards.length;
                cardInfoL = randomize(0, houseMax);
                cardInfoR = randomize(0, houseMax);

                while (cardInfoL === cardInfoR) {
                    cardInfoR = randomize(0, houseMax);
                }
            }
            else if (typeID === 'action') {
                cardInfoL = randomize(0, actionMax);
                cardInfoR = randomize(0, actionMax);

                while (cardInfoL === cardInfoR) {
                    cardInfoR = randomize(0, actionMax);
                }
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
        const infoPanel = window.open('', 'infoPanel', 'width=550,height=700');
        infoPanel.document.write(howToPlay);
    });

}
  
// Socket on taking in the information from the emit
socket.on('life', (data) => {
    if (data.current === 'stream-display') {
        const spinner = document.querySelector('.spinner-wrap');
        const cards = document.querySelector('.cards-wrap');
        if (document.querySelector(`#${data.display}`)) {
            data.streamDisplay.forEach(button => {
                document.querySelector(`#${button}`).classList.remove('selected');
            });
            document.querySelector(`#${data.display}`).classList.add('selected');

            const allButtons = 
            document.querySelectorAll('main.life button');
            const spinnerButtons = spinner.querySelectorAll('button');
            const cardButtons = cards.querySelectorAll('button');

            if (data.display === 'stream-none') {
                allButtons.forEach(button => {
                    button.classList.add('disabled');
                });
            } else if (data.display === 'stream-spinner') {
                spinnerButtons.forEach(button => {
                    button.classList.remove('disabled');
                });
                cardButtons.forEach(button => {
                    button.classList.add('disabled');
                });
            } else if (data.display === 'stream-cards') {
                cardButtons.forEach(button => {
                    button.classList.remove('disabled');
                });
                spinnerButtons.forEach(button => {
                    button.classList.add('disabled');
                });
            }
        }
        const greenScreen = document.querySelector('.green-screen');
        if (greenScreen) {
            if (data.display === 'stream-none') {
                spinner.classList.add('none');
                cards.classList.add('none');
            } else if (data.display === 'stream-spinner') {
                spinner.classList.remove('none');
                cards.classList.add('none');
            } else if (data.display === 'stream-cards') {
                spinner.classList.add('none');
                cards.classList.remove('none');
            }
        }
        
    }
    else if (data.current === 'spinner-spin') {
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

if (document.querySelector('.ez-calculator')) {
    const calcTotal = document.querySelector('#calc-total');

    const calcMoney = document.querySelector('#calc-money');
    const calcHeart = document.querySelector('#calc-heart');
    const calcBook = document.querySelector('#calc-book');
    const calcPig = document.querySelector('#calc-pig');
    const calcLoans = document.querySelector('#calc-loans');

    const crownHeart = document.querySelector('#crown-heart');
    const crownBook = document.querySelector('#crown-book');
    const crownPig = document.querySelector('#crown-pig');

    const calcItems = [calcMoney, calcHeart, calcBook, calcPig, calcLoans, crownHeart, crownBook, crownPig];

    calcItems.forEach(calc => {
        calc.addEventListener('change', () => {
            let cHeart = 0;
            let cBook = 0;
            let cPig = 0;

            if (crownHeart.checked) {
                cHeart = 400;
            } else if (!crownHeart.checked) {
                cHeart = 0;
            }
            if (crownBook.checked) {
                cBook = 400;
            } else if (!crownBook.checked) {
                cBook = 0;
            }
            if (crownPig.checked) {
                cPig = 400;
            } else if (!crownPig.checked) {
                cPig = 0;
            }

            const total = parseInt(calcMoney.value) + (parseInt(calcHeart.value) * 20) + (parseInt(calcBook.value) * 20) + (parseInt(calcPig.value) * 20) + (parseInt(calcLoans.value) * -100) + cHeart + cBook + cPig;
            if (!isNaN(total)) {
                calcTotal.textContent = total;
            } else {
                calcTotal.textContent = 0;
            }
        });
    });
}