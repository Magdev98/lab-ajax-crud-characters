/**
 * You might want to use this template to display each new characters
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#examples
 */
const characterTemplate = document.getElementById("template");
const displayAllCharacters = document.querySelector(".characters-container");

/**
 * Create an instance of axios
 */
const characterApi = axios.create({
  baseURL: "http://localhost:5005/api/characters/",
});

const myUrl = "http://localhost:5005/api/";

const fetchAllBtn = document.getElementById("fetch-all");

/* Create a button (_Fetch all_ in the image above) which when clicked, 
will trigger a function that will handle the request. 
The function will return a JSON object with all the characters. => already in the routes.js */

fetchAllBtn.addEventListener("click", fetchAllCharacters);

async function fetchAllCharacters() {
  displayAllCharacters.innerHTML = "";
  try {
    // Get the data and show the characters.
    const { data } = await axios.get(`${myUrl}characters`);
    for (const character of data) {
      createCharacter(character);
    }
  } catch (error) {
    console.error(error);
  }
}


//Finally, with JavaScript, we will create a structure similar to a card (image above) to show detailed info about each character.
function createCharacter(element) {
  const clone = characterTemplate.content.cloneNode(true);
  clone.querySelector(".character-id span").textContent = element._id;
  clone.querySelector(".name span").textContent = element.name;
  clone.querySelector(".occupation span").textContent = element.occupation;
  clone.querySelector(".cartoon span").textContent = element.cartoon;
  clone.querySelector(".weapon span").textContent = element.weapon;
  displayAllCharacters.append(clone);
}

const fetchOneCharacter = document
  .getElementById("fetch-one")
  .addEventListener("click", function (event) {});

const deleteOneCharacter = document
  .getElementById("delete-one")
  .addEventListener("click", function (event) {});

const editCharacter = document
  .getElementById("edit-character-form")
  .addEventListener("submit", function (event) {});

const createNewCharacter = document
  .getElementById("new-character-form")
  .addEventListener("submit", function (event) {});
