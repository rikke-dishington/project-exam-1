const blogPostContainer = document.querySelector(".blog-content");

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

    createHtml(post);
  } catch (error) {
    console.log(error);
    blogPostContainer.innerHTML = displayError(
      "Oh no! An unknown error has occurred"
    );
  }
}

fetchPost();

function createHtml(post) {
  blogPostContainer.innerHTML = `<h1>${post.title.rendered}</h1>
                                <p>${post.content.render}</p>
                                <a href="blog.html" class="cta">Back</a>`;
}
