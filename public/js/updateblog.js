const create = async () => {
  const title = document.querySelector("#blog-title").value.trim();
  const body = document.querySelector("#textarea").value.trim();
  const blogId = document.querySelector("#blog-id").value;

  if (title && body) {
    const response = await fetch(`/api/dashboard/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({
        blogId,
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
      alert("unable to update blog");
    }
  }
};

document.querySelector(".create-but").addEventListener("click", create);
// document.querySelector('.del-but').addEventListener('click', delete);
