var form = document.getElementById('enquiryForm');
form.onsubmit = function(event) {
  event.preventDefault();
  var result = [
    form.NAME.value,
    form.EMAIL.value,
    form.SUBJECT.value,
    form.MESSAGE.value,
  ];
  console.log(result);
  location.href = "/thankyou";
};
