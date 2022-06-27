// localStorage.removeItem('list');
// INITIALIZE
const display = document.getElementById("list");
let lists = JSON.parse(localStorage.getItem("list") || '[]')
// ======================================================================

// CREATE
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
  document.getElementById("add").value = '';
  document.getElementById("add").focus()
}
document.querySelector("#btnAdd").addEventListener("click", addItem);
// ======================================================================

// READ
// loads Data from array
function loadData() {
  display.innerHTML = "";
  lists.forEach((item, index) => {
    display.innerHTML += `
    <li id="${index}" class="d-flex justify-content-between border-bottom border-3 mb-3">
    <input class="bruh form-check-input me-1" type="checkbox" onchange="completed(${index})" id="complete${index}">
    <span id="test">
    ${item.task}
    </span>
    <i onclick="deleteItem(${index})" class="btn fa-solid fa-trash-can"></i>
    </li>
    `;
  });
  // Checks if true values exist and adds line-through to it 
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].completed === true) {
      document.getElementById('complete' + i).checked = true;
    }
  }
  console.table(lists);
}
loadData();
// ======================================================================

// SORT
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
// ======================================================================

// DELETE
function deleteItem(id) {
  if (id > -1) {
    lists.splice(id, 1);
    localStorage.setItem("list", JSON.stringify(lists));
  }
  loadData();
}
// CLEARS ALL ITEMS
document.getElementById('Reset').addEventListener('click', () => {
  localStorage.removeItem('list');
  lists = JSON.parse(localStorage.getItem("list") || '[]')
  loadData()
})
// ======================================================================

// Unnecessary stuff
// basically, makes check and uncheck work
function completed(id) {
  for (let i = 0; i < lists.length; i++) {
    const chkcheck = document.getElementById('complete' + i)
    if (chkcheck.checked == true) {
      lists[id].completed = true
      localStorage.setItem("list", JSON.stringify(lists));
    } else if (chkcheck.checked == false) {
      lists[id].completed = false
      localStorage.setItem("list", JSON.stringify(lists));
    }
  }
  console.table(lists)
}