<!--scripts-->
// Show and hide burger menu on Mobile

function openCloseMenu() {

  /*
  //hide mobile menu when it is closed
  document.getElementById("menu").classList.toggle("hide");
  */
  //show mobile menu when it is open
  document.getElementById("menu").classList.toggle("show");

  //Change burger to 'x'
  document.getElementById("burger").classList.toggle("burgerContainerClose");

  /*

  //hide elemensts when burger is open
    var hiddenOnOpenMenu = document.getElementsByClassName("hiddenOnOpenMenu")
    for (var i = 0; i < hiddenOnOpenMenu.length; i++) {
      hiddenOnOpenMenu[i].classList.toggle("hide")
      }

    //Change background when mobile menu is open
    document.getElementById("bodyBackground").classList.toggle("menuOpen");

  */
  }
