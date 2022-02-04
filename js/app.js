const navBtn = document.getElementById("nav-btn")
const navLinks = document.querySelector(".nav-links")

navBtn.addEventListener("click" , function() {
    if (navLinks.classList.contains("show-nav")) {
        navLinks.classList.remove("show-nav")
    } else {
        navLinks.classList.add("show-nav")
    }
})

const footerYear = document.getElementById("footer-year")
const currentDate = new Date
footerYear.textContent = currentDate.getFullYear()