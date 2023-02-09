import { getPosts } from "./data/api.js";
import { renderPosts } from "./render/posts.js";

let page = 1;

const blogList = document.querySelector(".blog-list");

export async function onLoadMore() {
  console.log("loadMore");
  page++;

  const newPost = await getPosts(page);
  renderPosts(newPost, blogList);
}

async function initializeBlog() {
  const posts = await getPosts(page);
  const loadMore = document.getElementById("loadmore");

  loadMore.addEventListener("click", onLoadMore);

  console.log(posts);

  renderPosts(posts, blogList);
}

window.addEventListener("load", initializeBlog);
