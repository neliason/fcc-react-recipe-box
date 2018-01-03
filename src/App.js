import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe';
import AddRecipeForm from './AddRecipeForm';
import MyModal from './MyModal';

class App extends Component {

  state = {
    recipes: [
      {
        name: "Chicken Noodle Soup",
        ingredients: [
          "chicken",
          "noodles",
          "water"
        ]
      },
      {
        name: "Macaroni and Cheese",
        ingredients: [
          "noodles",
          "cheese powder",
          "milk",
          "butter"
        ]
      }
    ],
    showModal: false,
    modalSubmitButtonText: "Add Recipe",
    modalRecipeName: 'test',
    modalRecipeIngredients: ["hi"]
  }

  componentDidMount() {
    //load saved recipes
  }

  onAddRecipe = (name, ingredients) => {
    this.state.recipes.push({ name: name, ingredients: ingredients });
    this.setState(this.state);
  }

  onRemoveRecipe = (index) => {
    this.state.recipes.splice(index, 1);
    this.setState(this.state);
  }

  onEditRecipe = (index) => {
    var name = this.state.recipes[index].name;
    var ingredients = this.state.recipes[index].ingredients;
    this.handleOpenModal("Edit Recipe", name, ingredients);
  }

  handleOpenModal = (modalSubmitButtonText, name, ingredients) =>
    this.setState({
      modalSubmitButtonText: modalSubmitButtonText,
      modalRecipeName: name,
      modalRecipeIngredients: ingredients,
      showModal: true
    });

  handleCloseModal = () =>
    this.setState({ showModal: false });


  render() {
    return (
      <div className="App">
        <div className="recipes">
          {this.state.recipes.map(function (recipe, index) {
            return (
              <Recipe
                name={recipe.name}
                ingredients={recipe.ingredients}
                onRemove={() => this.onRemoveRecipe(index)}
                onEdit={() => this.onEditRecipe(index)}
                key={index} />
            );
          }.bind(this))}
        </div>
        <MyModal 
          showModal={this.state.showModal} 
          handleCloseModal={this.handleCloseModal}
          onAdd={this.onAddRecipe} 
          primaryButtonText={this.state.modalSubmitButtonText}
          recipeName={this.state.modalRecipeName}
          recipeIngredientArray={this.state.modalRecipeIngredients} />
        {/*
        <AddRecipeForm 
          showModal={this.state.showModal} 
          handleCloseModal={this.handleCloseAddModal}
          onAdd={this.onAddRecipe} />
        */}
        <button 
          className="add-recipe-btn btn-primary btn btn-lg"
          onClick={() => this.handleOpenModal("Add Recipe", "", [])}>
          Add Recipe
        </button>
      </div>
    );
  }
}

export default App;
