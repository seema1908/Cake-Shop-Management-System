const button01 = document.getElementById("btn1");
const button02 = document.getElementById("btn2");

// Add an event listener to handle the button click
button01.addEventListener("click", () => {
  console.log("log in click");
  // Navigate to another page
  window.location.href = "/Main/LogIn_SignIn/index.html";
});

button02.addEventListener("click", () => {
  console.log("log in click");
  window.location.href = "/Main/LogIn_SignIn/index.html";
});
