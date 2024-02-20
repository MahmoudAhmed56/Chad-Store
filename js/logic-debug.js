////////////
let productsMiniOneDom = document.querySelector(".row.products.mini.ones");
let productsMiniTowDom = document.querySelector(".row.products.mini.tow");
let cartBody = document.querySelector(".cart-body");
let cartHead = document.querySelector(".cart-head span");
let itemNumber = document.querySelectorAll(".item-number-cart");
let itemNumberFavorite = document.querySelectorAll(".item-number-favorite");
let products = productTrendingMiniDB;
let cartNumber = document.querySelector(".cart-head span")
let subTotal = document.querySelector(".subtotal p strong")
let noProductsDomCart = document.querySelector(".single-cart .no-products");
let noProductsDomCartMenu = document.querySelector(".mini-cart .no-products");
let productsInCartLocalStorageString = localStorage.getItem("productsInCart");
let productsInCartLocalStorageJson = JSON.parse(
  productsInCartLocalStorageString
);
let cartTotal = document.querySelector(".iscart .cart-total")

// add to favorite
let favoriteItem = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];
// add to cart
  let addedItems;
  let addedItem = productsInCartLocalStorageString
    ? productsInCartLocalStorageJson
    : [];
////////////

///////////
// Function to get total price
function plural(total) {
  let number = 0;
  for (let i = 0; i < total.length; i++) {
    number += total[i]
  }
  return number
}

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
        </li>
      </ul>`;
    });
  }
  // ???
  for (let i = 0; i < itemNumber.length; i++) {
    itemNumber[i].innerHTML = addedItem.length;
  }
  for (let i = 0; i < itemNumberFavorite.length; i++) {
    itemNumberFavorite[i].innerHTML = favoriteItem.length;
  }
  if (addedItem.length === 0){
    noProductsDomCart.classList.add("show")
    noProductsDomCartMenu.classList.add("show")
}else{
  noProductsDomCart.classList.remove("show")
  noProductsDomCartMenu.classList.remove("show")
}
cartNumber.innerHTML = addedItem.length
  let total = []
  addedItem.map((i)=> total.push(i.price))
  subTotal.innerHTML = "$" + Math.round(plural(total))
  cartTotal.innerHTML = "$" + Math.round(plural(total))
})(addedItem);

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
// !!!! search
let inputSearch = document.getElementById("searchInp");
inputSearch.addEventListener("keyup", function (e) {
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

// function addedToFavorite(id) {
//   let product = products.find((item) => item.id === id);
//   if (!product.liked) {
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Added to favorite",
//       showConfirmButton: false,
//       timer: 1500
//     });
//   }else{
//     Swal.fire({
//       title: "the item is already in favorite",
//       showClass: {
//         popup: `
//           animate__animated
//           animate__fadeInUp
//           animate__faster
//         `
//       },
//       hideClass: {
//         popup: `
//           animate__animated
//           animate__fadeOutDown
//           animate__faster
//         `
//       }
//     });
//   }
//   product.liked = true;
//   favoriteItem = [...favoriteItem, product];
//   let uniqueProducts = getUniqueArr(favoriteItem, "id");
//   localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
//   products.map((item) => {
//     if (item.id === product.id) {
//       item.liked = true;
//     }
//   });
//   localStorage.setItem("products", JSON.stringify(products));
//   drawProductsUI(products);
// }
///////////