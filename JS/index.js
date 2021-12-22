

const loginForm = document.querySelector('#login-form');
 loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  var email =  document.getElementById('email').value;
   var password= document.getElementById('password').value;
 

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(auth);
    loginForm.reset();
    setTimeout(() => {
        window.location.pathname = "/blog.html";
      }, 1000)
.catch(error => {
 alert(error.message);

})
  });

});

function signout(){
    firebase.auth().signOut();
    alert('Hi');
    window.location='index.html';
}
