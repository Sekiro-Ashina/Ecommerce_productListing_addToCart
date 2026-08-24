document.addEventListener("DOMContentLoaded", function(){

     const Products = [ //how will be new product will be added here without manually typing?
        {id:1, name:"ZeroToOne", price:12.49},
        {id:2, name:"Dumbell", price:23.34},
        {id:3, name:"Hoodie" , price:11.99},
    ];

    const productList = document.querySelector("#products-list");
    const cartItems = document.querySelector("#cart-items");
    const emptyCartMessage = document.querySelector("#empty-cart");
    const cartTotal = document.querySelector("#cart-total");
    const totalPrice = document.querySelector("#total-price");
    const checkOutBtn = document.querySelector("#checkout-btn");

   

    //you can understand product as an array which sole purpose is to store all the product details, then we simply loop over it and push to array according to the product which is clicked.
    const cart = []; //why another array? 

    Products.forEach((item) =>{ //item is only looping on each object present in array it gives you whole object not the data inside it, to access data you have to enter it, like you go the whole object of the product index 0 now you can do product.name etc. Wrong Item is not only looping each loop item have the whole product item so product.name is wrong, now item is the one whos representing the product so item.name.
        const productDiv = document.createElement('div');
        productDiv.classList.add("product");
        productDiv.innerHTML = `
        <span>Name: ${item.name}  -  $${item.price.toFixed(2)}</span>
        <button data-id="${item.id}"> Add To Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    // //so we are creating Div for each product object we will loop through each product objects present in product array and we create one div for each of the product. And inside that div we will have two things: 1. Product name and product price. Apart from them 1 atc button. But why dont we create one button only, suppose there are three product and you have only 1 atc button then how will you know which product to add? That's why each button for each seperate product and how will you know which Button got clicked? You have to give a unique id for each product-button, that we already have in produc array.


});