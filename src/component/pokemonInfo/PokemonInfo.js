import Pokemon from "../pokemon/Pokemon";

const PokemonInfo = ({pokemon, loading}) => {
  return (
    <>
      {
        loading ? <h1>Loading...</h1> : pokemon.map((item) => {
          return (
            <div key={item.id}>
              <Pokemon
                itemId={item.id}
                itemImg={item.sprites.front_default}
                itemName={item.name}
                itemType={item.types[0].type.name} />
            </div>
          )
        })
      }
    </>
  )
}

export default PokemonInfo;