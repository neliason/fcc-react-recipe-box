import React from "react";
import PropTypes from "prop-types";
import Collapsible from 'react-collapsible';
import IngredientList from "./IngredientList";

const Recipe = props =>
  <Collapsible trigger={props.name} transitionTime={200}>
    <div className="recipe">
      <div className="ingredients">
        <div className="ingredients-title text-center">
          Ingredients
        </div>
        <IngredientList
          ingredients={props.ingredients} 
        />
      </div>
      <div className="recipe-buttons">
          <button 
            className="btn btn-md btn-danger"
            onClick={props.onRemove}  
          >
            Delete
          </button>
          <button
            className="btn btn-md btn-default"
            onClick={props.onEdit}
          >
            Edit
          </button>
      </div>
    </div>
  </Collapsible>


Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Recipe;