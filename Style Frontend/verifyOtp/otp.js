async function mynum() {
  let user = JSON.parse(localStorage.getItem("userData"));
  let obj = {
    phone: user.phone,
  };
  let res = await fetch("https://style-backend-qtre.onrender.com/resend", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  let data = await res.json();
  if (!data.status) {
    window.location.reload();
  }
}

async function handleSubmit() {
  const otp = document.querySelector("#otp").value;
  if (otp.length < 5 || otp.length < 5) {
    alert("Otp code must contain 5 numbers");
  } else {
    let user = JSON.parse(localStorage.getItem("userData"));
    let obj = {
      phone: user.phone,
      otpCode: otp,
    };
    let res = await fetch("https://style-backend-qtre.onrender.com/verify", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await res.json();
    if (data.status) {
      window.location.href = "../Login/Login_Page.html";
    } else {
      window.location.reload();
    }
  }
}
