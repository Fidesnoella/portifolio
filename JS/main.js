

document.addEventListener("DOMContentLoaded", () =>{
  const loginForm = document.querySelector("#login");
  const CreatAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click",(e)=>{
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      CreatAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click",(e)=>{
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      CreatAccountForm.classList.add("form--hidden");
  });
 
});


document.getElementById("createAccount").addEventListener("submit", (e) => {
  e.preventDefault();
  let names, password1, password2, emails;
  names = document.getElementById("names").value;
  password1 = document.getElementById("password1").value;
  password2 = document.getElementById("password2").value;
  emails = document.getElementById("emails").value;
  // signupRegister(names, password1, passwordtwo, emails);

  app_firebase
    .auth()
    .createUserWithEmailAndPassword(emails, password1)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("User created");
      swal("Signed Up!", "Account created!", "success");
      user.updateProfile({
        displayName: names,
      });
      setTimeout(() => {
        window.location.pathname = "./signup.html";
      }, 4000);
    })
    .catch((error) => {
      swal( "Account already exist!", "error");
    });
});

// var con = firebase.database().ref('userInfo');

// form.addEventListener('submit', e => {

//   var userInfo = con.push();
//   userInfo.set({
//    name: getId("names"),
//    email: getId("emails"),
//   });

//   document.getElementById("createAccount").reset();

 
 
// }); 
// function getId(id){
//   return document.getElementById(id).value;
// }






