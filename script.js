const emailInput = document.querySelector('.input[type="email"]');
const errorrAlert = document.getElementsByClassName('error-alert');
const width = window.matchMedia("(max-width: 500px)")

const showSuccesMessage = () => {
  emailInput.value = 'Jūsų užklausą gavome. Netrukus susisieksime!';
  emailInput.style.color = '#1F8CC5';

  function fontSize12(width) {
    if (width.matches) {
      emailInput.style.fontSize = "12px";
    }
  }
  fontSize12(width)
  width.addListener(fontSize12)

  setTimeout(() => {
    emailInput.value = '';
    emailInput.style.color = 'black';
    function fontSize16(width) {
      if (width.matches) {
        emailInput.style.fontSize = "16px";
      }
    }
    fontSize16(width)
    width.addListener(fontSize16)
  }, 4000)
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
    errorrAlert[0].style.display = 'block';
  }
})

emailInput.addEventListener('change', function (event) {
  errorrAlert[0].style.display = 'none';
})

emailInput.addEventListener('invalid', (function () {
  return function (e) {
    e.preventDefault();
  };
})(), true);