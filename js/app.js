
let cart={};
const pl=document.getElementById("productList");

products.forEach(p=>{
cart[p.id]=0;
pl.innerHTML+=`
<div class="product">
<img src="${p.img}">
<div>
<b>${p.name}</b><br>
₹${p.price} <s>₹${p.oldPrice}</s>
<div class="qty">
<button onclick="chg(${p.id},-1)">-</button>
<span id="q${p.id}">0</span>
<button onclick="chg(${p.id},1)">+</button>
</div>
</div>
</div>`;
});

function chg(id,d){
cart[id]=Math.max(0,cart[id]+d);
document.getElementById("q"+id).innerText=cart[id];
upd();
}

function upd(){
let i=0,t=0;
products.forEach(p=>{
i+=cart[p.id];
t+=cart[p.id]*p.price;
});
itemCount.innerText=i;
totalAmount.innerText=t;
}

function generateOrderImage(){
const c=document.createElement("canvas");
c.width=420;c.height=500;
const x=c.getContext("2d");
x.fillStyle="#fff";x.fillRect(0,0,c.width,c.height);
x.fillStyle="#000";
x.font="16px Arial";
x.fillText("KUKU Crackers – Order Estimate",10,30);
let y=60;
products.forEach(p=>{
if(cart[p.id]>0){
x.fillText(`${p.name} x ${cart[p.id]} = ₹${p.price*cart[p.id]}`,10,y);
y+=25;
}
});
x.fillText("Total: ₹"+totalAmount.innerText,10,y+20);
const img=c.toDataURL();
window.open("https://wa.me/919597013244?text="+encodeURIComponent("Order Image:\n"+img));
}
