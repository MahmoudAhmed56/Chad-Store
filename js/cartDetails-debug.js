let products = JSON.parse(localStorage.getItem("products"))
let productId = localStorage.getItem("productId")
let productDetails = products.find((item)=> item.id == productId)
let productType = productDetails.type
let productTypeDom = products.filter((item)=> item.type == productType)
let relatedProducts = document.querySelector(".products.main")
let singleProduct = document.querySelector(".single-product")
singleProduct.innerHTML = `
<div class="container">
<div class="wrapper">
  <div class="breadcrumb">
    <ul class="flexItem">
      <li><a href="#">Home</a></li>
      <li><a href="#">${productDetails.type}</a></li>
      <li>${productDetails.title}</li>
    </ul>
  </div>
  <div class="column">
    <div class="products one">
      <div class="flexWrap">
        <div class="row">
          <div class="item is-sticky">
            <div class="price">
              <span class="discount">${productDetails.discount}%<br />OFF</span>
            </div>
            <div class="big-image">
              <div class="big-image-wrapper swiper-wrapper">
                <div class="image-show swiper-slide">
                  <a data-fslightbox href="${productDetails.imgUrl}"><img src="${productDetails.imgUrl}" alt="shoes"></a>
                </div>
                <div class="image-show swiper-slide">
                  <a data-fslightbox href="${productDetails.imgUrl2}"><img src="${productDetails.imgUrl2}" alt="shoes"></a>
                </div>
                <div class="image-show swiper-slide">
                  <a data-fslightbox href="${productDetails.imgUrl3}"><img src="${productDetails.imgUrl3}" alt="shoes"></a>
                </div>
                <div class="image-show swiper-slide">
                  <a data-fslightbox href="${productDetails.imgUrl4}"><img src="${productDetails.imgUrl4}" alt="shoes"></a>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
            <div thumbSlider="" class="small-image">
              <ul class="small-image-wrapper flexItem swiper-wrapper">
                <li class="thumbnail-show swiper-slide">
                  <img src="${productDetails.imgUrl}" alt="shoes">
                </li>
                <li class="thumbnail-show swiper-slide">
                  <img src="${productDetails.imgUrl2}" alt="shoes">
                </li>
                <li class="thumbnail-show swiper-slide">
                  <img src="${productDetails.imgUrl3}" alt="shoes">
                </li>
                <li class="thumbnail-show swiper-slide">
                  <img src="${productDetails.imgUrl4}" alt="shoes">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <h1>${productDetails.title}</h1>
            <div class="content">
              <div class="rating">
                <div class="stars"></div>
                <a href="#" class="mini-text">${productDetails.reviewsCount} reviews</a>
                <a href="#" class="add-review mini-text">Add Your Review</a>
              </div>
              <div class="stock-sku">
                <span class="available">In Stock</span>
                <span class="sku mini-text">SKU-881</span>
              </div>
              <div class="price">
                <span class="current">$${productDetails.price}</span>
                <span class="normal">$${productDetails.priceDashed}</span>
              </div>
              <div class="colors">
                <p>Color</p>
                <div class="variant">
                  <form action="">
                    <p>
                      <input type="radio" name="color" id="cogray">
                      <label for="cogray" class="circle"></label>
                    </p>
                    <p>
                      <input type="radio" name="color" id="co${productDetails.color.color3}">
                      <label for="co${productDetails.color.color3}" class="circle"></label>
                    </p>
                    <p>
                      <input type="radio" name="color" id="co${productDetails.color.color2}">
                      <label for="co${productDetails.color.color2}" class="circle"></label>
                    </p>
                  </form>
                </div>
              </div>
              <div class="size">
                <p>Size</p>
                <div class="variant">
                  <form action="">
                    <p>
                      <input type="radio" name="size" id="size-40">
                      <label for="size-40" class="circle"><span>${productDetails.size.size1}</span></label>
                    </p>
                    <p>
                      <input type="radio" name="size" id="size-41">
                      <label for="size-41" class="circle"><span>${productDetails.size.size2}</span></label>
                    </p>
                    <p>
                      <input type="radio" name="size" id="size-42">
                      <label for="size-42" class="circle"><span>${productDetails.size.size3}</span></label>
                    </p>
                    <p>
                      <input type="radio" name="size" id="size-43">
                      <label for="size-43" class="circle"><span>${productDetails.size.size4}</span></label>
                    </p>
                  </form>
                </div>
              </div>
              <div class="actions">
                  <div class="qty-control flexItem">
                    <button class="minus circle">-</button>
                    <input type="text" value="1">
                    <button class="plus circle">+</button>
                  </div>
                  <div class="button-cart"><button onclick="addedToCart(${productDetails.id})" class="primary-button">Add to cart</button></div>
                  <div class="wish-share">
                    <ul class="flexItem second-links">
                      <li>
                        <a onclick="addedToFavorite(${productDetails.id})">
                          <span class="icon-large"><i class="ri-heart-line"></i></span>
                          <span>Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span class="icon-large"><i class="ri-share-line"></i></span>
                          <span>Share</span>
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
              <div class="description">
                <div class="collapse">
                  <ul>
                    <li class="has-child expand">
                      <a href="#0" class="icon-small">Information</a>
                      <ul class="content">
                        <li><span>Brand</span> <span>${productDetails.information.BRAND}</span></li>
                        <li><span>Activity</span> <span>${productDetails.information.ACTIVITY}</span></li>
                        <li><span>Material</span> <span>${productDetails.information.MATERIAL}</span></li>
                        <li><span>Gender</span> <span>${productDetails.information.GENDER}</span></li>
                      </ul>
                    </li>
                    <li class="has-child">
                      <a href="#0" class="icon-small">Details</a>
                      <div class="content">
                        <p>${productDetails.details}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis placeat harum, ipsa ad incidunt sequi necessitatibus eaque. Recusandae, asperiores! Quae doloremque obcaecati sapiente soluta.</p>
                      </div>
                    </li>
                    <li class="has-child">
                      <a href="#0" class="icon-small">Custom</a>
                      <div class="content">
                        <table>
                          <thead>
                            <tr>
                              <th>Size</th>
                              <th>Bust <span class="mini-text">(cm)</span></th>
                              <th>Waist <span class="mini-text">(cm)</span></th>
                              <th>Hip <span class="mini-text">(cm)</span></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>${productDetails.custom.size1}</td>
                              <td>82,5</td>
                              <td>62</td>
                              <td>87,5</td>
                            </tr>
                            <tr>
                              <td>${productDetails.custom.size2}</td>
                              <td>52</td>
                              <td>45.5</td>
                              <td>30</td>
                            </tr>
                            <tr>
                              <td>${productDetails.custom.size3}</td>
                              <td>52</td>
                              <td>25</td>
                              <td>28,5</td>
                            </tr>
                            <tr>
                              <td>${productDetails.custom.size4}</td>
                              <td>55</td>
                              <td>89</td>
                              <td>76</td>
                            </tr>
                            <tr>
                              <td>${productDetails.custom.size5}</td>
                              <td>96</td>
                              <td>85,5</td>
                              <td>78</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                    <li class="has-child">
                      <a href="#" class="icon-small">Reviews<span class="mini-text">2.2k</span></a>
                      <div class="content">
                        <div class="reviews">
                          <h4>Customer Reviews</h4>
                          <div class="review-block">
                            <div class="review-block-head">
                              <div class="flexItem">
                                <span class="rate-sum">${productDetails.reviews.stars}</span>
                                <span>2,251 Reviews</span>
                              </div>
                              <a href="#review-form" class="secondary-button">Write Review</a>
                            </div>
                            <div class="review-block-body">
                              <ul>
                                <li class="item">
                                  <div class="review-form">
                                    <p class="person">Review By Sarah</p>
                                    <p class="mini-text">On 7/7/23</p>
                                  </div>
                                  <div class="review-rating rating">
                                    <div class="stars"></div>
                                  </div>
                                  <div class="review-title">
                                    <p>Awesome Product!</p>
                                  </div>
                                  <div class="review-text">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque amet accusantium quae. Quasi, aspernatur repellat eveniet quos in facere perspiciatis.</p>
                                  </div>
                                </li>
                                <li class="item">
                                  <div class="review-form">
                                    <p class="person">Review By Ali</p>
                                    <p class="mini-text">On 1/7/23</p>
                                  </div>
                                  <div class="review-rating rating">
                                    <div class="stars"></div>
                                  </div>
                                  <div class="review-title">
                                    <p>Awesome Product!</p>
                                  </div>
                                  <div class="review-text">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque amet accusantium quae. Quasi, aspernatur repellat eveniet quos in facere perspiciatis.</p>
                                  </div>
                                </li>
                              </ul>
                              <div class="second-links">
                                <a href="#" class="view-all">View All Reviews <i class="ri-arrow-right-line"></i></a>
                              </div>
                            </div>
                            <div id="review-form" class="review-form">
                              <h4>Write a review</h4>
                              <div class="rating">
                                <p>Are you satisfied enough?</p>
                                <div class="rate-this">
                                  <input type="radio" name="rating" id="star5">
                                  <label for="star5"><i class="ri-star-fill"></i></label>
                                  <input type="radio" name="rating" id="star4">
                                  <label for="star4"><i class="ri-star-fill"></i></label>
                                  <input type="radio" name="rating" id="star3">
                                  <label for="star3"><i class="ri-star-fill"></i></label>
                                  <input type="radio" name="rating" id="star2">
                                  <label for="star2"><i class="ri-star-fill"></i></label>
                                  <input type="radio" name="rating" id="star1">
                                  <label for="star1"><i class="ri-star-fill"></i></label>
                                </div>
                              </div>
                              <form action="">
                                <p>
                                  <label>Name</label>
                                  <input type="text" name="name">
                                </p>
                                <p>
                                  <label>Summary</label>
                                  <input type="text" name="summary">
                                </p>
                                <p>
                                  <label>Review</label>
                                  <textarea name="textarea" cols="30" rows="10"></textarea>
                                </p>
                                <p><a href="#" class="primary-button">Submit Review</a></p>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

`
function drawRelatedProducts(relatedProductsArray) {
  let productsDOM = relatedProductsArray.map((item)=>{
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
  })
  relatedProducts.innerHTML = productsDOM.join("")
}
drawRelatedProducts(productTypeDom)


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
// add to favorite
// favoriteItem save in local storage
// function addedToFavorite(id) {
//   let product = products.find((item) => item.id === id);
//   if (true) {
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Added to favorite",
//       showConfirmButton: false,
//       timer: 1500,
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
//   for (let i = 0; i < itemNumberFavorite.length; i++) {
//     itemNumberFavorite[i].innerHTML = uniqueProducts.length;
//   }
// }
// favoriteItem save in local storage
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
  drawRelatedProducts(productTypeDom)
  for (let i = 0; i < itemNumberFavorite.length; i++) {
    itemNumberFavorite[i].innerHTML = uniqueProducts.length;
  }
}