// markup-task.js
export function createTaskMarkup(task, index) {
  return `
    <li class="task-list-item">
      <button class="task-list-item-btn" data-index="${index}">Delete</button>
      <h3>${task.name}</h3>
      <p>${task.description}</p>
    </li>
  `;
}
