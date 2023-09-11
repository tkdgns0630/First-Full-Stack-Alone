const logout = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    return;
  } else {
    alert(response.statusText);
  }
};


document.querySelector("#logout").addEventListener("click", logout);
