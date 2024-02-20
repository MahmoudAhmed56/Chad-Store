let addedItems,productsMiniOneDom=document.querySelector(".row.products.mini.ones"),productsMiniTowDom=document.querySelector(".row.products.mini.tow"),cartBody=document.querySelector(".cart-body"),cartHead=document.querySelector(".cart-head span"),itemNumber=document.querySelectorAll(".item-number-cart"),itemNumberFavorite=document.querySelectorAll(".item-number-favorite"),products=productTrendingMiniDB,cartNumber=document.querySelector(".cart-head span"),subTotal=document.querySelector(".subtotal p strong"),noProductsDomCart=document.querySelector(".single-cart .no-products"),noProductsDomCartMenu=document.querySelector(".mini-cart .no-products"),productsInCartLocalStorageString=localStorage.getItem("productsInCart"),productsInCartLocalStorageJson=JSON.parse(productsInCartLocalStorageString),cartTotal=document.querySelector(".iscart .cart-total"),favoriteItem=localStorage.getItem("productsFavorite")?JSON.parse(localStorage.getItem("productsFavorite")):[],addedItem=productsInCartLocalStorageString?productsInCartLocalStorageJson:[];function plural(t){let e=0;for(let r=0;r<t.length;r++)e+=t[r];return e}function getUniqueArr(t,e){return t.map(t=>t[e]).map((t,e,r)=>r.indexOf(t)==e&&e).filter(e=>t[e]).map(e=>t[e])}function saveItemData(t){localStorage.setItem("productId",t),window.location="./page-single.html"}(addedItems=function(t){t&&t.forEach(t=>{cartBody.innerHTML+=`\n      <ul class="products mini">\n        <li class="item">\n          <div class="thumbnail object-cover">\n            <a onclick="saveItemData(${t.id})"><img src="${t.imgUrl}" alt="${t.title}"></a>\n          </div>\n          <div class="item-content">\n            <p><a onclick="saveItemData(${t.id})">${t.title}</a></p>\n            <span class="price">\n              <span>$${t.price}</span>\n              <span class="fly-item"><span>${t.qty}x</span></span>\n            </span>\n          </div>\n        </li>\n      </ul>`});for(let e=0;e<itemNumber.length;e++)itemNumber[e].innerHTML=t.length;for(let t=0;t<itemNumberFavorite.length;t++)itemNumberFavorite[t].innerHTML=favoriteItem.length;0===t.length?(noProductsDomCart.classList.add("show"),noProductsDomCartMenu.classList.add("show")):(noProductsDomCart.classList.remove("show"),noProductsDomCartMenu.classList.remove("show")),cartNumber.innerHTML=t.length;let e=[];t.map(t=>e.push(t.price)),subTotal.innerHTML="$"+Math.round(plural(e)),cartTotal.innerHTML="$"+Math.round(plural(e))})(addedItem);let inputSearch=document.getElementById("searchInp");function search(t,e){let r=e.filter(e=>-1!==e.title.toLowerCase().indexOf(t.toLowerCase()));drawProductsUI(r)}inputSearch.addEventListener("keyup",function(t){search(t.target.value,products),""===t.target.value.trim()&&drawProductsUI(products)});