let $ = require('jquery');
let ScrollReveal = require('scrollreveal');

window.sr = ScrollReveal();

sr.reveal('.sectionContent', {
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

sr.reveal('.backgroundShape', {
  delay: 400,
  duration: 1000
 }, 100);
