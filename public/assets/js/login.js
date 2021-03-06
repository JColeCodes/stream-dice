async function diceLogin(e) {
    e.preventDefault();

    const secretCode = document.querySelector('#secret-code').value.trim().toUpperCase();
    
    if (secretCode) {
        document.location.replace('/' + secretCode);
    }
}

document.querySelector('.login').addEventListener('submit', diceLogin);