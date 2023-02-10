import { getPosts } from "./data/api.js";
import { renderPosts } from "./render/posts.js";

let page = 1;

const blogListCarousel = document.querySelector(".blog-list-carousel");

export async function onViewPrev() {
  console.log("viewPrev");
  if (page <= 1) {
    return;
  }

  page--;

  const newPost = await getPosts(page, 2);
  renderPosts(newPost, blogListCarousel);
}

export async function onViewNext() {
  console.log("viewNext");
  page++;

  const newPost = await getPosts(page, 2);
  renderPosts(newPost, blogListCarousel);
}

async function initializeBlog() {
  const posts = await getPosts(page, 4);
  const viewPrev = document.getElementById("carousel-button-prev");
  const viewNext = document.getElementById("carousel-button-next");

  viewPrev.addEventListener("click", onViewPrev);
  viewNext.addEventListener("click", onViewNext);

  console.log(posts);

  renderPosts(posts, blogListCarousel);
}

window.addEventListener("load", initializeBlog);
