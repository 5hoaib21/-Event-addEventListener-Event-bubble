document
  .getElementById("input-delete")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const btnDelete = document.getElementById("btn-delete");
    if (text === "delete") {
      console.log("delete typed");
      btnDelete.removeAttribute("disabled");
    } else {
      console.log("something else");
      btnDelete.setAttribute("disabled", true);
    }
  });
