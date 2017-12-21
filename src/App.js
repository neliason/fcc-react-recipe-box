import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe'

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
    ]
  }

  componentDidMount() {
    //load saved recipes
  }

  render() {
    return (
      <div className="App">
        {this.state.recipes.map(function (recipe, index) {
          console.log("receipe", recipe);
          return (
            <Recipe
              name={recipe.name}
              ingredients={recipe.ingredients}
              key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
