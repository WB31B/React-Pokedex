import './Pokemon.css';

const Pokemon = ({pokemon, loading}) => {
  return (
    <>
      {
        loading ? <h1>Loading...</h1> : pokemon.map((item) => {
          return (
            <>
              <div className='pokemon'>
                <h2 className='pokemon-id'>#{item.id}</h2>
                <div className="pokemon__info">
                  <img className='pokemon-image' src={item.sprites.front_default} alt="" />
                  <h2 className='pokemon-name'>{item.name}</h2>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Pokemon;