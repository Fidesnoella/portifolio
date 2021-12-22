
const form = document.getElementById(`form`);
const names = document.getElementById(`names`);
const email = document.getElementById(`email`);
const phone = document.getElementById(`phone`);
const message = document.getElementById(`message`);

form.addEventListener('submit', e => {
  
  sendMessages(namesValue, emailValue, phoneValue,messageValue);



  if (isFormValid() == true) {
      form.submit();
      alert(`We Are Happy To Hear From You!!`);
  }else{
      e.preventDefault();
  }
}); 

function isFormValid(){
  const inputContainers = form.querySelectorAll('.form-group');
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

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

const setError = (element, message) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector('.error');

  errorDisplay.innerText = message;
  formGroup.classList.add('error');
  formGroup.classList.remove('success')
}

const setSuccess = element => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector('.error');

  errorDisplay.innerText = '';
  formGroup.classList.add('success');
  formGroup.classList.remove('error');
};

const sendMessages = () => {
  const namesValue = names.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

 
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

  if(phoneValue === '') {
    setError(phone, '*Phone is required');
} else if (!isValidPhone (phoneValue)) {
    setError(phone, '*Provide a valid phone number');
} else {
    setSuccess(phone);
}
  if(messageValue === '') {
      setError(message, '*Please give us your feedback');
  } else if (messageValue.length < 5) {
      setError(message, "*Message must be atleast 5 character");
  } else {
      setSuccess(message);
  }

};



  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDOlvMm2VN6viYiQcGPX7wEYkh3Wsx4YyQ",
    authDomain: "portifolio-f94f6.firebaseapp.com",
    databaseURL: "https://portifolio-f94f6-default-rtdb.firebaseio.com",
    projectId: "portifolio-f94f6",
    storageBucket: "portifolio-f94f6.appspot.com",
    messagingSenderId: "1005477449453",
    appId: "1:1005477449453:web:ff1579b2db548ccbb446e4"
  };

firebase.initializeApp(firebaseConfig)


//Reference for form collection(3)
let formMessage = firebase.database().ref('contactinfo');

//listen for submit event//(1)
document
  .getElementById('form')
  .addEventListener('submit', formSubmit);


// document.getElementById('registrationform').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let names = document.querySelector('#names').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let message = document.querySelector('#message').value;


  //send message values
  sendMessage(names, email, phone, message);

alert('Thank you for your feedback')
  //Form Reset After Submission(7)
  document.getElementById('form').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, phone, message) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}










