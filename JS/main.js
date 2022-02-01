

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

const signupForm = document.getElementById("createAccount");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let names, password1, emails;
  names = document.getElementById("names").value;
  password1 = document.getElementById("password1").value;
  emails = document.getElementById("emails").value;
  // signupRegister(names, password1, passwordtwo, emails);
  fetch(`https://noella-atlp.herokuapp.com/users/signup`, {method: "POST",
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },

  body: JSON.stringify({full_name: names, email: emails, password: password1})

  })
     
  .then(function (response) {
    if (response.ok) {
      return Promise.resolve(response.json());
    }
    return Promise.reject(response);
  })
  .then(function (data) {
    console.log(data)
    signupForm.reset();
    setTimeout(() => {
      window.location.pathname = "./signup.html";
    }, 1000);
  })
  .catch(function (error) {
    console.warn("Something went wrong.", error);
    swal("Error", "error occured");
  });
});




