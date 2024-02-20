// show modal on load
window.onload = function () {
  document.querySelector(".site").classList.toggle("show-modal");
};
document.querySelector(".modal-close").addEventListener("click", function () {
  document.querySelector(".site").classList.remove("show-modal");
});
// cart draw
let noProductsDomCheckOut = document.querySelector(".no-products.CheckOut")
let productsDom = document.querySelector(".products.mini.cartCheckOut")
productsDom.innerHTML = ""
function drawCartProductsUI(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsInCart")).length === 0) {
    noProductsDomCheckOut.classList.add("show")
  }
  let productTrendingMiniOne =
    JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
  let productsUI = productTrendingMiniOne.map((item) => {
    return`
    <li class="item">
    <div class="thumbnail object-cover">
      <img src="${item.imgUrl}" alt="${item.title}" />
    </div>
    <div class="item-content">
      <p>${item.title}</p>
      <span class="price"><span>$${item.price}</span><span>x ${item.qty}</span></span>
    </div>
  </li>`
  });
  productsDom.innerHTML = productsUI.join("");
}
drawCartProductsUI()


// Function to get total price
let subTotal2 = document.querySelector(".summary-totals ul li:first-child span:nth-child(2)")
let subTotal3 = document.querySelector(".summary-totals ul li:last-child span:nth-child(2)")
function plural(total) {
  let number = 0;
  for (let i = 0; i < total.length; i++) {
    number += total[i];
  }
  return number;
}
let total = [];
addedItem.map((i) => total.push(i.price));
subTotal2.innerHTML = "$" + Math.round(plural(total));
subTotal3.innerHTML = "$" + Math.round(plural(total));