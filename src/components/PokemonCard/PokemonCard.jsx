'use client';

import { useRouter } from 'next/navigation'

export default function PokemonCard(props) {

    const router = useRouter()

    function clickHandler() {
        router.push(`/name/${props.pokemonName}`);
    };

    const className = `grid grid-cols-1 justify-items-center my-3.5 mx-auto w-64 h-64 bg-blue-100 p-3.5 text-center text-gray-700 font-bold text-xl border-2 border-blue-200 rounded-lg shadow-lg ${props.clickable ? 'cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300' : ''}`;

    return (
        <div onClick={props.clickable ? clickHandler : null} className={className}>
            {props.children}
        </div>
    );
}