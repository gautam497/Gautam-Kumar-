function shopNow(){
    document.getElementById("products").scrollIntoView({
        behavior:"smooth"
    });
}

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        alert("Product added to cart!");
    });
});
