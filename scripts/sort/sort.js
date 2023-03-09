import { recipesFactory } from "../factory/recipesFactory.js";

/* Recherche des Cards */
const searchBar = document.getElementById("searchBar");

function filterRecipes(searchedLetters, recipes) {
  clearCards();
  const filteredRecipes = recipes.filter((recipe) => {
    // Check if the query matches the recipe name or description
    if (
      recipe.name.toLowerCase().includes(searchedLetters.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchedLetters.toLowerCase())
    ) {
      console.log(recipe.description);
      return true;
    }
    // const ingredientMatch = recipe.ingredients.some((ingredient) =>
    //   ingredient.toLowerCase().includes(searchedLetters.toLowerCase())
    // );
    // return ingredientMatch;
  });
  console.log(filteredRecipes);

  filteredRecipes.forEach((recipe) => {
    const recipeModel = recipesFactory(recipe);
    const recipecardDOM = recipeModel.recipeCardDOM();

    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(recipecardDOM);
  });
}

function clearCards() {
  const cardsContainer = document.querySelector(".cards-container");
  const cards = cardsContainer.querySelectorAll(".card");

  cards.forEach((card) => {
    if (cardsContainer.contains(card)) {
      cardsContainer.removeChild(card);
    }
  });
}

searchBar.addEventListener("keyup", (e) => {
  const searchedLetters = e.target.value;
  const cards = document.querySelectorAll(".card");

  // findCard(searchedLetters, cards);
  filterRecipes(searchedLetters, recipes);
});

// recipes.forEach((recipe) => {
//   const recipeModel = recipesFactory(recipe);
//   const recipecardDOM = recipeModel.recipeCardDOM();
//   containerRow.appendChild(recipecardDOM);
// });

// function findCard(searchedLetters, cards) {
// if (searchedLetters.length > 200) {
//   const cardsContainer = document.querySelector(".cards-container");
//   cardsContainer.querySelectorAll(".col-4").forEach((card) => {
//     card.remove();
//   });
// }
// }

// function findCard(searchedLetters, cards) {
//   if (searchedLetters.length > 1) {
//     const regex = new RegExp(searchedLetters, "gi");
//     const cardsArray = Array.from(cards);
//     cardsArray.sort((cardA, cardB) => {
//       const cardAText = cardA
//         .querySelector(".card-title")
//         .textContent.toLowerCase();
//       const cardBText = cardB
//         .querySelector(".card-title")
//         .textContent.toLowerCase();
//       const matchA = cardAText.match(regex);
//       const matchB = cardBText.match(regex);
//       if (matchA && !matchB) {
//         return -1;
//       }
//       if (matchB && !matchA) {
//         return 1;
//       }
//       if (
//         cardAText.indexOf(searchedLetters) < cardBText.indexOf(searchedLetters)
//       ) {
//         return -1;
//       }
//       if (
//         cardAText.indexOf(searchedLetters) > cardBText.indexOf(searchedLetters)
//       ) {
//         return 1;
//       }
//       return 0;
//     });
//     const container = document.querySelector(".cards-container");
//     cardsArray.forEach((card) => {
//       container.appendChild(card);
//     });
//   }
// }

/*Récupération des Appareils, recettes et ustensiles */

// const applianceInput = document.getElementById("appliance-input");
// console.log(recipes);

// applianceInput.addEventListener("keyup", (e) => {
//   const searchedLetters = e.target.value;
//   let test = recipes.filter(function (element) {
//     for (let i = 0; i < element.appliance.length; i++) {
//       if (element.appliance[i] === "Four") {
//         console.log(element.appliance[i]);
//       }
//     }
//     console.log(searchedLetters);
//     console.log(test);
//   });
// });

// let allAppliances = [];

// function findAppliance(searchedLetters, recipes) {
//   if (searchedLetters.length > 1) {
//     for (let i = 0; i < recipes[i].length; i++) {
//       if (recipes[i].innerHTML.toLowerCase().includes(searchedLetters)) {
//         console.log("ouagadoudou");
//       }
//       let appliance = recipes[i].appliance;
//       allAppliances.push(appliance);
//       console.log(appliance);
//     }
//   }
// }

// function findAppliance(searchedLetters, recipes) {
//   if (searchedLetters.length > 1) {
//     const filteredRecipes = recipes.filter((recipe) =>
//       recipe.appliance.toLowerCase().includes(searchedLetters)
//     );
//     const filteredCards = document.querySelectorAll(".card");
//     filteredCards.forEach((card) => {
//       const recipeId = card.dataset.id;
//       const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId));
//       if (filteredRecipes.includes(recipe)) {
//         card.style.display = "block";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   }
// }
