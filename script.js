
const pokemon = document.getElementById("pokemon");
const id = document.getElementById("input0");
const sexo = document.getElementById("sexo");
const shiny = document.getElementById("shiny");
const lado = document.getElementById("lado");
const pkmnome = document.getElementById("pkmnome");
const fetchpokemon = async (id) => {
  const request = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`
  );
  const data = await request.json();
  let imagem;
  pokemon.style.display = "Block";
  pkmnome.textContent = data.name;
  if (id === "") {
    alert("Escreva o numero do pokemon que deseja buscar!");
  } else if (
    sexo.value == "femea" &&
    lado.value == "frente" &&
    shiny.value == "normal"
  ) {
    imagem = data.sprites.front_female;
    if (data.sprites.front_female == null) {
      alert(`o pokemon ${data.name} nao possui uma forma femea`);
      imagem = data.sprites.front_default;
    }
  } else if (
    sexo.value == "femea" &&
    lado.value == "costa" &&
    shiny.value == "normal"
  ) {
    imagem = data.sprites.back_female;
    if (data.sprites.back_female == null) {
      alert(`o pokemon ${data.name} nao possui uma forma femea`);
      imagem = data.sprites.back_default;
    }
  } else if (
    sexo.value == "femea" &&
    lado.value == "frente" &&
    shiny.value == "shiny"
  ) {
    imagem = data.sprites.front_shiny_female;
    if (data.sprites.front_shiny_female == null) {
      alert(`o pokemon ${data.name} nao possui uma forma femea`);
      imagem = data.sprites.front_shiny;
    }
  } else if (
    sexo.value == "femea" &&
    lado.value == "costa" &&
    shiny.value == "shiny"
  ) {
    imagem = data.sprites.back_shiny_female;
    if (data.sprites.back_shiny_female == null) {
      alert(`o pokemon ${data.name} nao possui uma forma femea`);
      imagem = data.sprites.back_shiny;
    }
  } else if (
    sexo.value == "macho" &&
    lado.value == "costa" &&
    shiny.value == "normal"
  ) {
    imagem = data.sprites.back_default;
  } else if (
    sexo.value == "macho" &&
    lado.value == "frente" &&
    shiny.value == "normal"
  ) {
    imagem = data.sprites.front_default;
  } else if (
    sexo.value == "macho" &&
    lado.value == "costa" &&
    shiny.value == "shiny"
  ) {
    imagem = data.sprites.back_shiny;
  } else if (
    sexo.value == "macho" &&
    lado.value == "frente" &&
    shiny.value == "shiny"
  ) {
    imagem = data.sprites.front_shiny;
  }
  pokemon.src = imagem;
};
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  fetchpokemon(id.value);
});
document.addEventListener("DOMContentLoaded", function () {
  pokemon.style.display = "none";
});
