let formMessage = firebase.database().ref('user');
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
 e.preventDefault();


 names = document.getElementById('names');
 email = document.getElementById('email');
password = document.getElementById('password');
  password2 = document.getElementById('password2');


 app_firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
 console.log(auth);
signupForm.reset();
 setTimeout(() => {
          window.location.pathname = "/login.html";
        }, 1000)
 .catch(error => {
   console.log(error.message);
 })


 sendMessage(names, email);

 alert('Signed up')
   //Form Reset After Submission(7)
   document.getElementById('signup-form').reset();
});


// let formMessage = firebase.database().ref('user');

// //listen for submit event//(1)
// document
//   .getElementById('form')
//   .addEventListener('submit', formSubmit);


// // document.getElementById('registrationform').addEventListener('submit', formSubmit);

// //Submit form
// function formSubmit(e) {
//   e.preventDefault();
//   // Get Values from the DOM
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

//Send Message to Firebase(4)

function sendMessage(names, email) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    names: names,
    email: email
  });
}




