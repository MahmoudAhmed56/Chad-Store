// stock products bar width percentage
let stocks = document.querySelectorAll(".stock");
for (let i = 0; i < stocks.length; i++) {
  let stock = stocks[i].dataset.stock,
    available = stocks[i].querySelector(".qty-available").innerHTML,
    sold = stocks[i].querySelector(".qty-solid").innerHTML,
    percent = (sold * 100) / stock;
  stocks[i].querySelector(".available").style.width = percent + "%";
  // console.log(stock)//690
  // console.log(stocks)//NodeList [div.stock.mini-text]
  // console.log(stocks[i])//div.stock.mini-text
  // console.log(stocks[i].dataset.stock)//690
  // console.log(available)//107
}
  // work fsLightbox
  fsLightbox.props.type = "image";