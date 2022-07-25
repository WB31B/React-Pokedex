import { useHttp } from "../hooks/http.hook"

const usePokemonService = () => {
  const {request} = useHttp();

  // const _apiBase = 'https://pokeapi.co/api/v2/pokemon';
  const _apiBase = 'https://pokeapi.co/api/v2/pokemon/';
  // const _baseOffset = 10;

  const getAllPokemons = async () => {
    const responce = await request(`${_apiBase}/`);
    return responce.results;
  }

  return {getAllPokemons}
}

export default usePokemonService;