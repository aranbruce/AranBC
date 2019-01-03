let scrollpos = window.scrollY
const nav = document.querySelector("nav")
const nav_height = nav.offsetHeight

const add_class_on_scroll = () => nav.classList.add("nav--scroll")
const remove_class_on_scroll = () => nav.classList.remove("nav--scroll")

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= nav_height) { 
        add_class_on_scroll() 
    }
    else { 
        remove_class_on_scroll() 
    }
})