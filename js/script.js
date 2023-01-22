const resultsContainer = document.querySelector(".blog");

const url =
  "https://rikkedishingtonschool.com/project-exam/wp-json/wp/v2/posts";

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    json.forEach(function (post) {
      resultsContainer.innerHTML += `<a href="blog-post.html?id=${post.id}" class="card">
                                                <div class="image" style="background-image: url(${post.featured_media.source_url});"></div>
                                                <div class="details">
                                                    <h2 class="name">${post.title.rendered}</h2>                                                                                                                                                        
                                                </div>
                                            </a>`;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchPosts();
