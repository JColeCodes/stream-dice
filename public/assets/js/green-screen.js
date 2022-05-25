async function streamToggle(e) {
    e.preventDefault();

    if (document.body.style.backgroundColor === "lime") {
        document.body.style.backgroundColor = "#222";
    } else {
        document.body.style.backgroundColor = "lime";
    }
}

document.querySelector('.stream-toggle button').addEventListener('click', streamToggle);