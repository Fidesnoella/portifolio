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
var con = firebase.database().ref('contactInfo');

// const form = document.getElementById(`form`);
// const names = document.getElementById(`names`);
// const email = document.getElementById(`email`);
// const phone = document.getElementById(`phone`);
// const message = document.getElementById(`message`);

// form.addEventListener('submit', e => {

//   if (isFormValid() == true) {
//     form.submit();
//     alert(`We Are Happy To Hear From You!!`);
// }else{
//     e.preventDefault();
// }
//   var contactInfo = con.push();
//   contactInfo.set({
//    name: getId("names"),
//    email: getId("email"),
//    phone: getId("phone"),
//    message: getId("message")
//   });
//   alert("Thank you for your feedback");
//   document.getElementById("form").reset();

 
 
// }); 
// function getId(id){
//   return document.getElementById(id).value;
// }


// function isFormValid(){
//   const inputContainers = form.querySelectorAll('.form-group');
//  let result = true;
//   inputContainers.forEach((container)=>{
//      if (container.classList.contains('error')) {
//          result= false;
//      }
//   });
//   return result;
// }
// const isValidEmail = email => {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }
// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
// const namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

// const isValidPhone = (phone) => {
//   const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
//   return re.test(String(phone).toLowerCase());
// };

// const setError = (element, message) => {
//   const formGroup = element.parentElement;
//   const errorDisplay = formGroup.querySelector('.error');

//   errorDisplay.innerText = message;
//   formGroup.classList.add('error');
//   formGroup.classList.remove('success')
// }

// const setSuccess = element => {
//   const formGroup = element.parentElement;
//   const errorDisplay = formGroup.querySelector('.error');

//   errorDisplay.innerText = '';
//   formGroup.classList.add('success');
//   formGroup.classList.remove('error');
// };

// const sendMessages = () => {
//   const namesValue = names.value.trim();
//   const emailValue = email.value.trim();
//   const phoneValue = phone.value.trim();
//   const messageValue = message.value.trim();

 
//    if (namesValue  === '') {
//       setError(names,'*Name Required' );
//   }else if(namesValue.length<4){
//       setError(names,'*Name must be atleast 3 character' );
//     }else if (namePattern.test(namesValue) ){
//       setSuccess(names);
    
//     }

//   if(emailValue === '') {
//       setError(email, '*Email is required');
//   } else if (!isValidEmail(emailValue)) {
//       setError(email, '*Provide a valid email address');
//   } else {
//       setSuccess(email);
//   }

//   if(phoneValue === '') {
//     setError(phone, '*Phone is required');
// } else if (!isValidPhone (phoneValue)) {
//     setError(phone, '*Provide a valid phone number');
// } else {
//     setSuccess(phone);
// }
//   if(messageValue === '') {
//       setError(message, '*Please give us your feedback');
//   } else if (messageValue.length < 5) {
//       setError(message, "*Message must be atleast 5 character");
//   } else {
//       setSuccess(message);
//   }

// };



















var validate = () => {
  let names = document.getElementById("names");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let message = document.getElementById("message");
  let nameInner = document.getElementById("nameInnerText");
  let emailInner = document.getElementById("emailInnerText");
  let phoneInner = document.getElementById("phoneInnerText");
  let messageInner = document.getElementById("messageInnerText");
  const submit = document.querySelector("#sent");

  var nameIndicator = document.getElementById("nameValid");

  var namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

  //validating name

  names.addEventListener("keyup", () => {
    if (names.value.match(namePattern)) {
      nameIndicator.classList.add("valid");
      nameIndicator.classList.remove("invalid");
      nameInnerText.innerHTML = "name is valid";
      nameInnerText.style.color = "#00ff00";
    } else {
      nameIndicator.classList.add("invalid");
      nameIndicator.classList.remove("valid");
      nameInnerText.innerHTML = "name is invalid";
      nameInnerText.style.color = "#ff0000";
    }
    if (names.value == "") {
      nameIndicator.classList.remove("invalid");
      nameIndicator.classList.remove("valid");
    }
  });

  //validating email

  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  var emailIndicator = document.getElementById("emailValid");

  email.addEventListener("keyup", () => {
    if (email.value.match(emailPattern)) {
      emailIndicator.classList.add("valid");
      emailIndicator.classList.remove("invalid");
      emailInnerText.innerHTML = "Your email is valid.";
      emailInnerText.style.color = "#00ff00";
    } else {
      emailIndicator.classList.add("invalid");
      emailIndicator.classList.remove("valid");
      emailInnerText.innerHTML = "You entered invalid email.";
      emailInnerText.style.color = "#ff0000";
    }
    if (email.value == "") {
      emailIndicator.classList.remove("invalid");
      emailIndicator.classList.remove("valid");
    }
  });

  //validating phone


  var phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  var phoneIndicator = document.getElementById("phoneValid");

  phone.addEventListener("keyup", () => {
    if (phone.value.match(phonePattern)) {
      phoneIndicator.classList.add("valid");
      phoneIndicator.classList.remove("invalid");
      phoneInnerText.innerHTML = "You entered valid phone number";
      phoneInnerText.style.color = "#00ff00";
    } else {
      phoneIndicator.classList.add("invalid");
      phoneIndicator.classList.remove("valid");
      phoneInnerText.innerHTML = "You entered invalid phone number";
      phoneInnerText.style.color = "#ff0000";
    }

  });
  
  // validating message

  var messageIndicator = document.getElementById("messageValid");

  message.addEventListener("keyup", () => {
    if (message.value == "") {
      messageIndicator.classList.remove("invalid");
      messageIndicator.classList.remove("valid");
      messageInnerText.innerHTML = "Message can not be empty";
      messageInnerText.style.color = "#ff0000";
      
    } else {
      messageIndicator.classList.remove("valid");
      messageIndicator.classList.remove("invalid");
      messageInnerText.innerHTML = "You entered Message";
      messageInnerText.style.color = "#00ff00";
    }
  });

  //disabling button over Errors of empty submission

 
  
};

var form = document.getElementById("form");

form.addEventListener("change", () => {
  validate();
  var contactInfo = con.push();
    contactInfo.set({
     name: getId("names"),
     email: getId("email"),
     phone: getId("phone"),
     message: getId("message")
    });


});

document.getElementById("form").reset();
alert("Thank you for your feedback");

function getId(id){
  return document.getElementById(id).value;
}
if (
  !names.value.match(namePattern) ||
  !email.value.match(emailPattern) ||
  !phone.value.match(phonePattern) ||
  !message.value !== ""
) {
  submit.disabled = true;
  
 
} else {
  submit.disabled = false;

}