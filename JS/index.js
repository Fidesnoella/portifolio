const loginForm = document.querySelector("#login");


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // log the user in

  fetch(`https://noella-atlp.herokuapp.com/users/login`, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify({ email: email, password: password }),
  })
    .then(function (response) {
      if (response.ok) {
        return Promise.resolve(response.json());
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      const token = data.token;
      localStorage.setItem("token", token);
      loginForm.reset();
      setTimeout(() => {
        window.location.pathname = "./blog.html";
      }, 1000);
    })
    .catch(function (error) {
      localStorage.setItem("token", null);
      console.warn("Something went wrong.", error);
      swal("Email or password does not exist!", "error occured");
    });
});
