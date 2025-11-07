
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};


const finalPrice = product.price * (1 - product.discount / 100);


const productCard = `
<div class="product-card">      
    <h2>${product.name}</h2> 
    <p>giá gốc:${product.price}</p>   
    <p>Giá: ${finalPrice} VND</p>
    <p>${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
</div>
`; 

console.log(productCard); 