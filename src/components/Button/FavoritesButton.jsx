"use client";

import confetti from "canvas-confetti";
import { useState } from "react";

const ADDED_TEXT = "Remove from Favorites";
const NOT_ADDED_TEXT = "Add to Favorites";


export default function FavoritesButton(props) {

    const getFavorites = () => JSON.parse(localStorage.getItem("favorites") || "[]");

    const existsInFavorites = (id) => {
        const favorites = getFavorites();
        return favorites.includes(id);
    }

    const [isAdded, setIsAdded] = useState(existsInFavorites(props.pokemonId));

    const toggleFavorites = (pokemonId) => {
        let favorites = getFavorites();
        if ( favorites.includes(pokemonId) ) {
            favorites = favorites.filter(id => id !== pokemonId);
            setIsAdded(false);
        } else {
            favorites.push(pokemonId);
            confetti({
                zIndex: 9999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: { x: 1, y: 0 }
            });
            setIsAdded(true);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    return (
        <button onClick={() => toggleFavorites(props.pokemonId)} className={props.className}>{isAdded ? ADDED_TEXT : NOT_ADDED_TEXT}</button>
    );
};