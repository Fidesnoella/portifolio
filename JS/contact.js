
var validate = () => {
  let names = document.getElementById("names");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let message = document.getElementById("message");
  let nameInner = document.getElementById("nameInnerText");
  let emailInner = document.getElementById("emailInnerText");
  let phoneInner = document.getElementById("phoneInnerText");
  let messageInner = document.getElementById("messageInnerText");
 let submit = document.querySelector("#sent");

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
});

document.getElementById("form").reset();
// alert("Thank you for your feedback");

function getId(id){
  return document.getElementById(id).value;
}
// var namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
// const submit = document.querySelector("#sent");
// if (
//   !names.value.match(namePattern) ||
//   !email.value.match(emailPattern) ||
//   !phone.value.match(phonePattern) ||
//   !message.value !== ""
// ) {
//   submit.disabled = true;
  
 
// } else {
//   submit.disabled = false;

// }