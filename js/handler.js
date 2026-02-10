// console.log(`handler file added`);

document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log("btn click");
    const pageTitleElement = document.getElementById("page-title");
    console.log(pageTitleElement);
    pageTitleElement.innerText = "Updated page title text.";
  });

//

//

document.getElementById("btn-login").addEventListener("click", function () {
  // console.log("login button clicked");
  const userInfoEl = document.getElementById("user-info");
  // console.log(userInfoEl);
  userInfoEl.innerText = "user loged in successfully";
});
//
//
//
///
// set event listener.
document.getElementById("btn-update").addEventListener("click", function () {
  console.log("update button clicked");
  //get the text from the input field.
  const nameInput = document.getElementById("inp-name");
  console.log(nameInput);
  const name = nameInput.value;
  console.log("name:", name);
  //set the name.
  const nameP = document.getElementById("name");
  nameP.innerText = name;
});
