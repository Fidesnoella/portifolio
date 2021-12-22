
 let form = document.getElementById('registrationform');
 let names = document.getElementById('names');
 let email = document.getElementById('email');
 let password = document.getElementById('password');
 let password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  
    validateInputs();

    if (isFormValid() == true) {
        form.submit();
    }else{
        e.preventDefault();
    }
}); 

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-type');
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
const namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

const setError = (element, message) => {
    const inputType = element.parentElement;
    const errorDisplay = inputType.querySelector('.error');

    errorDisplay.innerText = message;
    inputType.classList.add('error');
    inputType.classList.remove('success')
}

const setSuccess = element => {
    const inputType = element.parentElement;
    const errorDisplay = inputType.querySelector('.error');

    errorDisplay.innerText = '';
    inputType.classList.add('success');
    inputType.classList.remove('error');
};

const validateInputs = () => {
    const namesValue = names.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

   
     if (namesValue  === '') {
        setError(names,'*Name Required' );
    }else if(namesValue.length<4){
        setError(names,'*Name must be atleast 3 character' );
      }else if (namePattern.test(namesValue) ){
        setSuccess(names);
      
      }

    if(emailValue === '') {
        setError(email, '*Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '*Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, '*Password is required ');
    }else if (passwordValue.length<8) {
        setError(password, '*Password must be atleast 8 character');
    }else if(strongRegex.test(passwordValue)) {
        setSuccess(password);
    }else{
        setError(password, '*Password must contain 1 uppercase,1 lowercase, number and symbol');
    }

    if(password2Value === '') {
        setError(password2, '*Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "*Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

