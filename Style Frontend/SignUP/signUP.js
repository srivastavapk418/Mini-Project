// import { register } from "../api/auth";

async function mynum() {
  event.preventDefault();
  let obj = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    phone: "+91" + form.number.value,
    password: form.password.value,
    email: form.email.value,
  };
  //   console.log(obj);
  let res = await fetch("https://style-backend-qtre.onrender.com/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  let data = await res.json();
  console.log("Response in register api", data);
  if (data.status) {
    localStorage.setItem("userData", JSON.stringify(obj));
    window.location.href = "../verifyOtp/otp.html";
  } else {
    window.location.reload();
  }

  //   const data = await register(obj);
  //   console.log(data);
  //   window.location.href = "../verifyOtp/otp.html";
  // window.location.reload()
}
