document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      fetch("/login", {
        method: "POST",

        body: JSON.stringify({ username: "demo", password: "demo" }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Authentication failed");
          }
          return response.json();
        })
        .then((data) => {
          document.getElementById(
            "login-message"
          ).innerText = `Session ID: ${data.sessionId}`;
        })
        .catch((error) => {
          document.getElementById("login-message").innerText = error.message;
        });
    });
  }
});
v;
