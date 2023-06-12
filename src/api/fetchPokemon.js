async function fetchPokemonByName(name) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await response.json();
}

export default fetchPokemonByName;