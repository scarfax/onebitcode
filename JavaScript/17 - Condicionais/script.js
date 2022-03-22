let velocity = 130;

if (velocity < 40) {
  console.log("Velocidade baixa");
} else if (velocity <= 100) {
  console.log("Estamos na velocidade sujerida");
} else {
  console.log("Velociade de risco");
}

// operador ternario
velocity > 100
  ? console.log("Velociade acima do permitido")
  : console.log("Velociade normal");
