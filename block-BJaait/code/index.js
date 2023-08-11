document.addEventListener("DOMContentLoaded", (event) => {
  //Drag functions

  function dragStart(e) {
    this.style.opacity = "0.5";
  }

  function dragEnd(e) {
    this.style.opacity = "1";
  }
  function dragEnter(e) {
    console.log("enter");
  }
  function dragLeave(e) {
    console.log("leave");
  }
  function dragOver(e) {
    console.log("over");
  }
  function dragDrop(e) {
    console.log("drop");
  }

  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("dragstart", dragStart);
    box.addEventListener("dragend", dragEnd);
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("dragover", dragOver);

    box.addEventListener("drop", dragDrop);
  });
});
