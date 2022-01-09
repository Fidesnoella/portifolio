
var validate = () => {
  let names = document.getElementById("names");
  let email = document.getElementById("emails");
  let password1 = document.getElementById("password1");
  let password2 = document.getElementById("password2");
  let nameInner = document.getElementById("nameInnerText");
  let emailInner = document.getElementById("emailInnerText");
  let pswd1Inner = document.getElementById("pswd1InnerText");
  let pswd2Inner = document.getElementById("pswd2InnerText");
  const submit = document.querySelector("#submit");

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

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
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

  //validating password

  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}$/;

  var passwordIndicator = document.getElementById("password1Valid");

  password1.addEventListener("keyup", () => {
    if (password1.value.match(passwordPattern)) {
      passwordIndicator.classList.add("valid");
      passwordIndicator.classList.remove("invalid");
      pswd1InnerText.innerHTML = "You entered valid password";
      pswd1InnerText.style.color = "#00ff00";
    } else {
      passwordIndicator.classList.add("invalid");
      passwordIndicator.classList.remove("valid");
      pswd1InnerText.innerHTML =
        " -should be at least 3 chracter <br>- 1 uppercase, 1 lowercase, a number.";
      pswd1InnerText.style.color = "#ff0000";
    }
    if (password1.value == "") {
      passwordIndicator.classList.remove("invalid");
      passwordIndicator.classList.remove("valid");
    }
  });
  
  // validating pswd2

  var password2Indicator = document.getElementById("password2Valid");

  password2.addEventListener("keyup", () => {
    if (password1.value === password2.value) {
      password2Indicator.classList.add("valid");
      password2Indicator.classList.remove("invalid");
      console.log("password matched");
    } else {
      password2Indicator.classList.add("invalid");
      password2Indicator.classList.remove("valid");
    }
    if (password2.value == "") {
      password2Indicator.classList.remove("invalid");
      password2Indicator.classList.remove("valid");
    }
  });

  //disabling button over Errors of empty submission

  if (
    !names.value.match(namePattern) ||
    !email.value.match(emailPattern) ||
    !password1.value.match(passwordPattern) ||
    !password1.value === password2.value
  ) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
};

var con = firebase.database().ref('userInfo');

var form = document.getElementById("createAccount");

form.addEventListener("change", () => {
  validate();

  var userInfo = con.push();
  userInfo.set({
   name: getId("names"),
   email: getId("emails"),
  });
 
  document.getElementById("form").reset();
});
function getId(id){
  return document.getElementById(id).value;
}






// Sign in 


var validates = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let emailInnerText = document.getElementById("emailInnerTexts");
  let pswdInnerText = document.getElementById("pswdInnerText");
  const submit = document.querySelector("#submits");

 
  //validating email

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
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

  //validating password

  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}$/;

  var passwordIndicator = document.getElementById("password1Valid");

  password.addEventListener("keyup", () => {
    if (password.value.match(passwordPattern)) {
      passwordIndicator.classList.add("valid");
      passwordIndicator.classList.remove("invalid");
      pswdInnerText.innerHTML = "You entered valid password";
      pswdInnerText.style.color = "#00ff00";
    } else {
      passwordIndicator.classList.add("invalid");
      passwordIndicator.classList.remove("valid");
      pswdInnerText.innerHTML =
        " -should be at least 3 chracter <br>- 1 uppercase, 1 lowercase, a number.";
      pswdInnerText.style.color = "#ff0000";
    }
    if (password.value == "") {
      passwordIndicator.classList.remove("invalid");
      passwordIndicator.classList.remove("valid");
    }
  });


  //disabling button over Errors of empty submission

  if (
    !email.value.match(emailPattern) ||
    !password.value.match(passwordPattern) 
  ) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
};

var forms = document.getElementById("login");

forms.addEventListener("change", () => {
  validates();
});






// form.addEventListener('submit', e => {

//     validateInputs();

//     if (isFormValid() == true) {
//         form.submit();
//     }else{
//         e.preventDefault();
//     }
// });

// function isFormValid(){
//     const inputContainers = form.querySelectorAll('.form__input-group');
//    let result = true;
//     inputContainers.forEach((container)=>{
//        if (container.classList.contains('error')) {
//            result= false;
//        }
//     });
//     return result;
// }
// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
// const namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

// const setError = (element, message) => {
//     const inputType = element.parentElement;
//     const errorDisplay = inputType.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputType.classList.add('error');
//     inputType.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputType = element.parentElement;
//     const errorDisplay = inputType.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputType.classList.add('success');
//     inputType.classList.remove('error');
// };

// const validateInputs = () => {
//     const namesValue = names.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password1.value.trim();
//     const password2Value = password2.value.trim();

//      if (namesValue  === '') {
//         setError(names,'*Name Required' );
//     }else if(namesValue.length<4){
//         setError(names,'*Name must be atleast 3 character' );
//       }else if (namePattern.test(namesValue) ){
//         setSuccess(names);

//       }

//     if(emailValue === '') {
//         setError(email, '*Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, '*Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, '*Password is required ');
//     }else if (passwordValue.length<8) {
//         setError(password1, '*Password must be atleast 8 character');
//     }else if(strongRegex.test(passwordValue)) {
//         setSuccess(password1);
//     }else{
//         setError(password1, '*Password must contain 1 uppercase,1 lowercase, number and symbol');
//     }

//     if(password2Value === '') {
//         setError(password2, '*Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "*Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }

// };

// let formMessage = firebase.database().ref("user");
// const createAccount = document.querySelector("#createAccount");
// createAccount.addEventListener("submit", (e) => {
//   e.preventDefault();

//   names = document.getElementById("names");
//   emails = document.getElementById("emails");
//   password1 = document.getElementById("password1");
//   password2 = document.getElementById("passwordtwo");

//   app_firebase
//     .auth()
//     .createUserWithEmailAndPassword(emails.value, password1.value);
//   console.log(auth);
//   swal("Account successfully created!");

//   createAccount.reset();

//   setTimeout(() => {
//     window.location.pathname = "./signup.html";
//   }, 1000);

//   //  sendMessage(names, email);

//   //  alert('Signed up')

//   //Form Reset After Submission(7)
//   document.getElementById("createAccount").reset();
// });

// let formMessage = firebase.database().ref('user');

// //listen for submit event//(1)
// document
//   .getElementById('form')
//   .addEventListener('submit', formSubmit);

// document.getElementById('registrationform').addEventListener('submit', formSubmit);

// //Submit formfunction formSubmit(e) {
//   e.preventDefault();

//  // Get Values from the DOM
//   let names = document.querySelector('#names').value;
//   let email = document.querySelector('#email').value;
//   let phone = document.querySelector('#phone').value;
//   let message = document.querySelector('#message').value;

//   //send message values
//   sendMessage(names, email, phone, message);

// alert('Thank you for your feedback')
//   //Form Reset After Submission(7)
//   document.getElementById('form').reset();
// }

//         // Send Message to Firebase(4)

// function sendMessage(names, email) {
//   let newFormMessage = formMessage.push();
//   newFormMessage.set({
//     names: names,
//     email: email
//   });
// }

// function signout(){
//   firebase.auth().signOut();
//   alert('Hi');
//   window.location='/.index.html';
// }
