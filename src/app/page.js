import fetchPokemons from "@/api/pokeApi"
import Image from "next/image";

export default async function Home() {

	const data = await fetchPokemons();
	const pokemonNameList = data.results.map((pokemon) => pokemon.name);
	const pokemonUrlList = data.results.map((pokemon) => pokemon.url);

	const pokemonImageList = await Promise.all(pokemonUrlList.map(async (pokemonUrl) => {
		const response = await fetch(pokemonUrl);
		const data = await response.json();
		return data.sprites.other.dream_world.front_default;
	}));

	return (
		<div>
			{pokemonNameList.map((pokemon, index) => (
				<>
					<h1 key={pokemon}>#{index + 1} - {pokemon}</h1>
					<Image src={pokemonImageList[index]} width={200} height={200} key={index} alt={pokemon} />
				</>
			))}
		</div>
	)
}
