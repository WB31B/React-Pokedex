import React from "react";
import PropTypes from "prop-types";

import "./Pokemon.css";

function Pokemon({ itemId, itemImg, itemName, itemType }) {
  const style = `pokemon ${itemType}`;

  return (
    <div className={style}>
      <h2 className="pokemon-id">#{itemId}</h2>
      <div className="pokemon__info">
        <img className="pokemon-image" src={itemImg} alt={itemName} />
        <h2 className="pokemon-name">{itemName}</h2>
        <p className="pokemon-type">Type: {itemType}</p>
      </div>
    </div>
  );
}

Pokemon.defaultProps = {
  itemId: 0,
  itemImg: "",
  itemName: "",
  itemType: "",
};

Pokemon.propTypes = {
  itemId: PropTypes.number,
  itemImg: PropTypes.string,
  itemName: PropTypes.string,
  itemType: PropTypes.string,
};

export default Pokemon;
