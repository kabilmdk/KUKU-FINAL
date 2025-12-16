
let products = JSON.parse(localStorage.getItem("products")) || [];

const list=document.getElementById("adminList");

function render(){
list.innerHTML="";
products.forEach((p,i)=>{
list.innerHTML+=`
<div class="admin-card">
<b>${p.name}</b><br>
₹${p.price} <s>₹${p.oldPrice}</s><br>
<button onclick="edit(${i})">Edit</button>
<button onclick="del(${i})">Delete</button>
</div>`;
});
localStorage.setItem("products",JSON.stringify(products));
}

function addProduct(){
products.push({
id:Date.now(),
name:name.value,
price:+price.value,
oldPrice:+oldPrice.value,
img:img.value||"images/p.png"
});
render();
}

function del(i){
products.splice(i,1);
render();
}

function edit(i){
const p=products[i];
name.value=p.name;
price.value=p.price;
oldPrice.value=p.oldPrice;
img.value=p.img;
products.splice(i,1);
render();
}

render();
