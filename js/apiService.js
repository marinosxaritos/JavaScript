export const loadJoke = async () => {
    try {
        const randomJokeFetch = await fetch('https://official-joke-api.appspot.com/random_joke', {
            headers: {
                Accept: "application/json"
            }
        })

        const jokeData = await randomJokeFetch.json();
        document.getElementById('loadingJoke').innerHTML = `
        <p><strong>${jokeData.setup}</strong></p>
        <p>${jokeData.punchline}</p>
        `;

    } catch (error) {
        console.log(error)
    }
}

