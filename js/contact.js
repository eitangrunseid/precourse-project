
const submitBtn = document.querySelector('.form-btn');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const textArea = document.querySelector('.text-area');
const inputs = document.querySelectorAll('input')


for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function () {
                if (firstName.value !== '' && lastName.value !== '' &&
                email.value !== '') {
                        submitBtn.disabled = false;
                } else  {
                        submitBtn.disabled = true;
                }
        });
}
submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(`First Name: ${firstName.value} , Last Name: ${lastName.value} ,
        Email: ${email.value} , Comment: ${textArea.value}`);
}, false);
