import fetchPokemons from "@/api/pokeApi"

export default async function Home() {

	const data = await fetchPokemons();
	const pokemonNameList = data.results.map((pokemon) => pokemon.name);

	return (
		<div>
			{pokemonNameList.map((pokemon) => <h1 key={pokemon}>{pokemon}</h1>)}
		</div>
	)
}
