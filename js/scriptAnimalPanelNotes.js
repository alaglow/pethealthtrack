const popUp = document.getElementById("pop-up")
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")
const inputBox = document.getElementById("input-box")
const inputEl = document.getElementById("input-el")
const longerListToDo = document.getElementById("longer-todo")
const shorterListToDo = document.getElementById("shorter-list")
const listDiv = document.getElementById('todoList');
const taskBtn = document.getElementById("task-btn")
const inputElBtn = document.getElementById("input-el-btn")
const inputCloseBtn = document.getElementById("input-close-btn")

function taskButton() {
    taskBtn.addEventListener("click", () => {
        inputEl.classList.add("open")

        inputCloseBtn.addEventListener("click", () => {
            inputEl.classList.remove("open");
        })
    })
}

openBtn.addEventListener("click", () => {
    popUp.classList.add("open");
})

closeBtn.addEventListener("click", () => {
    popUp.classList.remove("open");
})

const todoListData = {
    items: [],
};

class TodoListTask {
    constructor(text) {
      this.text = text;
      this.checked = false;
    }

    taskChecked() {
        this.checked = true;
    }
  }

function updateListOnPage() {
    listDiv.innerHTML = '';

    if (item.checked){
        listItem.style.textDecoration = "line-through";
        additionalNote.textDecoration = "line-through";
    };

    todoListData.items.forEach((item) => {
        let listItem = document.createElement('li');
        listItem.textContent = item.text;
        listDiv.appendChild(listItem);

        let additionalNote = document.createElement('li');
        additionalNote.textContent = item.text;
        shorterListToDo.appendChild(additionalNote);
    });
}

const observedItems = new Proxy(todoListData.items, {
    set: function (target, property, value) {
        target[property] = value;
        updateListOnPage();
        return true;
    },
});

inputElBtn.addEventListener('click', function () {
    let inpBoxValue = inputBox.value
    let newItem = new TodoListTask(inpBoxValue);
    observedItems.push(newItem);
})

// zrob addEventListener ktory pobiera item i robi na nim taskChecked()
// listDiv.addEventListener('click', function (event) {
