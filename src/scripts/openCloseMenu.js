let $ = require('jquery');

window.onload = function() {
  var menu = document.getElementById("menu")
  var burger = document.getElementById("burger")
  var navItems = document.getElementsByClassName("navItem")

  function openCloseMenu(){
    if(window.document.URL.indexOf("citysnapp") >= 0) {
      window.location.href='/#projects'
    }
    else {
      menu.classList.toggle("show");
      burger.classList.toggle("burgerContainerClose");
    }
  }

  burger.onclick = openCloseMenu;

  for (i = 0, len = navItems.length; i < len; i++){
      navItems[i].onclick = openCloseMenu;
  }
};
