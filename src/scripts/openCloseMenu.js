// import $ from "jquery";

window.onload = function() {
  var menu = document.getElementById("menu")
  var burger = document.getElementById("burger")

  if(burger) {
    var navItems = document.getElementsByClassName("navItem")

    function openCloseMenu() {
      menu.classList.toggle("show");
      burger.classList.toggle("burgerContainerClose");
      
    }

    burger.onclick = openCloseMenu;
  
    for (i = 0; i < navItems.length; i++){
        navItems[i].onclick = openCloseMenu;
    }
  }
};
