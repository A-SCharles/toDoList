// INITIALIZE
// ======================================================================
const display = document.getElementById("list");
// localStorage.removeItem('list');
// Displays Default list
let lists = JSON.parse(localStorage.getItem("list") || "[]");
// ======================================================================

// CREATE
// ======================================================================
// Adds item to array
function addItem() {
  // e.preventDefault();
  lists.push({
    task: document.getElementById("add").value,
    createdDate: new Date(),
    completed: false,
  });
  loadData();
  localStorage.setItem("list", JSON.stringify(lists));
}
document.querySelector("#btnAdd").addEventListener("click", addItem);
// ======================================================================

// READ
// ======================================================================
// loads Data from array
function loadData() {
  console.table(lists);
  display.innerHTML = "";
  lists.forEach((item) => {
    display.innerHTML += `
          <li id="completed" class="d-flex justify-content-between border-bottom border-3 mb-3">
          <input class="form-check-input me-1" type="checkbox" id="complete">
          ${item.task}
          <i class="btn fa-solid fa-trash-can" id="delete"></i>
          </li>
          `;
  });
}
loadData();
// ======================================================================

// UPDATE
// ======================================================================

// SORT
// ======================================================================
document.querySelector("#btnSort").addEventListener("click", () => {
  lists.sort((a, b) => {
    let fa = a.task.toLowerCase(),
      fb = b.task.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  display.innerHTML = "";
  lists.forEach((item) => {
    display.innerHTML += `
          <li id="completed" class="d-flex justify-content-between border-bottom border-3 mb-3">
          <input class="form-check-input me-1" type="checkbox" id="complete">
          ${item.task}
          <i class="btn fa-solid fa-trash-can"></i>
          </li>
          `;
  });
});

// DELETE
// // ======================================================================
// let btnDelete = document.querySelector("#delete").addEventListener('click', deleteItem);

// function deleteItem(event) {
//   lists.forEach((item) => {
//     alert(event.parentNode.children[1])
//     if (item.task === event.parentNode[0].value) {
//       // delete task
//       item.splice(item.indexOf(task), 1);
//     }
//   });
//   localStorage.setItem("list", JSON.stringify(lists));
//   // event.parentElement.remove();
// }
