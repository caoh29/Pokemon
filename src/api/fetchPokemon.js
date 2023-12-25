async function fetchPokemonByName(name) {

    const response = await fetch(`http://localhost:4000/api/pokemon/${name}`);
    const data = await response.json();
    const pokemon = {
        id: data._id,
        name: data.name,
        sprites: data.sprites
    };
    return pokemon;
}

export default fetchPokemonByName;