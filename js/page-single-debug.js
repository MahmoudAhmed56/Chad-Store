// products image slider
let productThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMood: true,
  watchSlidesProgress: true,
  breakPoints: {
    481: {
      spaceBetween: 32,
    },
  },
});
let productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumb,
  },
});
// work fsLightbox 
fsLightbox.props.type = "image";