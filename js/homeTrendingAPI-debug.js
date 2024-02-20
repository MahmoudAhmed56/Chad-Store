let productsMiniOneDom = document.querySelector(".row.products.mini.ones");
let productsMiniTowDom = document.querySelector(".row.products.mini.tow");
let cartBody = document.querySelector(".cart-body");
let cartHead = document.querySelector(".cart-head span");
let itemNumber = document.querySelectorAll(".item-number-cart");
let itemNumberFavorite = document.querySelectorAll(".item-number-favorite");
let productsInCartLocalStorageString = localStorage.getItem("productsInCart");
let productsInCartLocalStorageJson = JSON.parse(
  productsInCartLocalStorageString
);
let noProductsDomCartMenu = document.querySelector(".mini-cart .no-products");
let products = productTrendingMiniDB;
let cartNumber = document.querySelector(".cart-head span");
let subTotal = document.querySelector(".subtotal p strong");
let cartTotal = document.querySelector(".iscart .cart-total");
// Function to get total price
function plural(total) {
  let number = 0;
  for (let i = 0; i < total.length; i++) {
    number += total[i];
  }
  return number;
}
// add to favorite
let favoriteItem = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];
// add to cart
let addedItems;
let addedItem = productsInCartLocalStorageString
  ? productsInCartLocalStorageJson
  : [];
