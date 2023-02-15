import { recipesFactory } from "./factory/recipesFactory.js";
console.log(recipes);

function displayRecipes(recipes) {
  const recipesSection = document.querySelector(".recipes-section");
  recipes.forEach((recipe) => {
    const recipeModel = recipesFactory(recipe);
    const recipecardDOM = recipeModel.recipecardDOM();
    recipesSection.appendChild(recipecardDOM);
  });
}

function init() {
  displayRecipes(recipes);
}
init();
