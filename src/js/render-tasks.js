// renderTasks.js
// renderTasks.js
import { refs } from './refs.js';
import { createTaskMarkup } from './markup-tasks.js'; // Імпортуємо createTaskMarkup

export function renderTaskList(tasks) {
  refs.taskList.innerHTML = ''; // очищаємо список перед рендерингом

  tasks.forEach((task, index) => {
    const taskMarkup = createTaskMarkup(task, index); // генеруємо розмітку
    const taskElement = document.createElement('div');
    taskElement.innerHTML = taskMarkup; // створюємо DOM-елемент з markup
    refs.taskList.appendChild(taskElement.firstElementChild); // додаємо елемент до списку
  });
}
