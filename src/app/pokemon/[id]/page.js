import fetchPokemonById from "@/api/fetchPokemon";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import Image from "next/image";

export default async function PokemonInfo(props) {
    
    const pokemon = await fetchPokemonById(props.params.id);
    const pokemonName = pokemon.name;

    return (
        <div className="flex min-h-screen py-2">
            <PokemonCard key={pokemon.id} pokemonId={pokemon.id} clickable={false}>
                <Image src={pokemon.sprites.other.dream_world.front_default} width={0} height={0} alt={pokemonName} className="w-52 h-52" />
            </PokemonCard>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 items-center justify-items-start my-3.5 mx-auto w-9/12 h-64 bg-blue-100 p-3.5 text-center text-gray-700 font-bold text-xl border-2 border-blue-200 rounded-lg shadow-lg">
                <h1 className="col-span-1 row-span-1 self-start">{pokemonName}</h1>
                <button className="self-start justify-self-end bg-slate-400">Add to Favorites</button>
                <div className="col-span-2">
                    <p>Sprites:</p>
                    <div className="flex flex-wrap justify-center">
                        <img src={pokemon.sprites.front_default} width={0} height={0} alt={pokemonName} className="w-52 h-52" />
                        <img src={pokemon.sprites.back_default} width={0} height={0} alt={pokemonName} className="w-52 h-52" />
                        <img src={pokemon.sprites.front_shiny} width={0} height={0} alt={pokemonName} className="w-52 h-52" />
                        <img src={pokemon.sprites.back_shiny} width={0} height={0} alt={pokemonName} className="w-52 h-52" />
                    </div>
                </div>
            </div>
        </div>
    );
};