async function fetchPokemonByName(name) {
    const response = await fetch(`https://pokemon-backend-dg1j.onrender.com/api/pokemon/${name}`);
    const data = await response.json();
    const pokemon = {
        id: data._id,
        name: data.name,
        number: data.number,
        sprites: data.sprites
    };
    return pokemon;
}

export default fetchPokemonByName;