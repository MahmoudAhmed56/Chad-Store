// loader
let loader = document.querySelector(".loader-parent");
window.addEventListener("load", () => {
  loader.classList.add("loader-hidden");
});
loader.addEventListener("transitionend", () => {
  loader.remove();
});
//copy menu for mobile
function copyMenu() {
  //copy inside .dpt-cat to departments
  let dptCategory = document.querySelector(".dpt-cat");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;
  //copy inside nav to nav
  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;
  //copy .header-top .wrapper to .theTop-nav
  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-canvas .theTop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addClass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
  addClass.classList.toggle("show-menu");
});
closeButton.addEventListener("click", function () {
  addClass.classList.remove("show-menu");
});

//show sub menu on mobile with click on arrow
const subMenu = document.querySelectorAll(".has-child .icon-small");
subMenu.forEach((menu) => menu.addEventListener("click", toggle));
function toggle(e) {
  e.preventDefault();
  subMenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  // if(this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}
//slider
const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
});
// get year
let getYear = document.querySelector(".getYear");
let d = new Date();
let year = d.getFullYear();
getYear.innerHTML = year;

// show search
const searchButton = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");
searchButton.addEventListener("click", function () {
  showClass.classList.toggle("show-search");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("show-search");
});

// show cart on click
const divToShow = ".mini-cart";
const divPopup = document.querySelector(divToShow);
const dieTrigger = document.querySelector(".cart-trigger");
dieTrigger.addEventListener("click", () => {
  setTimeout(() => {
    if (!divPopup.classList.contains("show")) {
      divPopup.classList.add("show");
    }
  }, 250);
});
// ? close by click outside
document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(divToShow);
  if (!isClosest && divPopup.classList.contains("show")) {
    divPopup.classList.remove("show");
  }
});

// show dtp-menu toggle
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
  dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
  dptClass.classList.toggle("show-dpt");
});
// dark mode toggle
// addClass == site
const modeToggle = document.querySelector(".dark-light");
let getMode = localStorage.getItem("mode");
if (getMode === "dark-mode") {
  addClass.classList.add("dark");
  modeToggle.classList.add("active");
}
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  addClass.classList.toggle("dark");
  if (!addClass.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// change direction
function changeDire(dir) {
  document.documentElement.setAttribute("dir", dir);
}

//scroll to top
let scrollToTop = document.querySelector(".back-to-top");
let scrollToTop2 = document.querySelector(".back-to-top2");
scrollToTop.addEventListener("click", scrollToTopFunction);
scrollToTop2.addEventListener("click", scrollToTopFunction);
function scrollToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
