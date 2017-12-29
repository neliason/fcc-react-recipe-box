import React, { Component } from 'react';
import PropTypes from "prop-types";
import ReactModal from 'react-modal';

/*
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    
  }
}; */

export default class AddRecipeForm extends Component {

  state = {
    recipeName: '',
    recipeIngredientsString: '',
    recipeIngredientsArray: []
  }

  static propTypes = {
      showModal: PropTypes.bool.isRequired,
      handleCloseModal: PropTypes.func.isRequired
  }

  onNameChange = (e) => {
    const recipeName = e.target.value;
    this.setState({ recipeName: recipeName });
  }

  onIngredientsChange = (e) => {
    const ingredientString = e.target.value;
    //var ingredientArray = ingredientString.split(",").trim();
    //this.setState({ recipeIngredients: ingredientArray }); 
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.showModal} 
        //style={customStyles}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="add-modal">
          <div className="add-title">
            Add a Receipe
          </div>
          <div className="add-recipe-input">
            Recipe<br />
            <input type="text" />
          </div>
          <div className="add-ingredients-input">
            Ingredients<br />
            <textarea />
          </div>
          <div className="add-modal-buttons">
            <button className="btn btn-primary btn-md">Add Recipe</button>
            <button className="btn btn-md" onClick={this.props.handleCloseModal}>Close</button>
          </div>
        </div>
      </ReactModal>
    );
  }

}