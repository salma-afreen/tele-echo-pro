function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  if(email === "" || password === "") {
    document.getElementById("error").innerText = "Login failed. Try again.";
    return;
  }

  localStorage.setItem("role", role);

  window.location.href = "dashboard.html";
}

// AUTO LOGOUT AFTER 15 MIN
setTimeout(() => {
  alert("Session expired");
  window.location.href = "index.html";
}, 900000);
