export class Country {
  constructor(information) {
    this.information = information;
    this.element = this.generateElement()();
  }
  //méthode pour générer un élément HTML
  generateElement() {
    const containerElement = document.createElement("div");
    containerElement.classList.add("country--card");

    const childHtml = `
    <p>${this.information.location.city}</p>
    <div class="country--card">
          <h1>${this.information.name.common}</h1>
          <p>population: ${this.information.population} years old</p>
          <p>region: ${this.information.region}</p>
      </div>
      <a class="country--map" href="https://www.openstreetmap.ord/relation/${this.information.area}" target="blank">
          <span class='map'>✉️</span>
      </a>
      </div>`;
    containerElement.insertAdjacentHTML("afterbegin", childHtml);

    return containerElement; // Retourne l'élément généré.
  }

  render() {
    const main = document.querySelector("main");
    main.insertAdjacentElement("afterbegin", this.element);
    //s'il y a une erreur.
    if (this.information.status === 404)
      main.insertAdjacentText("afterbegin", "Couldn’t find country");
  }
}
