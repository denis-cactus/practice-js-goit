// tasks.js
import {
  saveToLocalStorage,
  loadFromLocalStorage,
  deleteTaskFromLocalStorage,
} from './local-storage-api.js';
import { renderTaskList } from './render-tasks.js';

export function addTask(taskName, taskDescr) {
  const tasks = loadFromLocalStorage();
  tasks.push({ name: taskName, description: taskDescr });
  saveToLocalStorage(tasks);
  renderTaskList(tasks); // оновлюємо список на сторінці
}

export function deleteTask(index) {
  deleteTaskFromLocalStorage(index);
  const tasks = loadFromLocalStorage();
  renderTaskList(tasks); // оновлюємо список після видалення
}
