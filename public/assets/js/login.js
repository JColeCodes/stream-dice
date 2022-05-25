async function diceLogin(event) {
    event.preventDefault();

    const secretCode = document.querySelector('#secret-code').value.trim().toUpperCase();
    
    if (secretCode) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                secretCode
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(response.body);

        if (response.ok) {
            
            // document.location.replace('/dice');
        } else {
            console.log('no!');
        }
    }
}

document.querySelector('.login').addEventListener('submit', diceLogin);