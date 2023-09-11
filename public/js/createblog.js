const createblog = async () => {
  const title = document.querySelector("#blog-title").value.trim();
  const body = document.querySelector("#textarea").value.trim();
  if (title && body) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({
        body,
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/api/dashboard");
    } else {
      alert("unable to create");
    }
  }
};

document.querySelector(".create-blog").addEventListener("click", createblog);