// show products in page data
let drawProductsUI;
let drawProductsUIBigProduct;
let drawProductsUIMiniProduct;
//!!! ////////////////////////////////////////////////////////////////////////////////
//  show products in page data big product
let productsFeaturesDOMBigProduct = document.querySelector(".products.big");
(drawProductsUIBigProduct = function (products = []) {
  let productsUI = products.slice(0, 1).map((item) => {
    return `
    <div class="item">
    <div class="offer">
      <p>Offer ends at</p>
      <ul class="flexCenter">
        <li>1</li>
        <li>15</li>
        <li>27</li>
        <li>60</li>
      </ul>
    </div>
    <div class="media">
      <div class="image">
        <a 
          ><img
            src="${item.imgUrl}"
            alt="${item.title}"
        /></a>
      </div>
      <div class="hover-able">
      <ul>
      <li class="active">
        <a onclick="addedToFavoriteBig(${item.id})"><i class="ri-heart-${
          item.liked == true ? "fill" : "line"
        }"></i></a>
      </li>
      <li>
      <a class="cart" data-fslightbox href="${
        item.imgUrl
      }" ><i class="ri-eye-line"></i></a>
      </li>
      <li>
        <a onclick="addedToCart(${item.id})"><i class="ri-shopping-cart-line"></i></a>
      </li>
    </ul>
      </div>
      <div class="discount circle flexCenter">
        <span>${item.discount}%</span>
      </div>
    </div>
    <div class="content">
      <div class="rating">
        <div class="stars"></div>
        <span class="mini-text">(${item.reviewsCount})</span>
      </div>
      <h3 class="main-links">
        <a onclick="saveItemData(${item.id})">${item.title}</a>
      </h3>
      <div class="price">
        <span class="current">$${item.price}</span
        ><span class="normal mini-text">$${item.priceDashed}</span>
      </div>
      <div class="stock mini-text">
        <div class="qty">
          <span
            >Stock:<strong class="qty-available"
              >107</strong
            ></span
          ><span
            >Sold:<strong class="qty-Sold">${item.Sold}</strong></span
          >
        </div>
        <div class="bar"><div class="available"></div></div>
      </div>
    </div>
  </div>
        `;
  });
  productsFeaturesDOMBigProduct.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);
//!!! ////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// product mini
(drawProductsUIMiniProduct = function (products = []) {
  let productsUI = products.slice(1,7).map((item) => {
    return `
        <div class="item">
        <div class="media">
          <div class="thumbnial object-cover">
            <a>
              <img
                src="${item.imgUrl}"
                alt="${item.title}"
              />
            </a>
          </div>
          <div class="hover-able">
            <ul>
              <li class="active">
                <a class="cart" onclick="addedToFavoriteMini(${item.id})"><i class="ri-heart-${
      item.liked == true ? "fill" : "line"
    }"></i></a>
              </li>
              <li>
                <a class="cart" data-fslightbox href="${
                  item.imgUrl
                }" ><i class="ri-eye-line"></i></a>
              </li>
              <li>
                <a  class="cart"
                onclick="addedToCart(${item.id})">
                <i class="ri-shopping-cart-line"></i></a>
              </li>
            </ul>
          </div>
          <div class="discount circle flexCenter">
            <span>${item.discount}%</span>
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
///////////////////////////////////////////////////////////////////////////////////
// show products in page  product features
let productsFeaturesDOM = document.querySelector(".products.main");
(drawProductsUI = function (products = []) {
  let productsUI = products.slice(7, 17).map((item) => {
    return `
    <div class="item">
    <div class="media">
      <div class="thumbnial object-cover">
        <a 
          ><img src="${item.imgUrl}" alt="${item.title}"
        /></a>
      </div>
      <div class="hover-able">
        <ul>
          <li class="active">
            <a onclick="addedToFavorite(${item.id})"><i class="ri-heart-${
              item.liked == true ? "fill" : "line"
            }"></i></a>
          </li>
          <li>
          <a class="cart" data-fslightbox href="${
            item.imgUrl
          }" ><i class="ri-eye-line"></i></a>
          </li>
          <li>
            <a onclick="addedToCart(${item.id})"><i class="ri-shopping-cart-line"></i></a>
          </li>
        </ul>
      </div>
      <div class="discount circle flexCenter"><span>${item.discount}%</span></div>
    </div>
    <div class="content">
      <div class="rating">
        <div class="stars"></div>
        <span class="mini-text">(${item.reviewsCount})</span>
      </div>
      <h3 class="main-links">
        <a onclick="saveItemData(${item.id})">${item.title}</a>
      </h3>
      <div class="price">
        <span class="current">$${item.price}</span
        ><span class="normal mini-text">$${item.priceDashed}</span>
      </div>
      <div class="footer">
        <ul class="mini-text">
          <li>Brand: ${item.information.BRAND}</li>
          <li>Material: ${item.information.MATERIAL}</li>
          <li>Gender: ${item.information.GENDER}</li>
        </ul>
      </div>
    </div>
  </div>
        `;
  });
  productsFeaturesDOM.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);
//////////////////////////////////////////////////////////////////////////////////

// addedItem save in local storage
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
  for (let i = 0; i < itemNumberFavorite.length; i++) {
    itemNumberFavorite[i].innerHTML = favoriteItem.length;
  }
  if (addedItem.length === 0) {
    noProductsDomCartMenu.classList.add("show");
  } else {
    noProductsDomCartMenu.classList.remove("show");
  }

  cartNumber.innerHTML = addedItem.length;

  let total = [];
  addedItem.map((i) => total.push(i.price));
  subTotal.innerHTML = "$" + Math.round(plural(total));
  cartTotal.innerHTML = "$" + Math.round(plural(total));
})();
// add to cart
function addedToCart(id) {
  // find id of object to add in cart
  let products = productTrendingMiniDB || productsInCartLocalStorageJson;
  let product = products.find((item) => item.id === id);
  if (product.qty === 0) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      title: "the item is already in cart",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  }
  product.qty = 1;
  let isProductInCart = addedItem.some((i) => i.id === product.id);
  if (isProductInCart) {
    addedItem = addedItem.map((p) => {
      if (p.id === product.id) p.qty = 1;
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
  if (addedItem.length === 0) {
    noProductsDomCartMenu.classList.add("show");
  } else {
    noProductsDomCartMenu.classList.remove("show");
  }
  cartNumber.innerHTML = addedItem.length;

  let total = [];
  addedItem.map((i) => total.push(i.price));
  subTotal.innerHTML = "$" + Math.round(plural(total));
  cartTotal.innerHTML = "$" + Math.round(plural(total));
}
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
  let arr = myArray.filter(
    (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
  );
  drawProductsUI(arr);
}
// add to favorite
// favoriteItem save in local storage drawProductsUI
function addedToFavorite(id) {
  let product = products.find((item) => item.id === id);
  if (!product.liked) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to favorite",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      title: "the item is already in favorite",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  }
  product.liked = true;
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
  for (let i = 0; i < itemNumberFavorite.length; i++) {
    itemNumberFavorite[i].innerHTML = uniqueProducts.length;
  }
}
// favoriteItem save in local storage drawProductsMini
function addedToFavoriteMini(id) {
  let product = products.find((item) => item.id === id);
  if (!product.liked) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to favorite",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      title: "the item is already in favorite",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  }
  product.liked = true;
  favoriteItem = [...favoriteItem, product];
  let uniqueProducts = getUniqueArr(favoriteItem, "id");
  localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
  products.map((item) => {
    if (item.id === product.id) {
      item.liked = true;
    }
  });
  localStorage.setItem("products", JSON.stringify(products));
  drawProductsUIMiniProduct(products);
  for (let i = 0; i < itemNumberFavorite.length; i++) {
    itemNumberFavorite[i].innerHTML = uniqueProducts.length;
  }
}
// favoriteItem save in local storage drawProductsBig
function addedToFavoriteBig(id) {
  let product = products.find((item) => item.id === id);
  if (!product.liked) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to favorite",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      title: "the item is already in favorite",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  }
  product.liked = true;
  favoriteItem = [...favoriteItem, product];
  let uniqueProducts = getUniqueArr(favoriteItem, "id");
  localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
  products.map((item) => {
    if (item.id === product.id) {
      item.liked = true;
    }
  });
  localStorage.setItem("products", JSON.stringify(products));
  drawProductsUIBigProduct(products);
  for (let i = 0; i < itemNumberFavorite.length; i++) {
    itemNumberFavorite[i].innerHTML = uniqueProducts.length;
  }
}
// remove from cart
function removeFromCart(id) {
  if (addedItem) {
    addedItem = addedItem.filter((item) => item.id !== id);
    addedItems = function (addedItem) {
      if (addedItem) {
        cartBody.innerHTML = "";
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
      for (let i = 0; i < itemNumberFavorite.length; i++) {
        itemNumberFavorite[i].innerHTML = favoriteItem.length;
      }
      if (addedItem.length === 0) {
        noProductsDomCartMenu.classList.add("show");
      } else {
        noProductsDomCartMenu.classList.remove("show");
      }
      cartNumber.innerHTML = addedItem.length;
      let total = [];
      addedItem.map((i) => total.push(i.price));
      subTotal.innerHTML = "$" + Math.round(plural(total));
      cartTotal.innerHTML = "$" + Math.round(plural(total));
    };
    addedItems(addedItem);
    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
  }
}
