import React from "react";
import PropTypes from "prop-types";

const Recipe = props =>
  <div className="recipe">
    <div className="recipe-name">
      <button>
        {props.name}
      </button>
    </div>
    <div className="ingredients">
      <div className="ingredients-title text-center">
        Ingredients
      </div>
      <div className="ingredients-list">
        {props.ingredients.map(function (ingredient, index) {
          return (
            <div className="ingredient" key={index}>
              {ingredient}
            </div>
          );
        })}
      </div>
    </div>
  </div>


Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired
}

export default Recipe;