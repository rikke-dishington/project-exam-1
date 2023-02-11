const blogPostContainer = document.querySelector(".blog-post-content");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://rikkedishingtonschool.com/project-exam/wp-json/wp/v2/posts/" + id;

console.log(url);

async function fetchPost() {
  try {
    const response = await fetch(url);
    const post = await response.json();

    console.log(post);

    createTitle(post);
    createHtml(post);
  } catch (error) {
    console.log(error);
    blogPostContainer.innerHTML = displayError(
      "Oh no! An unknown error has occurred"
    );
  }
}

fetchPost();

function createTitle(post) {
  document.title = `Retriever Gundog Club | Blog | ${post.title.rendered}`;
}

function createHtml(post) {
  const date = new Date(post.modified);

  blogPostContainer.innerHTML = `
                                    <h1>${post.title.rendered}</h1>
                                    <p class="date">${date.toLocaleDateString()}</p>
                                    ${post.content.rendered}
                                    <a href="blog.html" class="cta">Back</a>`;

  // Make images clickable
  const images = document.querySelectorAll("figure img");
  const modal = document.createElement("div");
  const modalImg = document.createElement("img");

  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = 0;
  modal.style.right = 0;
  modal.style.bottom = 0;
  modal.style.left = 0;
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.zIndex = 1;
  modal.style.textAlign = "center";
  modal.style.cursor = "pointer";

  modalImg.style.maxWidth = "auto";
  modalImg.style.maxHeight = "auto";
  modalImg.style.margin = "10% auto";

  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      modalImg.src = e.target.src;
      modal.style.display = "block";
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
