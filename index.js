import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 41;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await response.json();
  cardContainer.innerHTML = "";
  data.results.forEach((character) => {
    const newCharacterCard = createCharacterCard(character);
    cardContainer.append(newCharacterCard);
  });
}
fetchCharacters();

prevButton.addEventListener("click", () => {
  console.log("prev-button clicked", page);
  if (page === 1) {
    return;
  }
  page--;
  fetchCharacters();
});
nextButton.addEventListener("click", () => {
  console.log("next-button clicked", page);
  if (page === maxPage) {
    return;
  }
  page++;
  fetchCharacters();
});
