// const url = "https://www.mydigihelp.no/wp-json/wp/v2/posts";

// function to fetch posts from the Wordpress API
export async function getPosts(page, perPage = 10) {
  try {
    const response = await fetch(
      `https://rikkedishingtonschool.com/project-exam/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`
    );
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}
