async function mynum() {
  event.preventDefault();
  let obj = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    phone: "+91" + form.number.value,
    password: form.password.value,
    email: form.email.value,
  };
  let res = await fetch("https://style-backend-qtre.onrender.com/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  let data = await res.json();
  if (data.status) {
    localStorage.setItem("userData", JSON.stringify(obj));
    window.location.href = "../verifyOtp/otp.html";
  } else {
    alert(data.message);
    window.location.reload();
  }
}
