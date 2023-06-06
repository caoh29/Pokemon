async function fetchPokemons() {

    const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    return await pokeApi.json();
}

export default fetchPokemons;