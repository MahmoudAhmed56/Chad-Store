// auto close by click outside filter
const FtoShow = ".filter";
const Fpopup = document.querySelector(FtoShow);
const Ftrigger = document.querySelector(".filter-trigger");
Ftrigger.addEventListener("click", ()=>{
  setTimeout(() =>{
    if(!Fpopup.classList.contains("show")){
      Fpopup.classList.add("show")
    }
  }, 250)
})
// 
document.addEventListener("click",(e)=>{
  const isClosest = e.target.closest(FtoShow);
  if (!isClosest && Fpopup.classList.contains("show")) {
    Fpopup.classList.remove("show")
  }
})
