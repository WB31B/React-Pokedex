import React, { useEffect, useState } from "react";

import axios from "axios";

import "./PokemonList.css";
import PokemonInfo from "../pokemonInfo/PokemonInfo";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const [filterPokemon, setFilterPokemon] = useState("");

  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`
  );

  const getPokemon = async (res) => {
    // const data = [];
    res.map(async (item) => {
      const result = await axios.get(item.url);

      setPokemonData((state) => {
        const newState = [...state, result.data].sort((a, b) =>
          a.id > b.id ? 1 : -1
        );
        return newState;
      });
    });
  };

  const onRequest = async () => {
    setLoading(true);

    const res = await axios.get(url);

    setNextUrl(res.data.next); // next
    setPrevUrl(res.data.previous); // previous
    getPokemon(res.data.results);

    setLoading(false);
  };

  // Filter
  const filterPokemons = pokemonData.filter((pokemon) => {
    return pokemon.name.includes(filterPokemon.toLowerCase());
  });

  useEffect(() => {
    onRequest();
    setUrl(null);
  }, [url]);

  return (
    <div className="container">
      <h1 className="container-title">POKEDEX</h1>
      <div className="container-current">
        <button
          type="button"
          onClick={() => {
            setPokemonData([]);
            setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`);
          }}
          className="btn"
        >
          10
        </button>

        <button
          type="button"
          onClick={() => {
            setPokemonData([]);
            setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);
          }}
          className="btn"
        >
          20
        </button>

        <button
          type="button"
          onClick={() => {
            setPokemonData([]);
            setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`);
          }}
          className="btn"
        >
          50
        </button>
      </div>
      <div className="container-search">
        <form className="container-form">
          <input
            onChange={(e) => setFilterPokemon(e.target.value)}
            type="text"
            placeholder="Search..."
          />
        </form>
      </div>
      <div className="container-pokemons">
        <PokemonInfo pokemon={filterPokemons} loading={loading} />
      </div>
      <div className="container-btn">
        {prevUrl && (
          <button
            type="button"
            className="btn"
            onClick={() => {
              setPokemonData([]);
              setUrl(prevUrl);
            }}
          >
            Previous
          </button>
        )}

        {nextUrl && (
          <button
            type="button"
            className="btn"
            onClick={() => {
              setPokemonData([]);
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

// PokemonList.defaultProps = {
//   getPokemon: () => {},
// };

// PokemonList.propTypes = {
//   getPokemon: PropTypes.func,
// };

export default PokemonList;
