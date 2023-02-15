// const recipesList = window.recipes;

export function recipesFactory(recipe) {
  function recipecardDOM() {
    const h2 = document.createElement("h2");
    h2.innerHTML = recipe.name;
    return h2;
  }
  return { recipecardDOM };
}
