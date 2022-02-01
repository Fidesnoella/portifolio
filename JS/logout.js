function logout(){
 localStorage.setItem("token", null);
 window.location.pathname = "./index.html"
}