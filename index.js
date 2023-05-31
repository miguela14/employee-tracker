const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

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
  startApp();
});

// Function to start the application and prompt user actions
function startApp() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee's role",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee's role":
          updateEmployeeRole();
          break;
        case "Exit":
          db.end();
          break;
      }
    });
}

// View all departments
function viewDepartments() {
  db.query("SELECT * FROM departments", (err, results) => {
    if (err) throw err;
    console.log("Departments:");
    console.table(results);
    startApp();
  });
}

// View all roles
function viewRoles() {
  db.query("SELECT * FROM roles", (err, results) => {
    if (err) throw err;
    console.log("Roles:");
    console.table(results);
    startApp();
  });
}

// View all employees
function viewEmployees() {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) throw err;
    console.log("Employees:");
    console.table(results);
    startApp();
  });
}

// Add a department
function addDepartment() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "Enter the name of the department:",
    })
    .then((answer) => {
      const departmentName = answer.name;
      db.query(
        "INSERT INTO departments SET ?",
        { name: departmentName },
        (err) => {
          if (err) throw err;
          console.log(`Department "${departmentName}" added successfully!`);
          startApp();
        }
      );
    });
}

// Add a role
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Enter the title of the role:",
      },
      {
        name: "salary",
        type: "input",
        message: "Enter the salary for the role:",
      },
      {
        name: "department_id",
        type: "input",
        message: "Enter the department ID for the role:",
      },
    ])
    .then((answers) => {
      const { title, salary, department_id } = answers;
      db.query(
        "INSERT INTO roles SET ?",
        { title, salary, department_id },
        (err) => {
          if (err) throw err;
          console.log(`Role "${title}" added successfully!`);
          startApp();
        }
      );
    });
}

// Add an employee
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Enter the first name of the employee:",
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter the last name of the employee:",
      },
      {
        name: "role_id",
        type: "input",
        message: "Enter the role ID for the employee:",
      },
      {
        name: "manager_id",
        type: "input",
        message: "Enter the manager ID for the employee:",
      },
    ])
    .then((answers) => {
      const { first_name, last_name, role_id, manager_id } = answers;
      db.query(
        "INSERT INTO employees SET ?",
        { first_name, last_name, role_id, manager_id },
        (err) => {
          if (err) throw err;
          console.log(`Employee "${first_name} ${last_name}" added successfully!`);
          startApp();
        }
      );
    });
}

// Update an employee's role
function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        name: "employee_id",
        type: "input",
        message: "Enter the ID of the employee to update:",
      },
      {
        name: "role_id",
        type: "input",
        message: "Enter the new role ID for the employee:",
      },
    ])
    .then((answers) => {
      const { employee_id, role_id } = answers;
      db.query(
        "UPDATE employees SET role_id = ? WHERE id = ?",
        [role_id, employee_id],
        (err) => {
          if (err) throw err;
          console.log(`Employee with ID ${employee_id} updated successfully!`);
          startApp();
        }
      );
    });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});