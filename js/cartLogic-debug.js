let cartBody = document.querySelector(".cart-body");
let productsInCartLocalStorageString = localStorage.getItem("productsInCart");
let productsInCartLocalStorageJson = JSON.parse(
  productsInCartLocalStorageString
);
let itemNumber = document.querySelectorAll(".item-number-cart");
let cartNumber = document.querySelector(".cart-head span");
let cartTotal = document.querySelector(".iscart .cart-total")
let itemNumberFavorite = document.querySelectorAll(".item-number-favorite");
// let itemNumberFavorite = document.querySelectorAll(".item-number-favorite");
let subTotal = document.querySelector(".subtotal p strong");
// let productsDom = document.querySelector("table tbody");
// let cartTable = document.getElementById("cart-table");
let input = document.getElementById("value");
let noProductsDomCartMenu = document.querySelector(".mini-cart .no-products")
// add to favorite
let favoriteItem = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];
// Function to get total price
function plural(total) {
  let number = 0;
  for (let i = 0; i < total.length; i++) {
    number += total[i];
  }
  return number;
}
// add to cart
let addedItems;
let addedItem = productsInCartLocalStorageString
  ? productsInCartLocalStorageJson
  : [];
// addedItem save in local storage
(addedItems = function (addedItem) {
  if (addedItem) {
    addedItem.forEach((item) => {
      cartBody.innerHTML += `
      <ul class="products mini">
        <li class="item">
          <div class="thumbnail object-cover">
            <a onclick="saveItemData(${item.id})"><img src="${item.imgUrl}" alt="${item.title}"></a>
          </div>
          <div class="item-content">
            <p><a onclick="saveItemData(${item.id})">${item.title}</a></p>
            <span class="price">
              <span>$${item.price}</span>
              <span class="fly-item"><span>${item.qty}x</span></span>
            </span>
          </div>
          <a onclick="removeFromCart(${item.id})" class="item-remove"><i class="ri-close-line"></i></a>
        </li>
      </ul>`;
    });
  }
  // ???
  for (let i = 0; i < itemNumber.length; i++) {
    itemNumber[i].innerHTML = addedItem.length;
  }
  if (addedItem.length === 0) {
    noProductsDomCartMenu.classList.add("show");
  } else {
    noProductsDomCartMenu.classList.remove("show");
  }
  for (let i = 0; i < itemNumberFavorite.length; i++) {
    itemNumberFavorite[i].innerHTML = favoriteItem.length;
  }
  cartNumber.innerHTML = addedItem.length;
  let total = [];
  addedItem.map((i) => total.push(i.price));
  subTotal.innerHTML = "$" + Math.round(plural(total));
  cartTotal.innerHTML = "$" + Math.round(plural(total));
})(addedItem);
// remove from cart
function removeFromCart(id) {
  if (addedItem) {
    addedItem = addedItem.filter((item) => item.id !== id);
    addedItems = function (addedItem) {
      if (addedItem) {
        cartBody.innerHTML = ""
        addedItem.map((item) => {
          cartBody.innerHTML += `
          <ul class="products mini">
          <li class="item">
          <div class="thumbnail object-cover">
          <a onclick="saveItemData(${item.id})"><img src="${item.imgUrl}" alt="${item.title}"></a>
              </div>
              <div class="item-content">
                <p><a onclick="saveItemData(${item.id})">${item.title}</a></p>
                <span class="price">
                  <span>$${item.price}</span>
                  <span class="fly-item"><span>${item.qty}x</span></span>
                </span>
              </div>
              <a onclick="removeFromCart(${item.id})" class="item-remove"><i class="ri-close-line"></i></a>
            </li>
          </ul>`;
        });
      }
      // ???
      for (let i = 0; i < itemNumber.length; i++) {
        itemNumber[i].innerHTML = addedItem.length;
      }
      if (addedItem.length === 0){
        noProductsDomCartMenu.classList.add("show")
    }else{
      noProductsDomCartMenu.classList.remove("show")
    }
    cartNumber.innerHTML = addedItem.length
      let total = []
      addedItem.map((i)=> total.push(i.price))
      subTotal.innerHTML = "$" + Math.round(plural(total))
      cartTotal.innerHTML = "$" + Math.round(plural(total))

    }
    addedItems(addedItem)
    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
  }
}
function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "./page-single.html";
}