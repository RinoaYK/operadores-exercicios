//Parte 1

console.log("5 é maior que 20 e também é menor que 2?");
const op01 = 5 > 20 && 5 < 2;
console.log(op01);
console.log(" ");

console.log("5 é igual a 5 ou é igual a “5”?");
const op02 = 5 === 5 || 5 === "5";
console.log(op02);
console.log(" ");

console.log("negação de (vinte é maior que cinquenta)?");
const op03 = !20>50;
console.log(op03);
console.log(" ");

console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)?");
const op04 = !(20>50 || 50>60);
console.log(op04);
console.log(" ");

//Parte 2

const nome = prompt("Qual o seu nome?");
const sobrenome = prompt("Qual o seu sobrenome?");
const diaNas = Number(prompt("Que dia vc nasceu?"));
const mesNas = Number(prompt("Que mês vc nasceu?"));
const anoNas = Number(prompt("Que ano vc nasceu?"));
const end = prompt("Qual o seu endereço?");
const cpf = Number(prompt("Qual o seu cpf?"));
const escolariedade = prompt("Qual sua escolariedade?");

let cnh;
if (confirm("Vc tem CNH?") == true) {
    text = cnh = Number(prompt("Qual seu CNH?"))}
else {cnh = "Não possui."};
    
let filhos;
if (confirm("Vc tem filhos") == true) {
    text = filhos = Number(prompt("Quantos filhos vc tem?"))}
else {filhos = 0};


const cargo = prompt("Qual seu cargo atual?");
const salario = Number(prompt("Qual o seu salário atual? R$ "));

let comis;
if (confirm("Vc ganha comissão?") == true) {
    text = comis = Number(prompt("Quantos %?"))}
else {comis = 0};

const anoAdm = Number(prompt("Qual o ano de admissão?"));

console.log(nome, "O tipo de variável é:", typeof nome);
console.log(sobrenome, "O tipo de variável é:", typeof sobrenome);
console.log(diaNas, "O tipo de variável é:",  typeof diaNas);
console.log(mesNas, "O tipo de variável é:",  typeof mesNas);
console.log(anoNas, "O tipo de variável é:",  typeof anoNas);
console.log(end, "O tipo de variável é:",  typeof end);
console.log(cpf, "O tipo de variável é:",  typeof cpf);
console.log(escolariedade, "O tipo de variável é:",  typeof escolariedade);
console.log(cnh, "O tipo de variável é:",  typeof cnh);
console.log(filhos, "O tipo de variável é:",  typeof filhos);
console.log(cargo, "O tipo de variável é:",  typeof cargo);
console.log(salario, "O tipo de variável é:",  typeof salario);
console.log(comis, "O tipo de variável é:",  typeof comis);
console.log(anoAdm, "O tipo de variável é:",  typeof anoAdm);
console.log(" ");

console.log("Nome completo: ",nome,sobrenome);
console.log("Data de nascimento: ", diaNas,"/",mesNas,"/",anoNas);
console.log("Endereço: ",end);
console.log("CPF: ",cpf);
console.log("Escolariedade: ",escolariedade);
console.log("CNH número: ",cnh);
console.log("Filhos: ",filhos);
console.log("Cargo atual: ",cargo);
console.log("Salário: R$",salario);
console.log("Comissão de ",comis,"%");
console.log("Ano de admissão: ",anoAdm);
console.log(" ");

console.log("Auxílio creche por filho: R$45,50");
const auxCre = 45.50 * filhos;
console.log("O valor do auxílio creche é de: R$",auxCre);
console.log(" ");

//Se comissão:
const comisT = ((salario * comis)/100);
const salarioT = comisT + auxCre + salario;

//Comissão de 10% sobre o total de vendas mensal:
const comJan = 5784.50 * 0.10;
const comFev = 3418.41 * 0.10; 
const comMar = 4124.10 * 0.10;
const comAb = 1874 * 0.10;
const comMai = 7000 * 0.10;
const comJun = 9450 * 0.10;

console.log(nome,sobrenome,"receberá de comissão em janeiro: R$",comJan,", obtendo um total de: R$", (salarioT+comJan).toFixed(2));
console.log(" ");

console.log(nome,sobrenome,"o desconto de 5% do INSS será de: R$",((salarioT+comJan)* 0.05).toFixed(2),"recebendo um total de: R$", ((salarioT+comJan)-((salarioT+comJan)* 0.05)).toFixed(2),"de salário em janeiro.");
console.log(" ");

console.log("Cálculo do salário de todos os meses com acréscimos e descontos:");
const comJanT = (salarioT+comJan)-((salarioT+comJan)* 0.05);
const comFevT = (salarioT+comFev)-((salarioT+comFev)* 0.05); 
const comMarT = (salarioT+comMar)-((salarioT+comMar)* 0.05);
const comAbT = (salarioT+comAb)-((salarioT+comAb)* 0.05);
const comMaiT = (salarioT+comMai)-((salarioT+comMai)* 0.05);
const comJunT = (salarioT+comJun)-((salarioT+comJun)* 0.05);
console.log(
"- Janeiro: R$ 5.784,50, a comissão é: R$", (comJan).toFixed(2),"\n, o salário será de: R$",(comJanT).toFixed(2),
"\n- Fevereiro: R$ 3.418,41, a comissão é: R$",(comFev).toFixed(2),"\n, o salário será de: R$",(comFevT).toFixed(2),
"\n- Março: R$ 4.124,10, a comissão é: R$",(comMar).toFixed(2),"\n, o salário será de: R$",(comMarT).toFixed(2),
"\n- Abril: R$ 1.874,00, a comissão é: R$",(comAb).toFixed(2),"\n, o salário será de: R$",(comAbT).toFixed(2),
"\n- Maio: R$ 7.000,00, a comissão é: R$",(comMai).toFixed(2), "\n, o salário será de: R$",(comMaiT).toFixed(2),
"\n- Junho: R$ 9.450,00, a comissão é: R$",(comJun).toFixed(2),"\n, o salário será de: R$",(comJunT).toFixed(2),);
console.log(" ");

const medSalario = (comJanT + comFevT + comMarT + comAbT + comMaiT + comJunT)/6;

console.log("A média do salário em seis meses (de janeiro a junho), levando em consideração as comissões e auxílio, é de: R$",(medSalario).toFixed(2));
