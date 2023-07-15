const socket = io(); // SOCKET.IO

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
    const cardStack = document.querySelector('.card-stack');
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
    const cardBottom = document.querySelector('.card.bottom');
    cardBottom.addEventListener('click', e => {
        e.preventDefault();

        let cardInfoA = 0;
        let cardInfoB = 0;
        const typeID = cardStack.dataset.type;

        if (cardStack.querySelector('.left').classList.contains('flip')) {
            if (typeID === 'career') {
                cardInfoA = randomize(0, 20);
                cardInfoB = randomize(0, 20);

                while (cardInfoA === cardInfoB) {
                    cardInfoB = randomize(0, 20);
                }
            }
            else if (typeID === 'house') {
                cardInfoA = randomize(0, 10);
                cardInfoB = randomize(0, 10);

                while (cardInfoA === cardInfoB) {
                    cardInfoB = randomize(0, 10);
                }
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

    const cardLeft = document.querySelector('.card.left');
    cardLeft.addEventListener('click', e => {
        e.preventDefault();
        socket.emit('life', {
            current: 'card-left-select'
        });
    });

    const cardRight = document.querySelector('.card.right');
    cardRight.addEventListener('click', e => {
        e.preventDefault();
        socket.emit('life', {
            current: 'card-right-select'
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