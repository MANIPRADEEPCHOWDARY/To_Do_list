# 📝 To-Do List App

A clean, lightweight To-Do List web app built with plain HTML, CSS, and JavaScript — no frameworks, no dependencies. All tasks are saved automatically so your list stays intact after every refresh or browser restart.

---

## 📁 Project Structure

```
todo-app/
├── index.html   → App layout and structure
├── style.css    → Styling and gradient background
├── app.js       → Logic, interactivity, and localStorage
└── README.md    → This file
```

---

## 🚀 How to Run

### Option 1 — Double Click (simplest)
1. Download all three files into the same folder
2. Double-click `index.html`
3. It opens in your browser — done!

### Option 2 — VS Code Live Server (recommended)
1. Install [VS Code](https://code.visualstudio.com)
2. Install the **Live Server** extension (Extensions tab → search "Live Server")
3. Open your project folder in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. App runs at `http://127.0.0.1:5500/index.html`

> ⚠️ All three files must be in the **same folder** for the app to work correctly.

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ Add tasks | Type in the input bar and click **Add** or press **Enter** |
| ✅ Complete tasks | Click the circle dot or the task text to mark as done |
| ↩️ Undo complete | Click the orange dot or text again to unmark |
| ❌ Delete tasks | Click the **×** button on the right to remove a task |
| 💾 Auto-save | All tasks and states are saved to `localStorage` instantly |
| 🔄 Persistent state | Everything is exactly the same after refresh or reopening |

---

## 🎮 How It Works

1. **Type** a task name in the input bar
2. **Click Add** (or press Enter) — the task appears in the list below
3. **Click the dot** (○) or the **task text** to toggle complete:
   - Dot turns **orange** with a ✓ checkmark
   - Task text gets a **strikethrough line**
4. **Click ×** on the right to permanently remove a task
5. **Refresh the page** — everything is still there!

---

## 💾 How Persistence Works

Tasks are saved to the browser's `localStorage` under the key `todoapp_tasks`. Every time you add, complete, or delete a task, the updated list is saved immediately as JSON.

On page load, the app reads from `localStorage` and restores your exact task list — including which tasks were completed.

```
localStorage key: "todoapp_tasks"
Format: [{ id, text, done }, ...]
```

---

## 🛠️ Tech Stack

- **HTML5** — structure
- **CSS3** — styling, gradient background, transitions
- **Vanilla JavaScript** — logic and DOM manipulation
- **localStorage** — browser-side persistence (no server needed)

---

## 🌐 Browser Support

Works in all modern browsers:

- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari

---

## 📄 License

Free to use for personal and educational projects.
