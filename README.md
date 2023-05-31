# Employee Tracker

Employee Tracker is a command-line application that allows you to manage departments, roles, and employees within your organization. It provides functionality to view, add, and update data in a MySQL database.

## Table of Contents
- Installation
- Usage
- Database Schema
- Seeding the Database
- Routes
- Dependencies
- Contributing
- Questions

## Installation

To use the Employee Tracker application, follow these steps:

Clone the repository to your local machine.
Ensure you have Node.js installed on your machine.
Open a terminal and navigate to the project's root directory.
Run the following command to install the required dependencies:

npm install
Set up the MySQL database by executing the schema.sql file in your preferred MySQL management tool to create the necessary tables.
(Optional) If you want to start with pre-defined data, execute the seeds.sql file to populate the tables with sample data.

## Usage

To run the Employee Tracker application, follow these steps:

Make sure your MySQL server is running.
Open a terminal and navigate to the project's root directory.
Run the following command:

node server.js
The application will start and display a list of actions you can perform.
Choose an action by selecting the corresponding option using the arrow keys and pressing Enter.
Follow the prompts to enter the required information for each action.

## Database Schema

The database schema for the Employee Tracker application consists of three tables:

departments: Stores department information, including an id (primary key) and name.
roles: Stores role information, including an id (primary key), title, salary, and department_id (foreign key referencing departments.id).
employees: Stores employee information, including an id (primary key), first_name, last_name, role_id (foreign key referencing roles.id), and manager_id (foreign key referencing employees.id).
For a visual representation of the schema, you can refer to the following diagram:

+----------------+       +-------------------+       +----------------+
| departments    |       | roles             |       | employees      |
+----------------+       +-------------------+       +----------------+
| id (PK)        |<----- | id (PK)           |       | id (PK)        |
| name           |       | title             |<---+  | first_name     |
+----------------+       | salary            |       | last_name      |
                         | department_id (FK)|       | role_id (FK)   |
                         +-------------------+       | manager_id (FK)|
                                                     +----------------+

## Seeding the Database

The application provides a seeds.sql file that contains sample data for the departments, roles, and employees tables. To seed the database with this data, follow these steps:

Make sure your MySQL server is running.
Open a terminal and navigate to the project's root directory.
Run the following command:

mysql -u <username> -p tracker_db < seeds.sql
Replace <username> with your MySQL username. You will be prompted to enter your MySQL password.

## Routes

The Employee Tracker application provides the following API routes:

GET /api/departments: Retrieves a list of all departments.
GET /api/roles: Retrieves a list of all roles.
GET /api/employees: Retrieves a list of all employees.
Please note that these routes are accessible via HTTP requests and can be tested using tools like Postman or by making requests directly from your application.

## Dependencies

The Employee Tracker application uses the following dependencies:

inquirer: For the command-line interface and user prompts.
mysql2: For connecting to the MySQL database.
These dependencies are automatically installed when you run npm install.

## Contributing

Contributions to the Employee Tracker application are welcome! If you find any bugs or have suggestions for improvement, please submit an issue on the GitHub repository. If you'd like to contribute code, you can fork the repository, make your changes, and submit a pull request.


## Questions

If you have any questions or need further assistance, please feel free to reach out.

GitHub: https://www.github.com/miguela14/
Email: miguelmoreno142@yahoo.com


[https://drive.google.com/file/d/1MwmmaiDUY2_lMCY1HOrMFYdg45ssI9mD/view]