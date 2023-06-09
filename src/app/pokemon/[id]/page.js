'use client';

import fetchPokemonById from "@/api/fetchPokemon";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


export default function PokemonInfo () {

    const pathName = usePathname();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function getPokemonData() {
            const pokemonData = await fetchPokemonById(pathName);
            setPokemon(pokemonData);
        }
        getPokemonData();
    }, [pathName]);


    return (
        <div>
            <h1>Name: {pokemon && pokemon.name}</h1>
            <h1>Weight: {pokemon && pokemon.weight}</h1>
        </div>
    );
}