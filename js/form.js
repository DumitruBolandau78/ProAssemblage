const nameForm = document.getElementById('name'),
    emailForm = document.getElementById('email'),
    messageForm = document.getElementById('message'),
    submitForm = document.getElementById('submit'),
    form = document.querySelector('.form');

submitForm.addEventListener('click', () => {
    if(nameForm.value == '' || emailForm.value == '' || messageForm.value == ''){
        alert('Please fill the form!');
    } else {
        nameForm.value = '';
        emailForm.value = '';
        messageForm.value = '';
    }
});