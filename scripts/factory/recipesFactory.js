// const recipesList = window.recipes;

export function recipesFactory(recipe) {
  const {
    id,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
  } = recipe;
  function recipecardDOM() {
    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.setAttribute("src", "./assets/img/test.svg");
    image.setAttribute("alt", "test");

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col");

    const card = document.createElement("div");
    card.classList.add("card");

    const card_body = document.createElement("div");
    card_body.classList.add("card-body");

    const header = document.createElement("header");
    header.classList.add("d-flex");
    header.classList.add("justify-content-between");

    const recipeTitle = document.createElement("h2");
    recipeTitle.innerText = name;

    const timeDiv = document.createElement("div");

    const icon_clock = document.createElement("i");
    icon_clock.classList.add("fa-regular");
    icon_clock.classList.add("fa-clock");

    const minute = document.createElement("span");
    minute.classList.add("time");
    minute.innerText = " " + time + " min";

    const recipeDescription = document.createElement("p");
    recipeDescription.innerText = description;

    // const ingredients = document.createElement("div");
    ingredients.map((ingredient) => {
      console.log(ingredient);
      let ingredientElement = document.createElement("li");
      let ingredientName = document.createElement("span");
      let ingredientQuantity = document.createElement("span");

      ingredientName.classList.add("ingredient-name");
      ingredientQuantity.classList.add("ingredient-quantity");

      // ingredientName.innerText = ingredients[i].ingredientElement;
      ingredientName.innerText = ingredient.ingredient;

      if (ingredient.quantity != undefined) {
        ingredientQuantity.innerText = ": " + ingredient.quantity;
      }

      if (ingredient.unit != undefined) {
        ingredientQuantity.innerText += " " + ingredient.unit;
      }

      ingredientElement.appendChild(ingredientName);
      ingredientElement.appendChild(ingredientQuantity);
      recipeDescription.appendChild(ingredientElement);
    });

    timeDiv.appendChild(icon_clock);
    timeDiv.appendChild(minute);

    header.appendChild(recipeTitle);
    header.appendChild(timeDiv);

    card.appendChild(image);
    card.appendChild(header);
    card.appendChild(recipeDescription);

    cardContainer.appendChild(card);
    return cardContainer;
  }
  return { recipecardDOM };
}
