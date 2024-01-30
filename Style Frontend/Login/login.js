async function handleLogin() {
  event.preventDefault();
  let obj = {
    phone: "+91" + form.number.value,
    password: form.password.value,
  };
  let res = await fetch("https://style-backend-qtre.onrender.com/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  let data = await res.json();
  if (data.status) {
    localStorage.setItem("authData", JSON.stringify(data.data));
    window.location.href = "../HomePage/index.html";
  } else {
    alert(data.message);
  }
}
