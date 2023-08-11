let form = document.querySelector(".form");
let root = document.querySelector(".root");

let cardInfo = JSON.parse(localStorage.getItem("cards")) ?? [];
// localStorage.clear();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let title = event.target.title.value;
  let category = event.target.category.value;
  cardInfo.push({ title, category });
  localStorage.setItem("cards", JSON.stringify(cardInfo));
  createUI(cardInfo, root);
});

function handleEdit(event, info, id, label) {
  let elm = event.target;
  let inputElem = document.createElement("input");
  inputElem.value = info;
  inputElem.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      cardInfo[id][label] = e.target.value;
      createUI();
      localStorage.setItem("cards", JSON.stringify(cardInfo));
    }
  });
  inputElem.addEventListener("blur", (e) => {
    cardInfo[id][label] = e.target.value;
    createUI();
    localStorage.setItem("cards", JSON.stringify(cardInfo));
  });
  let parent = event.target.parentElement;
  parent.replaceChild(inputElem, elm);
}

function createUI(data = cardInfo, rootElem = root) {
  root.innerHTML = "";
  let fragment = new DocumentFragment();
  data.forEach(function (element, index) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = element.category;
    p.addEventListener("dblclick", (event) => {
      handleEdit(event, element.category, index, "category");
    });
    let h2 = document.createElement("h2");
    h2.innerText = element.title;
    p.innerText = element.category;
    h2.addEventListener("dblclick", (event) => {
      handleEdit(event, element.title, index, "title");
    });
    li.append(p, h2);
    fragment.appendChild(li);
  });
  rootElem.appendChild(fragment);
}
createUI(cardInfo, root);
