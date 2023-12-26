"use client";

import { useState, useEffect } from "react";

import fetchPokemons from "@/api/pokeApi"
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import Image from "next/image";
import { capitalizeFirstLetter } from "@/lib/index";


export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [pokemonsList, setPokemonsList] = useState([]);

	useEffect(() => {
		const updatePokemons = async () => {
			const data = await fetchPokemons();
			const pokemons = data.map((pokemon) => ({
				...pokemon,
				//_id: index + 1,
				//image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
				image: pokemon.sprites.other.dream_world.front_default,
			}));
			setPokemonsList(pokemons);
			setIsLoading(false);
		}
		updatePokemons();
	}, [pokemonsList])


	if (isLoading) return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-xl">Loading...</h1>
		</div>
	);

	return (
		<div className="flex flex-wrap items-center justify-items-center justify-center min-h-screen py-2">
			{pokemonsList.map((pokemon) => (
				<PokemonCard key={pokemon._id} pokemonName={pokemon.name} clickable={true}>
					<h1 className="text-xl text-center font-bold my-2">#{pokemon.number} - {capitalizeFirstLetter(pokemon.name)}</h1>
					<Image src={pokemon.image} width={0} height={0} alt={pokemon.name} className="w-44 h-44"/>
				</PokemonCard>
			))}
		</div>
	)
}

// THIS IMPLEMENTATION IS TO USE REACT SERVER COMPONENTS
// WHAT THIS DOES IS THAT IT FETCHES THE DATA FROM THE API ON THE SERVER DURING BUILD TIME
// IF SOMETHING CHANGES IN THE DB IT IS NOT CHANGING IN THE SERVER, 
// SOMEHOW WE NEED TO REVALIDATE THE DATA AFTER A CHANGE OCCURS IN THE DB BECAUSE THE USER COULD BE RECEIVING OUTDATED HTML

// import fetchPokemons from "@/api/pokeApi"
// import PokemonCard from "@/components/PokemonCard/PokemonCard";
// import { capitalizeFirstLetter } from "@/lib/index";
// import Image from "next/image";

// export default async function Home() {

// 	const data = await fetchPokemons();
// 	const pokemonsList = data.map((pokemon, index) => ({
// 		...pokemon,
// 		// _id: index + 1,
// 		// image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
// 		image: pokemon.sprites.other.dream_world.front_default,
// 	}));

// 	return (
// 		<div className="flex flex-wrap items-center justify-items-center justify-center min-h-screen py-2">
// 			{pokemonsList.map((pokemon) => (
// 				<PokemonCard key={pokemon._id} pokemonName={pokemon.name} clickable={true}>
// 					<h1 className="text-xl text-center font-bold my-2">#{pokemon.number} - {capitalizeFirstLetter(pokemon.name)}</h1>
// 					<Image src={pokemon.image} width={0} height={0} alt={pokemon.name} className="w-44 h-44"/>
// 				</PokemonCard>
// 			))}
// 		</div>
// 	)
// }
