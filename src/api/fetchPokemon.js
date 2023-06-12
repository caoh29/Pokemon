async function fetchPokemonByName(name) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    const pokemon = {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    };
    return pokemon;
}

export default fetchPokemonByName;