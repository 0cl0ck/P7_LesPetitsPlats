import { recipesFactory } from "./factory/recipesFactory.js";

function displayRecipes(recipes) {
  const recipesSection = document.querySelector(".recipes-section");
  const cardsContainer = document.querySelector(".cards-container");

  recipes.forEach((recipe) => {
    const recipeModel = recipesFactory(recipe);
    const recipecardDOM = recipeModel.recipeCardDOM();
    cardsContainer.appendChild(recipecardDOM);
  });
}

function init() {
  displayRecipes(recipes);
}
init();
