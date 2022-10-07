import axios from "axios";

class CardData extends HTMLElement {
  constructor() {
    super();

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
      .then((response) => {
        const pokemon = response;
        console.log(pokemon);
      })
      .catch((response) => {
        console.log("gagal");
      });
    this.render();
  }

  render() {
    this.innerHTML = `<h1>${pokemon.data.name}</h1>`;
  }
}

customElements.define("card-data", CardData);
