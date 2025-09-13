// Save new user & login
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");
  const logoutBtn = document.getElementById("logoutBtn");
  const userNameDisplay = document.getElementById("userName");

  // Signup
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (localStorage.getItem(username)) {
        alert("User already exists. Please log in.");
      } else {
        localStorage.setItem(username, password);
        alert("Account created successfully! Please log in.");
        window.location.href = "login.html";
      }
    });
  }

  // Login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value.trim();
      const password = document.getElementById("loginPassword").value.trim();

      const storedPassword = localStorage.getItem(username);

      if (storedPassword && storedPassword === password) {
        localStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  }

  // Dashboard
  if (userNameDisplay) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      alert("You must log in first!");
      window.location.href = "login.html";
    } else {
      userNameDisplay.textContent = loggedInUser;
    }
  }

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      alert("Logged out successfully.");
      window.location.href = "index.html";
    });
  }
});
