import dogs from "./data/dogs.js";

const dogsContainer = document.querySelector(".our-dogs");

async function renderDogs() {
  try {
    dogsContainer.innerHTML = "";

    for (let i = 0; i < dogs.length; i++) {
      const dogsImage = dogs[i].info.image;
      const dogsName = dogs[i].info.name;
      const dogsDescription = dogs[i].info.description;

      dogsContainer.innerHTML += `<div class="dog">
                                    <img src="${dogsImage}" />
                                    <div class="dog-information">
                                        <h3>${dogsName}</h3>
                                        <p>${dogsDescription}</p>
                                    </div>
                                </div>`;
    }
  } catch (error) {
    console.log(error);
    dogsContainer.innerHTML = displayError("Oh no! An error occurred");
  }
}

renderDogs();
