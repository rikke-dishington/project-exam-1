const url = "https://www.mydigihelp.no/wp-json/wp/v2/posts";

async function posts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    
    for (const post of posts) {
      const postID = post.id;
      const postTitle = post.title.rendered;
      const postDate = post.date;
      const postContent = post.content.rendered;
    }
  } catch (error) {
    console.error(error);
  }
}

posts();
