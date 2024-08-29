"use client";
import { useParams } from "next/navigation";
import React from "react";
import "./poke.css";

interface PokemonDetail {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
    abilities: {
        ability: {
            name: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    types: {
        type: {
            name: string;
        };
    }[];
}

export default function Page() {
    const params = useParams<{ name: string }>();
    const [pokemonDetail, setPokemonDetails] = React.useState<PokemonDetail | null>(null);

    React.useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
                const data: PokemonDetail = await res.json();
                setPokemonDetails(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchPokemonDetails();
    }, [params.name]);

    if (!pokemonDetail) return <p>Loading...</p>;

    return (
        <div className="pokemon-container">
            <h1 className="pokemon-name">{pokemonDetail.name}</h1>
            <img 
                src={pokemonDetail.sprites.front_default} 
                alt={pokemonDetail.name} 
                className="pokemon-image" 
            />
            <p className="pokemon-detail">Height: {pokemonDetail.height}</p>
            <p className="pokemon-detail">Weight: {pokemonDetail.weight}</p>
            <p className="pokemon-section-title">Abilities</p>
            <ul className="pokemon-list">
                {pokemonDetail.abilities.map((ability, index) => (
                    <li key={index} className="pokemon-list-item">{ability.ability.name}</li>
                ))}
            </ul>
            <p className="pokemon-section-title">Stats</p>
            <ul className="pokemon-list">
                {pokemonDetail.stats.map((stat, index) => (
                    <li key={index} className="pokemon-list-item">{stat.stat.name} : {stat.base_stat}</li>
                ))}
            </ul>
            <p className="pokemon-section-title">Types</p>
            <ul className="pokemon-list">
                {pokemonDetail.types.map((type, index) => (
                    <li key={index} className="pokemon-list-item">{type.type.name}</li>
                ))}
            </ul>
        </div>
    );
}