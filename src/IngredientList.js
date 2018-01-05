import React from "react";
import PropTypes from "prop-types";

const IngredientList = props =>
  <div className="ingredients-list">
    <table>
      <tbody>
        {props.ingredients.map(function (ingredient, index) {
          return (
            <tr key={index}>
              <td className="ingredient">{ingredient}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired
}

export default IngredientList;