console.log("external file");

// option 2 to handle event

function makePink() {
  document.body.style.backgroundColor = "pink";
  document.body.style.color = "white";
}
function makeBlack() {
  document.body.style.color = "pink";
  document.body.style.backgroundColor = "black";
}

// option 3: get Element by Id and then set "onclick"

const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// opt 3: different version

const btnMakePurple = document.getElementById("btn-make-purple");
// console.log(btnMakePurple);
btnMakePurple.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
}
