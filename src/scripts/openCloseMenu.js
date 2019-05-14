window.onload = function() {
  var menu = document.getElementById("menu")
  var burger = document.getElementById("burger")

  if(burger) {
    var navItems = document.getElementsByClassName("nav__item")

    function openMenu() {
      menu.classList.add("show");
      burger.classList.add("burger-container--close");
    }

    function closeMenu() {
      menu.classList.remove("show");
      burger.classList.remove("burger-container--close");
    }

    function toggleMenu() {
      if (burger.classList.contains('burger-container--close')) {
        closeMenu();
      }
      else if (!burger.classList.contains('burger-container--close')) {
        openMenu();
      }
    }

    burger.onclick = toggleMenu
    
    for (i = 0; i < navItems.length; i++){
        navItems[i].onclick = closeMenu;
    }
  }
};
