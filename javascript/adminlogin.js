function login() {
  let nameelement = document.getElementById("name");
  let passelement = document.getElementById("password");
  let name = nameelement.value;
  let password = passelement.value;
  if (name == "Disha" && password == 123456) {
    alert("Login successfully!..");
    
  } else {
    alert("Invalid name or password");
    nameelement.value = " ";
    passelement.value = " ";
  }
}
