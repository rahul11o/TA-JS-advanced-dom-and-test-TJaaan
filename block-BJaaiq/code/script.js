let root_element = document.querySelector(".root_element");

let maxQuotes = 3;
let index = 0;

function addQuotes() {
  for (let i = 0; i < maxQuotes; i++) {
    let li = document.createElement("li");
    let blockquote = document.createElement("blockquote");
    let cite = document.createElement("cite");
    blockquote.innerText = quotes[index].quoteText;
    cite.innerText = quotes[index].quoteAuthor;
    li.append(blockquote, cite);
    root_element.append(li);
    index++;
  }
}

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if (
    Math.ceil(scrollTop + clientHeight) >= scrollHeight &&
    index < quotes.length
  ) {
    addQuotes();
  }
});
window.addEventListener("DOMContentLoaded", function () {
  alert(`The content of the DOM is loaded`);
});
addQuotes();
