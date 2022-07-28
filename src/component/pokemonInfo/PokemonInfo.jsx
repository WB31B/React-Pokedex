import React from "react";
import PropTypes from "prop-types";

import Pokemon from "../pokemon/Pokemon";

function PokemonInfo({ pokemon, loading }) {
  return loading === true ? (
    <h1>Loading</h1>
  ) : (
    pokemon.map((item) => {
      return (
        <div key={item.id}>
          <Pokemon
            itemId={item.id}
            itemImg={item.sprites.front_default}
            itemName={item.name}
            itemType={item.types[0].type.name}
          />
        </div>
      );
    })
  );
}

PokemonInfo.defaultProps = {
  pokemon: [],
  loading: false,
};

PokemonInfo.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.number,
      itemImg: PropTypes.string,
      itemName: PropTypes.string,
      itemType: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};

export default PokemonInfo;
