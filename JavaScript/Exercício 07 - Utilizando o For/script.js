let spaceShip = prompt("Digite o nome da nave");
let letter = prompt("Qual caracter deseja substituir?");
let newLetter = prompt("Qual o novo caracter?");

let newSpaceShip = "";

for (let pos = 0; pos < spaceShip.length; pos++) {
  if (spaceShip[pos] == letter) {
    newSpaceShip += newLetter;
  } else {
    newSpaceShip += spaceShip[pos];
  }
}

alert("O novo nome da nave é " + newSpaceShip);
