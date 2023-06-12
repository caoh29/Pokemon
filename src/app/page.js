import fetchPokemons from "@/api/pokeApi"
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import Image from "next/image";

export default async function Home() {

	const data = await fetchPokemons();
	const pokemonsList = data.results.map((pokemon, index) => ({
		...pokemon,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
	}));

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}


	return (
		<div className="flex flex-wrap items-center justify-items-center justify-center min-h-screen py-2">
			{pokemonsList.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemonName={pokemon.name} clickable={true}>
					<h1 className="text-xl text-center font-bold my-2">#{pokemon.id} - {capitalizeFirstLetter(pokemon.name)}</h1>
					<Image src={pokemon.image} width={0} height={0} alt={pokemon.name} className="w-44 h-44"/>
				</PokemonCard>
			))}
		</div>
	)
}
