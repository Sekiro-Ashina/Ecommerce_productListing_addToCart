document.addEventListener("DOMContentLoaded", function(){
    const productList = document.querySelector(".product-list");
    const cartItems = document.querySelector(".cart-items");
    const emptyCartMessage = document.querySelector(".empty-cart");
    const cartTotal = document.querySelector(".cart-total");
    const totalPrice = document.querySelector(".total-price");
    const checkOutBtn = document.querySelector(".checkout-btn");

    const Product = [ //how will be new product will be added here without manually typing?
        {id:Date.now(), name:"ZeroToOne", price:12.49},
        {id:Date.now(), name:"Dumbell", price:23.34},
        {id:Date.now(), name:"Hoodie" , price:11.99},
    ];

    const cart = []; //why another array? 






})