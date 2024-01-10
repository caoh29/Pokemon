// import fetchPokemonByName from "@/api/fetchPokemon";
// import fetchPokemons from "@/api/pokeApi";
import FavoritesButton from "@/components/Button/FavoritesButton";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import { capitalizeFirstLetter } from "@/lib/index";
import Image from "next/image";

// export async function generateStaticParams() {
//     const pokemons = await fetchPokemons();
//     return pokemons.map((pokemon) => ({
//         name: pokemon.name,
//     }));
// }

async function fetchPokemonByName(name) {
    const response = await fetch(`https://pokemon-backend-dg1j.onrender.com/api/pokemon/${name}`, { next: { revalidate: 60 } });
    const data = await response.json();
    const pokemon = {
        id: data._id,
        name: data.name,
        number: data.number,
        sprites: data.sprites
    };
    return pokemon;
}

export default async function PokemonInfo({ params }) {
    
    const { name } = params;
    const pokemon = await fetchPokemonByName(name);

    return (
        <div className="flex min-h-screen py-2 bg-black">
            <PokemonCard key={name} pokemonName={name} clickable={false}>
                <Image src={pokemon.sprites.other.dream_world.front_default} width={0} height={0} alt={name} className="w-52 h-52" />
            </PokemonCard>
            <div className="grid grid-cols-2 grid-rows-8 gap-2 items-center justify-items-start my-3.5 mx-auto w-9/12 h-64 bg-blue-100 p-3.5 text-center text-gray-700 font-bold text-xl border-2 border-blue-200 rounded-lg shadow-lg">
                <h1 className="col-span-1 row-span-1 self-start">{capitalizeFirstLetter(name)}</h1>
                <FavoritesButton pokemonId={pokemon.number} pokemonName={name} className="w-64 h-12 text-center self-start justify-self-end bg-slate-400 border-slate-950 border-4 cursor-pointer rounded p-2 hover:bg-white"/>
                <div className="col-span-2">
                    <p>Sprites:</p>
                    <div className="flex flex-wrap justify-center gap-10">
                        <Image src={pokemon.sprites.front_default} width={128} height={128} alt={name} className="w-44 h-44" />
                        <Image src={pokemon.sprites.back_default} width={128} height={128} alt={name} className="w-44 h-44" />
                        <Image src={pokemon.sprites.front_shiny} width={128} height={128} alt={name} className="w-44 h-44" />
                        <Image src={pokemon.sprites.back_shiny} width={128} height={128} alt={name} className="w-44 h-44" />
                    </div>
                </div>
            </div>
        </div>
    );
};