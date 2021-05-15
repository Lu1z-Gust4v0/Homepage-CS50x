// This code will add a css class to change between the themes.

// Getting elements
const navItem = document.querySelector('.toggle')
const body = document.querySelector('body')
 
const currentTheme = localStorage.getItem("theme")

// Change to night
if (currentTheme == "night"){
    body.classList.add("night-theme")
    navItem.classList.add("active")
}

navItem.addEventListener("click", function () {
    body.classList.toggle("night-theme")
    navItem.classList.toggle("active")

    let theme = "day";   
    if (body.classList.contains("night-theme")){
        theme = "night"
    }
    localStorage.setItem("theme", theme);
})