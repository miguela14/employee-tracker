const express = require("express");
const mysql = require("mysql2");
// const inquirer = require("inquirer");

const app = express();
const PORT = process.env.PORT || 3001;

// Creating connection to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rosahernandez14",
  database: "tracker_db",
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

// Set up Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get("/departments", (req, res) => {
  db.query("SELECT * FROM departments", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/roles", (req, res) => {
  db.query("SELECT * FROM roles", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/departments", (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO departments SET ?", { name }, (err, result) => {
    if (err) throw err;
    res.send(`Department "${name}" added successfully!`);
  });
});

app.post("/roles", (req, res) => {
  const { title, salary, department_id } = req.body;
  db.query(
    "INSERT INTO roles SET ?",
    { title, salary, department_id },
    (err, result) => {
      if (err) throw err;
      res.send(`Role "${title}" added successfully!`);
    }
  );
});

app.post("/employees", (req, res) => {
  const { first_name, last_name, role_id, manager_id } = req.body;
  db.query(
    "INSERT INTO employees SET ?",
    { first_name, last_name, role_id, manager_id },
    (err, result) => {
      if (err) throw err;
      res.send(`Employee "${first_name} ${last_name}" added successfully!`);
    }
  );
});

app.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { role_id } = req.body;
  db.query(
    "UPDATE employees SET role_id = ? WHERE id = ?",
    [role_id, id],
    (err, result) => {
      if (err) throw err;
      res.send(`Employee with ID ${id} updated successfully!`);
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});