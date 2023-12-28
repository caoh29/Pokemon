async function fetchPokemons() {
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const response = await fetch(`https://pokemon-backend-dg1j.onrender.com/api/pokemon`, { next: { revalidate: 60 } });
    if (!response.ok) throw new Error('Failed to fetch pokemons. Check logs');
    return response.json();
}

export default fetchPokemons;