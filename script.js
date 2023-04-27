const emailInput = document.querySelector('.input[type="email"]');
const errorrAlert = document.getElementsByClassName('error-alert');

const showSuccesMessage = () => {
  emailInput.value = 'Jūsų užklausą gavome. Netrukus susisieksime!';
  emailInput.style.color = '#1F8CC5';

  function myFunction(x) {
    if (x.matches) {
      emailInput.style.fontSize = "12px";
    }
  }
  const x = window.matchMedia("(max-width: 500px)")
  myFunction(x)
  x.addListener(myFunction)
}
window.addEventListener("load", function () {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbw-gcSIFW7hXCWhbNYPcAdbupahnYaXfuq8xeGsdt510LGKpJk8CM5RMmAMS2JvizPn/exec', {
      method: 'POST',
      body: data,
    })
      .then(response => response.text())
      .then(result => console.log(result), showSuccesMessage())
      .catch(error => console.log('error', error));
  });
});


emailInput.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing || event.target.validity.typeMismatch) {
    event.target.setCustomValidity('Prašome įvesti taisyklingą el.pašto adresą.');

  }
})

emailInput.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
})