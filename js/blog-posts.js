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
}
