let spaceship = prompt("Digite o nome da nave");

let invertedName = "";

for (let i = spaceship.length - 1; i >= 0; i--) {
  if (spaceship[i] == "e") {
    break;
  }
  invertedName += spaceship[i];
}

alert("Nome da Nave: " + spaceship + "\nNome após ocultação: " + invertedName);
