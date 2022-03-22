let nameOld = prompt("Qual o nome da pessoa mais velha?");
let ageOld = prompt("Qual a idade da pessoa mais velha?");
let nameYoung = prompt("Qual o nome da pessoa mais jovem?");
let ageYoung = prompt("Qual a idade da pessoa mais jovem?");

let ageDifference = ageOld - ageYoung;

alert(
  "A diferença de idade entre " +
    nameOld +
    " e " +
    nameYoung +
    " é de " +
    ageDifference +
    " anos" +
    "\n\nPessoa mais velha: " +
    nameOld +
    " tem " +
    ageOld +
    " anos" +
    "\n\nPessoa mais nova: " +
    nameYoung +
    " tem " +
    ageYoung +
    " anos"
);
