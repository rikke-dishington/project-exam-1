import { posts } from "./data/posts.js";
import { renderPosts, clearPostList } from "./render/posts.js";

const parent = document.querySelector(".blog-list");

clearPostList(parent);
renderPosts(posts, parent);
