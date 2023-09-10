const signup = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#name-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  if (name && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      document.getElementById("sign-up-fail").innerHTML =
        "&nbsp&nbsp&nbsp&nbsp&nbspExisting User";
    }
  }
};
document.querySelector(".signup-button").addEventListener("click", signup);
