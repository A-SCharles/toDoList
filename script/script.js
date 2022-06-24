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
    item: lists.length - 1 + 1,
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
  display.innerHTML = "";
  lists.forEach((item, index) => {
    display.innerHTML += `
    <li id="${index}" class="d-flex justify-content-between border-bottom border-3 mb-3">
    <input class="bruh form-check-input me-1" type="checkbox" onchange="completed(${index})" id="complete">
    <span>
    ${item.task}
    </span>
    <i onclick="deleteItem(${index})" class="btn fa-solid fa-trash-can"></i>
    </li>
    `;
  });
  console.table(lists);
}
loadData();
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
  loadData();
});

// DELETE
// ======================================================================
function deleteItem(id) {
  if (id > -1) {
    lists.splice(id, 1);
    // Apply the change
    localStorage.setItem("list", JSON.stringify(lists));
  }
  loadData();
}

function completed(id) {
    lists[id].completed = true
    // Apply the change
    localStorage.setItem("list", JSON.stringify(lists));
  }
  loadData();

console.log(lists[0].task)