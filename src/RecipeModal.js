import React, { Component } from 'react';
import PropTypes from "prop-types";
import ReactModal from 'react-modal';

export default class RecipeModal extends Component {
  
  state = {
    recipeName: "",
    recipeIngredientsString: ""
  }

  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    primaryButtonText: PropTypes.string.isRequired,
    recipeName: PropTypes.string,
    recipeIngredientArray: PropTypes.array.isRequired,
    recipeIndex: PropTypes.number
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  handleAfterOpen() {
    const ingredientString = this.props.recipeIngredientArray === [] ? "" : this.props.recipeIngredientArray.join(", ");
    this.setState({
      recipeName: this.props.recipeName,
      recipeIngredientsString: ingredientString
    })
  }

  onNameChange = (event) => {
    const recipeName = event.target.value;
    this.setState({ recipeName: recipeName });
  }

  onIngredientsChange = (event) => {
    const ingredientString = event.target.value;
    this.setState({ recipeIngredientsString: ingredientString })
  }

  handleCloseModal= (event) => {
    if (event) event.preventDefault();
    this.setState({
      recipeIngredientsString: "",
      recipeName: ""
    });
    this.props.handleCloseModal();
  }

  onSubmit = (primaryButtonText) => {
    //if (event) event.preventDefault();
    const ingredientArray = this.state.recipeIngredientsString.split(",").map(s => s.trim());
    if (!this.state.recipeName.match(/^\s*$/)) {
      if (primaryButtonText === "Add Recipe")
        this.props.onAdd(this.state.recipeName, ingredientArray);
      else
        this.props.onEdit(this.props.recipeIndex, this.state.recipeName, ingredientArray);
    }
    this.setState({ 
      recipeName: '',
      recipeIngredientsString: ''
    });
    this.props.handleCloseModal();
  };

  render() {
    return (
      <ReactModal
        isOpen={this.props.showModal} 
        className="TheModal"
        overlayClassName="Overlay"
        onAfterOpen={this.handleAfterOpen.bind(this)}
      >
        <div className="the-modal">
          <div className="modal-title bold">
            Add a Receipe
          </div>
          <form onSubmit={() => this.onSubmit(this.props.primaryButtonText)}>
            <div className="modal-recipe-name">
              <div className="bold">Recipe</div>
              <input 
                type="text" 
                className="modal-recipe-name-input" 
                onChange={this.onNameChange}
                value={this.state.recipeName}
                placeholder="Recipe Name" />
            </div>
            <div className="modal-ingredients-input">
              <div className="bold">Ingredients</div>
              <textarea
                className="modal-textarea"
                onChange={this.onIngredientsChange}
                value={this.state.recipeIngredientsString}
                placeholder="Enter Ingredients, separated, by, commas" />
            </div>
            <div className="modal-buttons">
              <input type="submit" value={this.props.primaryButtonText} className="btn btn-primary btn-md" />
              <button className="btn btn-md btn-default" onClick={this.handleCloseModal}>Close</button>
            </div>
          </form>
        </div>
      </ReactModal>
    );
  }

}