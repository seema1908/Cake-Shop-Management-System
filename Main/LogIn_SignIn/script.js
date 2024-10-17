// Toggle between Login and Sign-up
const toggleSignup = document.getElementById("toggle-signup");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const loginForm = document.getElementById("login-form");

let isLogin = true; // Initially in login mode

toggleSignup.addEventListener("click", () => {
  if (isLogin) {
    formTitle.textContent = "Sign Up";
    submitBtn.textContent = "Sign Up";
    toggleSignup.textContent = "Already have an account? Login";
  } else {
    formTitle.textContent = "Login";
    submitBtn.textContent = "Login";
    toggleSignup.textContent = "Don't have an account? Sign up";
  }
  isLogin = !isLogin; // Toggle the form state
});

// Handle Form Submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (isLogin) {
    // Login logic
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      alert("Login successful! Welcome to the Cake Shop!");
      // Redirect to another page or load the website content here
      window.location.href = "/Main/Cover_page/Index.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  } else {
    // Sign-up logic
    const user = {
      username: username,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created successfully! Please log in.");
    formTitle.textContent = "Login";
    submitBtn.textContent = "Login";
    toggleSignup.textContent = "Don't have an account? Sign up";
    isLogin = true; // Switch back to login mode
  }
});
