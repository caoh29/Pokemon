'use client';

import PokemonCard from "@/components/PokemonCard/PokemonCard";
import Image from "next/image";

export default function Favorites() {

	const getFavorites = () => {
		if (typeof window !== "undefined") {
			return JSON.parse(localStorage.getItem("favorites"));
		}
		return [];
	}

	const favorites = getFavorites();
	
	if (favorites.length === 0) return <h1>No Favorites </h1>;

	
	return (
		<div className="flex flex-wrap gap bg-black">
			{favorites.map((pokeId) => (
				<PokemonCard key={pokeId} pokemonName={pokeId} clickable={true}>
					<Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`} width={0} height={0} alt={`Pokemon ${pokeId} image`} className="w-52 h-52" />
				</PokemonCard>
			))}
		</div>
	);

}