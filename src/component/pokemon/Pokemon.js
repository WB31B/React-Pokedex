import './Pokemon.css';

const Pokemon = ({itemId, itemImg, itemName, itemType}) => {

  const style = `pokemon ${itemType}`

  return (
    <div className={style} >
      <h2 className='pokemon-id'>#{itemId}</h2>
      <div className="pokemon__info">
        <img className='pokemon-image' src={itemImg} alt={itemName} />
        <h2 className='pokemon-name'>{itemName}</h2>
        <p className='pokemon-type'>Type: {itemType}</p>
      </div>
    </div>
  )
}

export default Pokemon;