import { useEffect, useState } from 'react';

import axios from 'axios';

import Pokemon from "../pokemon/Pokemon";
import './PokemonList.css';
import PokemonInfo from '../pokemonInfo/PokemonInfo';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [nowUrl, setNowUrl] = useState(null);

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`);


  const onRequest = async () => {
    setLoading(true);

    const res = await axios.get(url);

    setNextUrl(res.data.next); // next
    setPrevUrl(res.data.previous); // previous
    getPokemon(res.data.results);

    console.log(res);

    setLoading(false);
  }

  const getPokemon = async (res) => {
    res.map(async(item) => {
      const result = await axios.get(item.url);
      setPokemonData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1:-1);
        return state;
      })
    })
  }

  useEffect(() => {
    onRequest();
  }, [url])

  return (
    <>
      <div className="container">
        <h1 className='container-title'>POKEDEX</h1>
        <div className="container-current">
          <button onClick={() => {
            setPokemonData([])
            setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`);
          }} className='btn'>10</button>

          <button onClick={() => {
            setPokemonData([])
            setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);
          }} className='btn'>20</button>

          <button onClick={() => {
            setPokemonData([])
            setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`);
          }} className='btn'>50</button>

        </div>
        <div className="container-pokemons">
          <PokemonInfo pokemon={pokemonData} loading={loading}/>
        </div>
        <div className='container-btn'>
          { prevUrl && <button className='btn' onClick={() => {
            setPokemonData([])
            setUrl(prevUrl)
          }}>Previous</button>}

          { nextUrl && <button className='btn' onClick={() => {
            setPokemonData([])
            setUrl(nextUrl)
          }}>Next</button>}
        </div>
      </div>
    </>
  )
}

export default PokemonList;