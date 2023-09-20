export async function fetchJoke()
{
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    });

    return await response.json();
}

