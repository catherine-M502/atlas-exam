import { countries } from "./data.js";
import { Country } from "./Country.js";
//render();
let cleanArray = [];
async function getcountries() {
  const reponse = await fetch("https://restcountries.com/v3.1/all");
  const countryArray = await reponse.json();
  //pour voir les données
  console.log(countryArray);
  /*userArray.name.forEach((e) => {
    cleanArray.push({
      name: {
        name: e.name.commun,
      },
      flag: {
        flag: e.flag,
      },
      population: {
        population: e.population,
      },
      subregion: {
        subregion: e.subregion,
      },
      maps: {
        mapssubregion: e.maps.openStreet,
      },
    });
  });
  console.log(cleanArray);
*/
  /*
async function getcountries() {
  const countryName = "El Salvador";
  const reponse = await fetch(
    "https://restcountries.com/v3.1/name/${countryName}"
  );
  const countryArray = await reponse.json();
  //pour voir les données
  console.log(countryArray);
}


*/

  const form = document.getElementById("country-form");
  const input = document.getElementById("country-input");
  const resultsDiv = document.getElementById("results");
  //sélectionner le bouton search
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    //si on clique sur le bouton, alors on affiche les pays
    const country = input.value;
    const countryName = countryArray.name.common;
    const countryFlag = countryArray.flag;
    const countryPopulation = countryArray.population;
    const countryRegion = countryArray.region;
    const countryMaps = countryArray.maps.openStreet;
    const countryCard = document.createElement("div");
    countryCard.classList.add("country--card");
    countryCard.innerHTML = `
    <p>${countryName}</p>
    <div class="country--card">
          <h1>${countryName}</h1>
          <p>population: ${countryPopulation} years old</p>
          <p>region: ${countryRegion}</p>
      </div>
      <a class="country--map" href="https://www.openstreetmap.ord/relation/${countryMaps}" target="blank">
          <span class='map'>✉️</span>
      </a>
      </div>`;
    resultsDiv.appendChild(countryCard);
  });

  //  formulaire
  form.addEventListener("submit", async function (event) {
    // Empêche rechargement de la page
    event.preventDefault();

    // entrée utilisateur
    const country = input.value;
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    // Affichez les résultats dans la div des résultats
    resultsDiv.innerHTML = JSON.stringify(data, null, 2);
  });
  //console.log(cleanArray);*/

  countryArray.forEach((e) => {
    const user = new Country(e);
    user.render();
  });
}
getcountries();
