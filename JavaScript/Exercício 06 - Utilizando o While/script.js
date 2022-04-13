let warpCount = 0;
let chosenOpition = "";

let spaceShip = prompt("Digite o nemo da nave");

chosenOpition = prompt("Deseja entrar em dobra espacial?\n \n1. Sim \n2. Não");

while (chosenOpition == "1") {
  warpCount += 1;
  chosenOpition = prompt(
    "Deseja realizar a próxima dobra?\n \n1. Sim \n2. Não"
  );
}

alert("Nave: " + spaceShip + "\nQuantidade de dobras: " + warpCount);
