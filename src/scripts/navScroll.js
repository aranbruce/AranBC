let scrollpos = window.scrollY
const nav = document.querySelector("nav")
const burger = document.getElementById("burger")
const nav_height = nav.offsetHeight

const add_class_on_scroll = () => {
    nav.classList.add("nav--scroll")
    burger.classList.add("burger-container--scroll")
}
const remove_class_on_scroll = () => {
    nav.classList.remove("nav--scroll")
    burger.classList.remove("burger-container--scroll")
}

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= nav_height) { 
        add_class_on_scroll() 
    }
    else { 
        remove_class_on_scroll() 
    }
})