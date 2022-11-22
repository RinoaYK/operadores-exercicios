let num01 = Number(prompt("Insira um número: "));
let num02 = Number(prompt("Insira outro número: "));

console.log("O número",num01,"é maior que o número", num02+"?");
console.log(num01 > num02);
console.log(" ");

console.log("O número", num01,"é igual ao número",num02+"?");
console.log(num01 === num02);
console.log(" ");

console.log("O número", num01, "é divisível pelo número", num02+"?");
console.log("O resto da divisão é:", num01%num02);
const resto1 = num01%num02===0;
console.log(resto1);
console.log(" ");

console.log("O número", num02, "é divisível pelo número",num01+"?");
console.log("O resto da divisão é:", num02%num01);
const resto2 = num02%num01===0;
console.log(resto2);

//divisível = com resto zero
//Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
