import fetchPokemonByName from "@/api/fetchPokemon";
import FavoritesButton from "@/components/Button/FavoritesButton";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import Image from "next/image";

export default async function PokemonInfo(props) {
    
    const pokemon = await fetchPokemonByName(props.params.name);
    const pokemonName = pokemon.name;

    return (
        <div className="flex min-h-screen py-2">
            <PokemonCard key={pokemonName} pokemonName={pokemonName} clickable={false}>
                <Image src={pokemon.sprites.other.dream_world.front_default} width={0} height={0} alt={pokemonName} className="w-52 h-52" />
            </PokemonCard>
            <div className="grid grid-cols-2 grid-rows-8 gap-2 items-center justify-items-start my-3.5 mx-auto w-9/12 h-64 bg-blue-100 p-3.5 text-center text-gray-700 font-bold text-xl border-2 border-blue-200 rounded-lg shadow-lg">
                <h1 className="col-span-1 row-span-1 self-start">{pokemonName}</h1>
                <FavoritesButton pokemonId={pokemon.id} pokemonName={pokemonName} className="w-64 h-12 text-center self-start justify-self-end bg-slate-400 border-slate-950 border-4 cursor-pointer rounded p-2 hover:bg-white"/>
                <div className="col-span-2">
                    <p>Sprites:</p>
                    <div className="flex flex-wrap justify-center gap-10">
                        <Image src={pokemon.sprites.front_default} width={128} height={128} alt={pokemonName} className="w-44 h-44" />
                        <Image src={pokemon.sprites.back_default} width={128} height={128} alt={pokemonName} className="w-44 h-44" />
                        <Image src={pokemon.sprites.front_shiny} width={128} height={128} alt={pokemonName} className="w-44 h-44" />
                        <Image src={pokemon.sprites.back_shiny} width={128} height={128} alt={pokemonName} className="w-44 h-44" />
                    </div>
                </div>
            </div>
        </div>
    );
};