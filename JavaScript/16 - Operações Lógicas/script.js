let spaceship = "Elemental";
let velocity = 20;

console.log(spaceship.length == 9 && velocity > 15); // V e V = V
console.log(velocity > 9 && velocity < 19); //  V e F = F
console.log(velocity < 17 && spaceship == "Elemental"); //  F e V = F
console.log(velocity > 21 && spaceship == "Golias"); //  F e F = F

console.log(spaceship.length == 9 || velocity > 15); // V ou V = V
console.log(velocity > 9 || velocity < 19); //  V ou F = V
console.log(velocity < 17 || spaceship == "Elemental"); //  F ou V = V
console.log(velocity > 21 || spaceship == "Golias"); //  F ou F = F

console.log(!(velocity > 19)); // Não V = F
console.log(!(spaceship == "Golias")); // Não F = V

console.log(
  !(velocity > 25 && spaceship == "Elemental") ||
    (velocity - 3 == 17 && spaceship.length + 1 > 15)
); // !(F) || (F) = V || F = V
