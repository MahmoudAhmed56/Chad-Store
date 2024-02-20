let productsMiniOneDom = document.querySelector(".products.main.flexWrap");
let productsMiniTowDom = document.querySelector(".row.products.mini.tow");
let cartBody = document.querySelector(".cart-body");
let cartHead = document.querySelector(".cart-head span");
let itemNumber = document.querySelectorAll(".item-number-cart");
let productsInCartLocalStorageString = localStorage.getItem("productsInCart");
let productsInCartLocalStorageJson = JSON.parse(
  productsInCartLocalStorageString
);
let products = productTrendingMiniTow;

// show products in page
let drawProductsUI;
(drawProductsUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
        <div class="item">
        <div class="media">
          <div class="thumbnial object-cover">
            <a href="#">
              <img
                src="${item.imgUrl}"
                alt="apparel1"
              />
            </a>
          </div>
          <div class="hover-able">
            <ul>
              <li class="active">
                <a class="cart" onclick="addedToFavorite(${
                  item.id
                })"><i class="ri-heart-${
      item.liked == true ? "fill" : "line"
    }"></i></a>
              </li>
              <li>
                <a class="cart" href="#"><i class="ri-eye-line"></i></a>
              </li>
              <li>
                <a  class="cart" onclick="addedToCart(${
                  item.id
                })"><i class="ri-shopping-cart-line"></i></a>
              </li>
            </ul>
          </div>
          <div class="discount circle flexCenter">
            <span>32%</span>
          </div>
        </div>
        <div class="content">
          <h3 class="main-links">
            <a onclick="saveItemData(${item.id})">${item.title}</a>
          </h3>
          <div class="rating">
            <div class="stars"></div>
            <span class="mini-text">(${item.reviewsCount})</span>
          </div>
          <div class="price">
            <span class="current">$${item.price}</span>
            <span class="normal mini-text">$${item.priceDashed}</span>
          </div>
          <div class="mini-text">
            <p>${item.Sold} Sold</p>
            <p>Free Shipping</p>
          </div>
        </div>
      </div>
        `;
  });
  productsMiniOneDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

// addedItem save in local storage
let addedItems;
let addedItem = productsInCartLocalStorageString
  ? productsInCartLocalStorageJson
  : [];
(addedItems = function () {
  if (addedItem) {
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
})();

// add to cart
function addedToCart(id) {
  // find id of object to add in cart
  let product = products.find((item) => item.id === id);
  let isProductInCart = addedItem.some((i) => i.id === product.id);
  if (isProductInCart) {
    addedItem = addedItem.map((p) => {
      if (p.id === product.id) p.qty += 1;
      return p;
    });
  } else {
    addedItem.push(product);
  }
  cartBody.innerHTML = "";
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
  // save data
  localStorage.setItem("productsInCart", JSON.stringify(addedItem));

  for (let i = 0; i < itemNumber.length; i++) {
    itemNumber[i].innerHTML = addedItem.length;
  }
}

// stop a action
let cart = document.querySelectorAll("a.cart");
for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}

// // show paragraph if cart is empty
// if (productsInCartLocalStorageJson.length === 0 || []) {
//   // cartBody.innerHTML = `<div class="no-products">Your cart is empty.</div>`
//   noProductsDom.classList.add("show")
//   console.log(productsInCartLocalStorageJson.length);
// }

// don't repeat array
function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) == i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "./page-single.html";
}

// search
let input = document.getElementById("searchInp");
input.addEventListener("keyup", function (e) {
  search(e.target.value, products);
  if (e.target.value.trim() === "") {
    drawProductsUI(products);
  }
});
function search(title, myArray) {
  let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
  drawProductsUI(arr);
}

// add to favorite
// favoriteItem save in local storage
let favoriteItem = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];

function addedToFavorite(id) {
  let product = products.find((item) => item.id === id);
  product.liked = true;
  let isProductInFavorite = favoriteItem.some((i) => i.id === product.id);
  // if (isProductInFavorite) {
  //   favoriteItem = favoriteItem.map((p) => {
  //     if (p.liked = true) p.liked = true;
  //   });
  // }
  console.log(isProductInFavorite);
  favoriteItem = [...favoriteItem, product];
  let uniqueProducts = getUniqueArr(favoriteItem, "id");
  localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
  products.map((item) => {
    if (item.id === product.id) {
      item.liked = true;
    }
  });
  localStorage.setItem("products", JSON.stringify(products));
  drawProductsUI(products);
}

// remove from cart
// function removeFromCart(id) {
//   if (productsInCartLocalStorageString) {
//     let items = productsInCartLocalStorageJson;
//     let filteredItem = items.filter((item) => item.id !== id);
//     localStorage.setItem("productsInCart", JSON.stringify(filteredItem));
//     // addedToCart(filteredItem);
//     console.log(id);
//   }
// }

let brandFilter = document.getElementById("brandFilter");
brandFilter.addEventListener("change", getProductsFilteredByBrand);
function getProductsFilteredByBrand(e) {
  let val = e.target.value
  let products = JSON.parse(localStorage.getItem("products")) || productTrendingMiniTow
  if (val === "All") {
    drawProductsUI(products)
  }else{
    products = products.filter((i)=> i.information.BRAND === val)
    drawProductsUI(products)
  }
}
