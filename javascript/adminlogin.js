function login() {
  let nameelement = document.getElementById("name");
  let passelement = document.getElementById("password");
  let name = nameelement.value;
  let password = passelement.value;
  if (name == "Disha" && password == 123456) {
    alert("Login successfully!..");
    // how i can redirect from login page to admin dashboard ex:(admindashboard.html)
  } else {
    alert("Invalid name or password");
    nameelement.value = " ";
    passelement.value = " ";
  }
}
