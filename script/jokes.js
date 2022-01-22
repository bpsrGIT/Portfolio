const jokeElement = document.getElementById('joke-area')
const jokeBtn = document.getElementById('joke-btn')

const generateJoke = () => {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then((item) => item.json())
    .then((result) => {
        jokeElement.innerText = `"${result.joke}"`;
    })
}

jokeBtn.addEventListener('click', ()=> {
    generateJoke()
})