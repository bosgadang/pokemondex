import axios from "axios";

class CardData extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
      .then((response) => {
        const pokemon = response;
        console.log(pokemon);
        this._pokemon = pokemon;

        this.render();
      })
      .catch((response) => {
        console.log("gagal");
      });
  }

  render() {
    this.shadowDOM.innerHTML = `<h1>${this._pokemon.data.name}</h1>`;
  }
}

customElements.define("card-data", CardData);
