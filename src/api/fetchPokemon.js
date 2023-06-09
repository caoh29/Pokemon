async function fetchPokemonById(id) {

    const response = await fetch(`https://pokeapi.co/api/v2${id}`);
    return await response.json();
}

export default fetchPokemonById;