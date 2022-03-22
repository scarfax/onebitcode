const pilotName = prompt("Qual o nome do piloto?");

let speed = 0;

speed = prompt("Qual a velocidade que gostaria de acelerar a nave?");

let SpeedConfirmation = confirm(
  `Sua velociade irá para ${speed} Km/s. \nVocê confirma?`
);

if (SpeedConfirmation == false) {
  speed = prompt("Qual a nova velocidade de aceleração?");
}

if (speed < 0) {
  alert("Nave está parada. Considere partir e acerar a velociade");
} else if (speed < 40) {
  alert("Você está devagar. Podemos aumentar mais");
} else if (speed < 80) {
  alert("Parece uma boa velociade para manter");
} else if (speed < 100) {
  alert("Velociade alta. Considere diminuir");
} else {
  alert("Velociade perigosa. Controle automático forçado");
}

alert(`O piloto ${pilotName} está viajando na velocidade de ${speed} Km/s`);
