  const contactForm = document.querySelector("#form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
console.log(`hello`);
  // get  info
  var  names = document.getElementById("names").value;
    var  email  = document.getElementById("email").value;
    var  phone = document.getElementById("phone").value;
    var  message= document.getElementById('message').value;
     
   
  

  fetch(`https://noella-atlp.herokuapp.com/contact/contactInfo`, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify({ full_name: names, email: email, phone:phone, message:message }),
  })
  .then(function (response) {
    if (response.ok) {
      return Promise.resolve(response.json());
    }
    return Promise.reject(response);
  })
  .then(function (data) {
    console.log(data)
    contactForm.reset();
    swal("Thank you for your feedback", "SENT");
  })
  .catch(function (error) {
    console.warn("Something went wrong.", error);
    swal("error", "error occured");
  });
});
