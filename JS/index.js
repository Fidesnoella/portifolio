

// const loginForm = document.querySelector('#login');
//  loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   // get user info
//   var email =  document.getElementById('email').value;
//    var password= document.getElementById('password').value;
 

//   // log the user in
//   auth.signInWithEmailAndPassword(email, password).then((cred) => {
//     console.log(auth);
//     loginForm.reset();
//     setTimeout(() => {
//         window.location.pathname = "./blog.html";
//       }, 1000)
// .catch(error => {
//  alert(error.message);

// })
//   });

// });




// function signInWithEmailPassword() {
//   var email = document.getElementById(`email`).value;
//   var password = document.getElementById(`password`).value;
//   // [START auth_signin_password]
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in
//       var user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//     });
//   // [END auth_signin_password]
// }

// function signUpWithEmailPassword() {
//   var emails = document.getElementById(`emails`).value;
//   var password1 = document.getElementById(`password1`).value;
//   // [START auth_signup_password]
//   firebase.auth().createUserWithEmailAndPassword(emails, password1)
//     .then((userCredential) => {
//       // Signed in 
//       var user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ..
//     });
//   // [END auth_signup_password]
// }







const loginForm = document.querySelector('#login');
 loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // // get user info
  var email =  document.getElementById('email').value;
   var password= document.getElementById('password').value;
 
  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    loginForm.reset();
    setTimeout(() => {
        window.location.pathname = "./blog.html";
      }, 1000)
 }) 
 .catch((error) => {
 swal( "Email or password does not exist!", "error occured");
});

 })
