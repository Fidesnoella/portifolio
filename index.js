//=============== Sign up page  ===============================================================

formSubmit.addEventListner("click", (e)=>{ 
    e.preventDefault();
});
 function validate() {
 
     let form = document.getElementById('form1');
     let email = document.getElementById('email').value;
     let names = document.getElementById('name').value;
     let username = document.getElementById('username').value;
     let password = document.getElementById('password').value;
     let password2 = document.getElementById('password2').value;

     let text1 = document.getElementById('text1')
     let text2 = document.getElementById('text2')
     let text3 = document.getElementById('text3')
     let text4 = document.getElementById('text4')
     let text5 = document.getElementById('text5')
     let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


     if (email.match(pattern)) {
         form.classList.add("valid");
         form.classList.remove("invalid");
         text2.innerHTML = "Your Email Address is valid";
         text2.style.color ="#00ff00";
        }else{
         form.classList.remove("valid");
         form.classList.add("invalid");
         text2.innerHTML = "*Please Enter Valid Email Address";
         text2.style.color = "#ff0000";
        }


if (names === '' ) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text1.innerHTML = "*Please Enter Your Full Name";
    text1.style.color = "#ff0000";
} else{
    form.classList.add("valid");
    form.classList.remove("invalid");
    text1.innerHTML = "Your Name are valid";
    text1.style.color ="#00ff00";
}


if (username === '' && username.length < 5 ) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text3.innerHTML = "*Please Enter Username of your choice";
    text3.style.color = "#ff0000"
}else{
    form.classList.add("valid");
    form.classList.remove("invalid");
    text3.innerHTML = "Your Username is valid";
    text3.style.color ="#00ff00";
}


if (password === '' ) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text4.innerHTML = "*Password is Required";
    text4.style.color = "#ff0000"
} else if (password.length < 8) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text4.innerHTML = "*Password must be atleast 8 character";
    text4.style.color = "#ff0000"
} else{
    form.classList.add("valid");
    form.classList.remove("invalid");
    text4.innerHTML = "Your Password is valid";
    text4.style.color ="#00ff00";
}

if (password2 === '') {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text5.innerHTML = "*Please Confirm your password";
    text5.style.color = "#ff0000"
}else if (password2 !== password) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text5.innerHTML = "*Password doesn't match";
    text5.style.color = "#ff0000"
}else{
    form.classList.add("valid");
    form.classList.remove("invalid");
    text5.innerHTML = "Password confirmed";
    text5.style.color ="#00ff00";
}
 }

 //=============== Contact page  ===============================================================
function validates(){
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let name = document.getElementById('names').value;
    let pnumber = document.getElementById('pnumber').value;
    let message = document.getElementById('message').value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    let text1 = document.getElementById('text1')
    let text2 = document.getElementById('text2')
    let text3 = document.getElementById('text3')
    let text4 = document.getElementById('text4')

    if (name === '' || name.length < 5) {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text1.innerHTML = "*Please Enter Your Name";
        text1.style.color = "#ff0000"
    } else{
        form.classList.add("valid");
        form.classList.remove("invalid");
        text1.innerHTML = "Your Name are valid";
        text1.style.color ="#00ff00";
    }
if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text2.innerHTML = "Your Email Address is valid";
    text2.style.color ="#00ff00";
   }else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text2.innerHTML = "*Please Enter Valid Email Address";
    text2.style.color = "#ff0000";
}

if (pnumber === '' ) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text3.innerHTML = "*Phone number can't be empty";
    text3.style.color = "#ff0000"
} else if (pnumber < 10) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text3.innerHTML = "*Invalid Phone Number";
    text3.style.color = "#ff0000"
} else if (pnumber >= 10) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text3.innerHTML = "Phone Number valid";
    text3.style.color ="#00ff00";
} else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text3.innerHTML = "*Invalid Phone Number";
    text3.style.color = "#ff0000"
}
if (message === '' && message.length < 5) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text4.innerHTML = "*Message can't be empty";
    text4.style.color = "#ff0000"
} else{
    form.classList.add("valid");
    form.classList.remove("invalid");
    text4.innerHTML = "Thank you for your message ";
    text4.style.color ="#00ff00";
}
}
// ==============================Login page==================================================
function checkInput(){
    let form = document.getElementById('form2');
    let useremail = document.getElementById('useremail').value;
    let password = document.getElementById('password').value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let text1 = document.getElementById('text1')
    let text2 = document.getElementById('text2')

    if (useremail === '') {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text1.innerHTML = "*Please Enter Username or Email";
        text1.style.color = "#ff0000";
    } else if (useremail.match(pattern) || useremail.length > 5) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text1.innerHTML = "Valid Input";
        text1.style.color ="#00ff00";
    } else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text1.innerHTML = "*Required Field";
        text1.style.color = "#ff0000";
    }

    if (password === '' ) {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text2.innerHTML = "*Password is Required";
        text2.style.color = "#ff0000"
    } else if (password.length < 8) {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text2.innerHTML = "*Password must be atleast 8 character";
        text2.style.color = "#ff0000"
    } else{
        form.classList.add("valid");
        form.classList.remove("invalid");
        text2.innerHTML = "Your Password is valid";
        text2.style.color ="#00ff00";
    }
    
}
// =================Forget passsword page========================================
