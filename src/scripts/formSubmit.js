const scriptURL = 'https://script.google.com/macros/s/AKfycbwcGSl46eEqo95KJ5_PpeVrFzLurzwG8IzI5VuQmIhmHzU7gyI/exec'
const form = document.getElementById('enquiryForm')
const formButton = document.getElementById("formButton");

if(form != null) {
  form.addEventListener('submit', e => {
    e.preventDefault()
    e.stopImmediatePropagation()
    formButton.innerHTML = formButton.innerHTML.replace('Send', "Sending");
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      .then(function thankYouRedirect() {
          if (response = true) {
            location.href = "/thankyou";
          }
        })
  })
}
