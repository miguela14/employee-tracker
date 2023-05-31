USE tracker_db;
-- Insert departments
INSERT IGNORE INTO departments (id, name)
VALUES
  (1, 'Sales'),
  (2, 'Marketing'),
  (3, 'Finance');
-- Insert roles
INSERT IGNORE INTO roles (id, title, salary, department_id)
VALUES
  (1, 'Sales Representative', 50000, 1),
  (2, 'Marketing Coordinator', 45000, 2),
  (3, 'Financial Analyst', 60000, 3);
-- Insert employees
INSERT IGNORE INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'John', 'Doe', 1, NULL),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Michael', 'Johnson', 3, 2);