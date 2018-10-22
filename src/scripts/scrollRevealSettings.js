import $ from "jquery";
import ScrollReveal from "scrollreveal";

window.sr = ScrollReveal();

sr.reveal('.section__content', {
  duration: 400,
  origin: 'bottom',
  scale: 1,
  distance: '5px',
  delay: 0
})

sr.reveal('nav', {
  duration: 200,
  origin: 'bottom',
  scale: 1,
  distance: '5px',
  delay: 0
})

sr.reveal('.background-shape', {
  delay: 400,
  duration: 1000
 }, 100);
