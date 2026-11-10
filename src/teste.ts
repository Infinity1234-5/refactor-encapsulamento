import { ItemCardapio } from "./cardapio";

const suco: ItemCardapio = { //falta a categoria
    id: 4, nome: "suco de caju",
    preco_centavos: 750, categoria: "bebida"
};

const bolo: ItemCardapio = {
    id: 6, nome: "bolo", preco_centavos: 900,
    categoria: "lanche"  //categoria invalida
};

const cafe: ItemCardapio = {
    id: 7, nome: "café", preco_centavos: 400,
    categoria: "bebida", gelado: false // gelado n existe no interface
};