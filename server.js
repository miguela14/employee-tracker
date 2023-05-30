const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creating connectiong to Mysql
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Rosahernandez14',
    database: 'tracker_db',
  },
  console.log(`Connected to the tracker_db database.`)
);
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });