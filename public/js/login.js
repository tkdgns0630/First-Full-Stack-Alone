const login = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#login-name").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (name && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      document.getElementById("login-fail").innerHTML =
        "&nbsp&nbsp&nbsp&nbsp&nbspWrong name or password, Please try again.";
    }
  }
};

document.querySelector(".login-button").addEventListener("click", login);
