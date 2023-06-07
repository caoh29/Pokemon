import fetchPokemons from "@/api/pokeApi"
import Image from "next/image";

export default async function Home() {

	const data = await fetchPokemons();
	const pokemonsList = data.results.map((pokemon, index) => ({
		...pokemon,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
	}));

	return (
		<div>
			{pokemonsList.map((pokemon) => (
				<div key={pokemon.id}>
					<h1>#{pokemon.id} - {pokemon.name}</h1>
					<Image src={pokemon.image} width={0} height={0} alt={pokemon.name} style={{ width: 'auto', height: 'auto' }}/>
				</div>
			))}
		</div>
	)
}
