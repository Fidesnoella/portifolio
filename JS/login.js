const form = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
  
    validateInput();

    if (isFormValid() == true) {
        form.submit();
    }else{
        e.preventDefault();
    }
}); 

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input');
   let result = true;
    inputContainers.forEach((container)=>{
       if (container.classList.contains('error')) {
           result= false;
       }
    });
    return result;
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success')
}

const setSuccess = element => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
};

const validateInput = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
   

    if(emailValue === '') {
        setError(email, '*Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '*Provide a valid email address');
    } else {
        setSuccess(email);
    }
   
    if(passwordValue === '') {
        setError(password, '*Password is required ');
    }else if (passwordValue.length < 8) {
        setError(password, '*Password must be atleast 8 character');
    }else if(strongRegex.test(passwordValue)) {
        setSuccess(password);
    }else{
        setError(password, '*Password must contain 1 uppercase,1 lowercase, number and symbol');
    }

};

