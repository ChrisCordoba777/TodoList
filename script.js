let enterButton = document.getElementById("enterbutton");
let userInput = document.getElementById("userinput");
let ul = document.querySelector("ul");

//Functions
function inputLength() {
  return userInput.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput.value));

  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.addEventListener("click", function () {
    ul.removeChild(li); // Remove the li element when the button is clicked
  });

  li.appendChild(deleteButton);

  ul.appendChild(li);
  userInput.value = "";
}

enterButton.addEventListener("click", function () {
  if (inputLength() > 0) {
    createListElement();
  }
});

userInput.addEventListener("keypress", function (event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
});
