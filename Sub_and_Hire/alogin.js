const loginForms = document.querySelector("#adminlogin");

const resolvePathname = (path) => {
  let host = window.location.host;
  let local = "127.0.0.1";
  let gitHost = "fidesnoella.github.io";
  if (host.startsWith(local)) {
    return path;
  } else if (host.startsWith(gitHost)) {
    let newPath = "/portifolio" + path;
    return newPath;
  } else {
    return path;
  }
};

loginForms.addEventListener("submit", (e) => {
  e.preventDefault();
console.log(`hello`)
  // get  info
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  

  fetch(`https://noella-atlp.herokuapp.com/admin/login`, {
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
      loginForms.reset();
      setTimeout(() => {
        window.location.pathname = resolvePathname("/admin.html");
      }, 1000);
    })
    .catch(function (error) {
      localStorage.setItem("token", null);
      console.warn("Something went wrong.", error);
      swal("Admin only allowed", "error occured");
    });
});
