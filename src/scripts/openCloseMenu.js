let $ = require('jquery');

window.onload = function() {
  if(menu != null) {
    var menu = document.getElementById("menu")
  }
  var burger = document.getElementById("burger")
  var navItems = document.getElementsByClassName("navItem")

  function openCloseMenu(){
    if(menu != null) {
      menu.classList.toggle("show");
      burger.classList.toggle("burgerContainerClose");
    }
    else if (window.location.href='/citysnapp') {
      window.location.href='/#projects'
    }
  }

  burger.onclick = openCloseMenu;

  for (i = 0, len = navItems.length; i < len; i++){
      navItems[i].onclick = openCloseMenu;
  }
};
