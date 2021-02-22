export const getProgrammingJoke = async () => {
    return fetch(
        "https://sv443.net/jokeapi/v2/joke/Programming?format=txt&type=single"
    ).then((response) => response.text());
};
