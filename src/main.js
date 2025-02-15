// main.js

import { refs } from './js/refs.js';
import { addTask, deleteTask } from './js/tasks.js';
import { renderTaskList } from './js/render-tasks.js';
import { loadFromLocalStorage } from './js/local-storage-api.js';
import './js/theme-switcher.js';
refs.form.addEventListener('submit', evt => {
  evt.preventDefault();

  const taskName = evt.target.elements.taskName.value.trim();
  const taskDescr = evt.target.elements.taskDescription.value.trim();

  if (!taskName || !taskDescr) return;

  addTask(taskName, taskDescr); // додаємо нове завдання

  evt.target.reset();
});

refs.taskList.addEventListener('click', evt => {
  if (evt.target.classList.contains('task-list-item-btn')) {
    const taskIndex = evt.target.dataset.index;
    deleteTask(taskIndex); // видаляємо завдання
  }
});

function loadTasks() {
  const tasks = loadFromLocalStorage();
  renderTaskList(tasks); // завантажуємо завдання з localStorage
}

document.addEventListener('DOMContentLoaded', loadTasks);
