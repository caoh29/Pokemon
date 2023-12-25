async function fetchPokemons() {

    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const response = await fetch(`http://localhost:4000/api/pokemon`);
    return await response.json();
    
}

export default fetchPokemons;