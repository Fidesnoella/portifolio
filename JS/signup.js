
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
  
  //disabling button over Errors of empty submission

  // if (
  //   !names.value.match(namePattern) ||
  //   !email.value.match(emailPattern) ||
  //   !password1.value.match(passwordPattern) 
  // ) {
  //   submit.disabled = true;
  // } else {
  //   submit.disabled = false;
  // }
};

var form = document.getElementById("createAccount");

form.addEventListener("change", () => {
  validate(); 
  // document.getElementById("form").reset();
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

  // if (
  //   !email.value.match(emailPattern) &&
  //   !password.value.match(passwordPattern) 
  // ) {
  //   submit.disabled = true;
  // } else {
  //   submit.disabled = false;
  // }
};

var forms = document.getElementById("login");

forms.addEventListener("change", () => {
  validates();
});





