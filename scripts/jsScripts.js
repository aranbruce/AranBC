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

  //Smooth Scrolling for links
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
          });
        } // End if
      });
    });
