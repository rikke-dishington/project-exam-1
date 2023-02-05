const url = "";

async function getPosts() {
  try {
    const response = await fetch(url);
    const getPosts = await response.json();
    console.log(getPosts);
  } catch (error) {
    console.log(console.error());
  }
}
getPosts();
