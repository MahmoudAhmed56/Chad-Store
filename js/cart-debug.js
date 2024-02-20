let productsDom = document.querySelector("table tbody");
let cartTable = document.getElementById("cart-table");
let input = document.getElementById("value");


// !!! I need to change value of qty and save it in local storage
// function plus(id) {
//   // find id of object to add in cart
//   let products = productsInCartLocalStorageJson;
//   let product = products.find((item) => item.id === id);
//   addedItem = addedItem.map((p) => {
//     if (p.id === product.id) input.innerHTML = 5;
//     console.log("d");
//   });
// }

function drawCartProductsUI(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsInCart")).length === 0) {
    cartTable.style.display = "none";
    noProductsDomCart.classList.add("show")
    noProductsDomCartMenu.classList.add("show")
  }
  let productTrendingMiniOne =
    JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
  let productsUI = productTrendingMiniOne.map((item) => {
    return `
    <tr>
    <td class="flexItem">
      <div class="thumbnail object-cover">
        <a href="#"><img src="${item.imgUrl}" alt=""></a>
      </div>
      <div class="content">
        <strong><a href="#">${item.title}</a></strong>
        <p>Color: ${item.color.color1}</p>
      </div>
    </td>
    <td>$${item.price}</td>
    <td>
      <div class="qty-control flexItem">
        <button class="minus">-</button>
        <input id="value" type="text" value="${item.qty}" min="1">
        <button onclick="plus(${item.id})" class="plus">+</button>
      </div>
    </td>
    <td>$${Math.round(item.qty * item.price)}</td>
    <td><a id="removeFromCart" onclick="removeFromCart(${
      item.id
    })" class="item-remove"><i class="ri-close-line"></i></a></td>
  </tr>`;
  });
  productsDom.innerHTML = productsUI.join("");
}
drawCartProductsUI();
// remove from cart
function removeFromCart(id) {
  if (localStorage.getItem("productsInCart")) {
    let items = JSON.parse(localStorage.getItem("productsInCart"));
    let filteredItem = items.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItem));
    drawCartProductsUI(filteredItem);
    (addedItems = function (addedItem) {
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
        noProductsDomCart.classList.add("show")
        noProductsDomCartMenu.classList.add("show")
      } else {
        noProductsDomCart.classList.remove("show")
        noProductsDomCartMenu.classList.remove("show")
      }
      cartNumber.innerHTML = addedItem.length;
      let total = [];
      addedItem.map((i) => total.push(i.price));

      subTotal.innerHTML = "$" + Math.round(plural(total));
      cartTotal.innerHTML = "$" + Math.round(plural(total));
    })(filteredItem);
  }
}
