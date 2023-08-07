let card_container = document.querySelector(".card_container");

function handleSubmit(event) {
  console.log("rahul");
  event.preventDefault();

  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;

  const card = document.createElement("div");
  card.classList.add("cards");
  let card_title = document.createElement("input");
  card_title.value = title;
  card_title.classList.add("title");
  let card_category = document.createElement("input");
  card_category.value = category;
  card.append(card_title, card_category);
  card_container.append(card);
}

const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);
