let productsDom = document.querySelector("table tbody");
let noProductsDomCart = document.querySelector(".single-cart .no-products");
let noProductsDomFavorite = document.querySelector(".favorite .no-products");
let cartTable = document.getElementById("cart-table");



function drawFavoritesProductsUI(allProducts = []) {
  if(localStorage.getItem("productsFavorite")){
    if (JSON.parse(localStorage.getItem("productsFavorite")).length === 0) {
      cartTable.style.display = "none";
        noProductsDomFavorite.classList.add("show");
    }
  }else{
    cartTable.style.display = "none";
    noProductsDomFavorite.classList.add("show");
  }
  let productTrendingMiniOne =
    JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;
  let productsUI = productTrendingMiniOne.map((item) => {
    return `
    <tr>
    <td class="flexItem">
      <div class="thumbnail object-cover">
        <a onclick="saveItemData(${item.id})"
          ><img
            src="${item.imgUrl}"
            alt=""
        /></a>
      </div>
      <div class="content">
        <strong><a onclick="saveItemData(${item.id})">${item.title}</a></strong>
        <p>Color: ${item.color.color1}</p>
      </div>
    </td>
    <td>$${item.price}</td>
    <td>
      <button onclick="addedToCart(${item.id})" class="add-to-cart">
        <i class="ri-shopping-cart-line"></i>
      </button>
    </td>
    <td>
      <a onclick="removeFromFavorite(${item.id})" class="item-remove"
        ><i class="ri-close-line"></i
      ></a>
    </td>
  </tr>`;
  });
  for (let i = 0; i < itemNumberFavorite.length; i++) {
    itemNumberFavorite[i].innerHTML = favoriteItem.length;
  }
  productsDom.innerHTML = productsUI.join("");
}
drawFavoritesProductsUI();
// remove from cart
function removeFromFavorite(id) {
  if (localStorage.getItem("productsFavorite")) {
    let items = JSON.parse(localStorage.getItem("productsFavorite"));
    let filteredItem = items.filter((item) => item.id !== id);
    localStorage.setItem("productsFavorite", JSON.stringify(filteredItem));

    drawFavoritesProductsUI(filteredItem);
    (addedItems = function (favoriteItem) {
      // ???
      for (let i = 0; i < itemNumberFavorite.length; i++) {
        itemNumberFavorite[i].innerHTML = favoriteItem.length;
      }
    })(filteredItem);
  }
}


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