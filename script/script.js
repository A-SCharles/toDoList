const display = document.getElementById('list')

let lists = JSON.parse(localStorage.getItem("list"))
  ? JSON.parse(localStorage.getItem("list"))
  : [
      {
        id: 1,
        item: "TV Stand",
        createdDate: new Date(),
      },
    ];

    lists.forEach(item => {
        display.innerHTML += `
        <li>${item.item}</li>
        `
    });


function addItem() {
    lists.push([
        item = document.getElementById('add').value,
        createdDate = new Date()
    ])
    localStorage.setItem('list'), JSON.stringify(lists)
}    