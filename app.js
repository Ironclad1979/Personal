
/* DAD JOKE API */
const jokes = document.querySelector('#jokes');
const button = document.querySelector('#dadJokeButton');


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    jokes.innerText = jokeText;
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json', } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "Sorry No Jokes right now."
    }
}
button.addEventListener('click', addNewJoke)

/* DAD JOKE API */


