export const register = async (value) => {
  try {
    console.log('Inside register function',value)
    let res = await fetch("https://style-backend-qtre.onrender.com/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: value
    });
    let data = await res.json();
    console.log("Response in register api", data);
    return data
  } catch (err) {
    console.log("Error in register api", err);
  }
};
