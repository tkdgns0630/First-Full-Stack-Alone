//pass comment textarea data to /recipes/id
const commentFormHandler = async (event) => {
  event.preventDefault();
  const blogId = document.querySelector("#blog-id").value;
  const commentText = document.querySelector("#textarea").value;
  if (commentText) {
    const response = await fetch(`/api/comment/${blogId}`, {
      method: "POST",
      body: JSON.stringify({
        blogId,
        commentText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("unable to comment");
    }
  }
};

document
  .querySelector("#comment-but")
  .addEventListener("click", commentFormHandler);
