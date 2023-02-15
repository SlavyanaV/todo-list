const taskName = document.getElementById('name');
const taskDescription = document.getElementById('description');
const taskPriority = document.getElementById('priority');
const addButton = document.getElementById('add-button');
const tableBody = document.getElementById('table-body');

taskPriority.value = 'medium';

const addTodo = () => {
  const tableRow = document.createElement('tr');
  const checkBoxTd = document.createElement('td');
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBoxTd.appendChild(checkBox);
  const currentName = document.createElement('td');
  const currentDescription = document.createElement('td');
  const currentPriority = document.createElement('td');
  const deleteTd = document.createElement('td');
  const deleteButton = document.createElement('button');
  const deleteButtonIcon = document.createElement('i');
  deleteButtonIcon.setAttribute('class', 'fa-solid fa-trash-can');
  deleteButton.appendChild(deleteButtonIcon);
  deleteTd.appendChild(deleteButton);

  currentName.textContent = taskName.value;
  currentDescription.textContent = taskDescription.value;
  currentPriority.textContent = taskPriority.value;

  tableRow.appendChild(checkBoxTd);
  tableRow.appendChild(currentName);
  tableRow.appendChild(currentDescription);
  tableRow.appendChild(currentPriority);
  tableRow.appendChild(deleteButton);

  tableBody.appendChild(tableRow);

  taskName.value = '';
  taskDescription.value = '';
  taskPriority.value = 'medium';

  checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      currentName.style.textDecoration = 'line-through';
      currentDescription.style.textDecoration = 'line-through';
      currentPriority.style.textDecoration = 'line-through';
    } else {
      currentName.style.textDecoration = 'none';
      currentDescription.style.textDecoration = 'none';
      currentPriority.style.textDecoration = 'none';
    }
  });

  deleteButton.addEventListener('click', () => {
    tableBody.removeChild(tableRow);
  });
};

addButton.addEventListener('click', addTodo);
window.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});
