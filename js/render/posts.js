import { onClick } from "../listeners/onClick.js";

export function renderPost(post, parentElement) {
  const postHTML = createHtmlObject(post);
  parentElement.append(postHTML);
}

export function renderPosts(posts, parentElement) {
  posts.forEach(function (post) {
    renderPost(post, parentElement);
  });
}

export function createColumn() {
  const element = document.createElement("div");
  element.classList.add("col");
  return element;
}

export function createCard(children) {
  const cardBody = createPostsElement("div", ["card-body"], children);
  const card = createPostsElement("div", ["card"], [cardBody]);

  return card;
}

export function createCardTitle(titleText) {
  return createPostsElement("h2", ["card-title"], undefined, titleText);
}

export function createCardSubtitle(titleText) {
  return createPostsElement("h3", ["card-subtitle"], undefined, titleText);
}

export function createCardText(cardText) {
  return createPostsElement("p", ["card-text"], undefined, cardText);
}

export function createCardLink(linkText, linkUrl) {
  return createPostsElement("a", ["card-link"], undefined, linkText, linkUrl);
}

export function createPostsElement(tagname, classes, children, text, link) {
  const element = document.createElement(tagname);

  if (Array.isArray(classes) && classes.length) {
    element.classList.add(...classes);
  }

  if (Array.isArray(children) && children.length) {
    element.append(...children);
  }

  if (text) {
    element.innerText = text;
  }

  if (link && tagname === "a") {
    element.href = link;
  }

  return element;
}

export function createHtmlObject(post) {
  const title = createCardTitle(post.info.name);
  const subtitle = createCardSubtitle(post.info.date);
  const text = createCardText(post.info.description);
  const email = createCardLink();

  const childItems = [title, subtitle, text, email];

  const col = createColumn();
  const card = createCard(childItems);
  col.append(card);

  return col;
}

export function clearPostList(parentElement) {
  parentElement.innerHTML = "";
}
