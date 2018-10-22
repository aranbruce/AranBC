window.onload = function() {
  var menu = document.getElementById("menu")
  var burger = document.getElementById("burger")

  if(burger) {
    var navItems = document.getElementsByClassName("nav__item")

    function openCloseMenu() {
      menu.classList.toggle("show");
      burger.classList.toggle("burger-container--close");
      
    }

    burger.onclick = openCloseMenu;
  
    for (i = 0; i < navItems.length; i++){
        navItems[i].onclick = openCloseMenu;
    }
  }
};
