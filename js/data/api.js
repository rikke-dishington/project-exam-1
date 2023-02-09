const url = "https://www.mydigihelp.no/wp-json/wp/v2/posts";
const postsContainer = document.querySelector(".posts-container");

export async function getPosts(page, perPage = 10) {
  try {
    const response = await fetch(
      `https://www.mydigihelp.no/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`
    );
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}

/*
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

     */
