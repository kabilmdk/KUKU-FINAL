
const defaultProducts=[
{id:1,name:"Lakshmi Crackers",price:60,oldPrice:150,img:"images/p.png"},
{id:2,name:"Flower Pots",price:120,oldPrice:300,img:"images/p.png"}
];

const products = JSON.parse(localStorage.getItem("products")) || defaultProducts;
