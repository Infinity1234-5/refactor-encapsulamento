// legado/o-js-deixou-passar.js · quatro defeitos. Ache sem rodar.
const xBurguer = { nome: "x-burguer", preco: 18.9 };
console.log(xBurguer.preco * 2);

function total(preco: number, quantidade: number) {
  return preco * quantidade;
}
console.log(total(18.9, 2));

function criarItem(nome: string, quantidade: number) {
  return { nome: nome, quantidade: quantidade };
}
console.log(criarItem("suco de caju", 2));

const cardapio = [{ nome: "x-burguer", preco: 18.9 }];
// const pedido = cardapio.find((item) => item.nome === "x-burguer");
// console.log(pedido?.nome);
