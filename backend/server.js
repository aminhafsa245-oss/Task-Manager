const express = require("express");
const cors = require("cors");
const db = require("./database");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

/* --------------------------
   GET ALL TASKS
--------------------------- */
app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

/* --------------------------
   CREATE TASK
--------------------------- */
app.post("/tasks", (req, res) => {
  const { title, status } = req.body;

  if (!title || !status) {
    return res.status(400).json({
      error: "Title and status are required.",
    });
  }

  const sql = `
    INSERT INTO tasks(title, status)
    VALUES(?, ?)
  `;

  db.run(sql, [title, status], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      id: this.lastID,
      title,
      status,
    });
  });
});

/* --------------------------
   UPDATE TASK
--------------------------- */
app.put("/tasks/:id", (req, res) => {
  const { title, status } = req.body;
  const { id } = req.params;

  const sql = `
    UPDATE tasks
    SET title = ?, status = ?
    WHERE id = ?
  `;

  db.run(sql, [title, status, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Task updated successfully.",
    });
  });
});

/* --------------------------
   DELETE TASK
--------------------------- */
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Task deleted successfully.",
    });
  });
});



/* --------------------------
   START SERVER
--------------------------- */

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});