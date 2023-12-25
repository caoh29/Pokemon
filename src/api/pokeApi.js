async function fetchPokemons() {

    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const response = await fetch(`https://pokemon-backend-dg1j.onrender.com/api/pokemon`);
    return await response.json();
    
}

export default fetchPokemons;