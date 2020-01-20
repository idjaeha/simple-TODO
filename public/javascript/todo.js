const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
let toDos = [];

const TODOS_LS = "toDos";

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text, loadedId = null) {
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = loadedId === null ? Date.now() : loadedId;
  span.innerHTML = text;
  delBtn.innerHTML = "✔";
  delBtn.addEventListener("click", deleteToDo);
  div.appendChild(delBtn);
  div.appendChild(span);
  div.classList.add("toDo");
  div.id = newId;
  toDoList.appendChild(div);

  toDoObj = {
    text: text,
    id: newId
  };

  toDos.push(toDoObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue === "") {
    return;
  }
  paintToDo(currentValue);
  saveToDos();
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text, toDo.id);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
