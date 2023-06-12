async function fetchPokemons() {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    return await response.json();
    
}

export default fetchPokemons;