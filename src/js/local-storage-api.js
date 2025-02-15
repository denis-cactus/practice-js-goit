// localStorageApi.js
export function saveToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

export function deleteTaskFromLocalStorage(index) {
  const tasks = loadFromLocalStorage();
  tasks.splice(index, 1);
  saveToLocalStorage(tasks);
}
