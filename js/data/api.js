const url = "https://www.mydigihelp.no/wp-json/wp/v2/posts";
const postsContainer = document.querySelector(".posts-container");

async function getPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    
    let html = "";
    for (const post of posts) {
      const postID = post.id;
      const postTitle = post.title.rendered;
      const postDate = post.date;
      const postContent = post.content.rendered;

      
      html += `<div class="post">
                 <h2><a href="blog-post.html?id=${postID}">${postTitle}</a></h2>
                 <p class="date">${postDate}</p>
                 <p class="content">${postContent}<p>
               </div>`;
    }
    postsContainer.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

getPosts();
