const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobileMenu")

hamburger.addEventListener("click",()=> {
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
    }  else {
        mobileMenu.classList.add("hidden")
    }
})