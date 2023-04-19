const emailForm = document.querySelector('form');
const succesIcon = document.getElementById('succes-icon');

const showSuccesMessage = () => {
    succesIcon.style.display = 'block';

    setTimeout(()=> {
        succesIcon.style.display = 'none';
    },3000)
}

postToGoogleSheet = (event) => {
    event.preventDefault();
    const formData = new FormData(emailForm);

    const formValues = {
        name: 'Kajakas',
        email: formData.get('email'),
        phone: 'Kajakas'
    }

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    setTimeout(() => {

        fetch(`https://script.google.com/macros/s/AKfycbxYGwpzOVK3X7tflM6Uvmryg_Et3mtaUktRxAxqtzmG946BS6h4PwWCLMzP6vb0XLZpYg/exec?name=${formValues.name}&email=${formValues.email}&phoneNumber=${formValues.phone}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result), showSuccesMessage())
        .catch(error => console.log('error', error));
    }, 1000)
}

emailForm.addEventListener('submit', (event) => postToGoogleSheet(event));