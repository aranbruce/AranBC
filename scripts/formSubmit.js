const scriptURL = 'https://script.google.com/macros/s/AKfycbxtiYIHGmdJqPYQMZ5LhSjsgr6kuiwscgr4_DCgbPfkclgKamUJ/exec'
const form = document.forms['enquiryForm']

form.addEventListener('submit', event => {
  event.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    if (response = true) {
      location.href = "/thankyou";
    }
})
