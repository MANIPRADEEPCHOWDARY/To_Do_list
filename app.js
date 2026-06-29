/* ─────────────────────────────────────────────
   To-Do List  |  app.js
   Persists tasks in localStorage so state
   survives page refresh and re-runs.
───────────────────────────────────────────── */

const STORAGE_KEY = 'todoapp_tasks';

const taskInput = document.getElementById('taskInput');
const addBtn    = document.getElementById('addBtn');
const taskList  = document.getElementById('taskList');

/* ── load saved tasks on startup ── */
let tasks = loadTasks();
renderAll();

/* ── add via button click ── */
addBtn.addEventListener('click', addTask);

/* ── add via Enter key ── */
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

/* ─────────── core functions ─────────── */

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ id: Date.now(), text, done: false });
  saveTasks();
  renderAll();

  taskInput.value = '';
  taskInput.focus();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.done = !task.done;
  saveTasks();
  renderAll();
}

function removeTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderAll();
}

/* ─────────── render ─────────── */

function renderAll() {
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    const hint = document.createElement('li');
    hint.className = 'empty-hint';
    hint.textContent = 'No tasks yet — add one above!';
    taskList.appendChild(hint);
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' done' : '');
    li.dataset.id = task.id;

    /* circle toggle */
    const checkBtn = document.createElement('button');
    checkBtn.className = 'task-check';
    checkBtn.setAttribute('aria-label', task.done ? 'Mark incomplete' : 'Mark complete');
    checkBtn.innerHTML = '<span class="check-icon">✓</span>';
    checkBtn.addEventListener('click', () => toggleTask(task.id));

    /* text (also toggles on click) */
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    span.addEventListener('click', () => toggleTask(task.id));

    /* remove × */
    const removeBtn = document.createElement('button');
    removeBtn.className = 'task-remove';
    removeBtn.setAttribute('aria-label', 'Remove task');
    removeBtn.innerHTML = '&times;';
    removeBtn.addEventListener('click', () => removeTask(task.id));

    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}

/* ─────────── localStorage helpers ─────────── */

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.warn('Could not save tasks:', e);
  }
}

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}
