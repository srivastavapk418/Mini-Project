async function handleLogout() {
  let user = JSON.parse(localStorage.getItem("authData"));
  const text = document.getElementById("logoutButton").innerText;
  console.log("text ", text);
  if (text === "Logout") {
    console.log("on if ");
    let obj = {
      accessToken: user.accessToken,
      userId: user.userId,
    };
    let res = await fetch("https://style-backend-qtre.onrender.com/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    let data = await res.json();
    if (data.status) {
      localStorage.setItem("authData", JSON.stringify({}));
      window.location.href = "../Login/Login_Page.html";
    } else {
      alert(data.message);
    }
  }
}
let user = JSON.parse(localStorage.getItem("userData"));
let auth = JSON.parse(localStorage.getItem("authData"));
if (user && auth) {
  document.getElementById("userName").innerText = "Hello, " + user.firstName;
  document.getElementById("logoutButton").innerText = "Logout";
} else {
  document.getElementById("userName").innerText = "Login/SignUp";
  document.getElementById("logoutButton").innerText = "";
}
async function handleSignIn() {
  const val = document.getElementById("userName").innerText;
  if (val == "Login/SignUp") {
    window.location.href = "../Login/Login_Page.html";
  }
}
function topButton() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

