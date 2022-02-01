function auth() {
  const token = localStorage.getItem("token");
  if (token == null || token == undefined) {
    window.location.pathname = "./signup.html"
  }
}
auth();


