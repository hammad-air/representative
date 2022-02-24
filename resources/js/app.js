import axios from "axios";
import Noty from 'noty'

let addToCart = document.querySelectorAll(".add-to-cart");
let cartCounter = document.querySelector("#cartCounter")
function updateCart(pizza) {
    axios.post('/update-cart', pizza).then(res => {
      console.log(res);
   cartCounter.innerText = res.data.totalQty;
   new Noty({
   text: "Product added to the cart",
   type: 'success',
   timeout: 500
  }).show();
  }).catch(err =>{
    new Noty({
      text: "Something Went wrong",
      type: 'error',
      timeout: 1000
   }).show();
  })
}
addToCart.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let pizza = JSON.parse(btn.dataset.pizza);
    updateCart(pizza)
  });
});