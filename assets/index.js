// function alertUser() {
//   alert("Sign in successful!");
// }
// function NotResponsive() {
//   alert("Applications are closed for now, please try again next symester!");
// }

function validateSignin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const predefinedUsername = "admin"; //
  const predefinedPassword = "admin123";

  if (username === predefinedUsername && password === predefinedPassword) {
    document.getElementById("result").innerHTML = "Sign in successful!";
  } else {
    document.getElementById("result").innerHTML =
      "Invalid username or password.";
  }
}

// validateSignin();
