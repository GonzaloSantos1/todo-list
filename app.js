//Requerimos los elementos de nuestro html
const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const taskList = document.querySelector('.todoList');
const trashBtn = document.querySelector('.todoList li span');
const pendingTasks = document.querySelector('.counter');
const clearBtn = document.querySelector('.footer button');
let count = 0;

//Botón ADD se ilumina y permite hacer click si existe texto en el input
inputBox.addEventListener('keyup', () => {
  let inputText = inputBox.value;
  if (inputText.trim() != 0) {
    addBtn.classList.add('active');
  } else {
    addBtn.classList.remove('active');
  }
});

//Creamos la misma función para añadírsela al eventlistener del botón '+'
let clearInput = () => {
  let inputText = inputBox.value;
  if (inputText.trim() != 0) {
    addBtn.classList.add('active');
  } else {
    addBtn.classList.remove('active');
  }
};

//Creamos el listado con el value del input
inputBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputBox.value != '') {
    let inputText = inputBox.value;
    let trashIcon = document.createElement('i');
    trashIcon.className = 'fas fa-trash';
    let createSpan = document.createElement('span');
    createSpan.appendChild(trashIcon);
    let task = document.createElement('li');
    task.innerText = inputText;
    taskList.appendChild(task);

    createSpan.onclick = () => {
      //Función para borrar li al pulsar el span
      createSpan.parentElement.remove();
      count--;
      pendingTasks.textContent = count;
    };
    //Terminamos de unir el span al li
    task.appendChild(createSpan);
    inputBox.value = '';

    count++;
    pendingTasks.textContent = count;
  }
});

//Creamos lo mismo con el botón +, pero eliminamos la condición del "Enter"
addBtn.addEventListener('click', (e) => {
  if (inputBox.value != '') {
    let inputText = inputBox.value;
    let trashIcon = document.createElement('i');
    trashIcon.className = 'fas fa-trash';
    let createSpan = document.createElement('span');
    createSpan.appendChild(trashIcon);
    let task = document.createElement('li');
    task.innerText = inputText;
    taskList.appendChild(task);
    createSpan.onclick = () => {
      //Función para borrar li al pulsar el span
      createSpan.parentElement.remove();
      count--;
      pendingTasks.textContent = count;
    };
    //Terminamos de unir el span al li
    task.appendChild(createSpan);
    inputBox.value = '';
    count++;
    pendingTasks.textContent = count;
    //Añadimos la función del botón verde
    clearInput();
  }
});

//Función ClearAll
clearBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
  count = 0;
  pendingTasks.textContent = count;
});
