// below code we cleanup into mvc.
//ex
// project-root/
// │
// ├── controllers/
// │   └── vegController.js
// │
// ├── models/
// │   └── vegModel.js
// │
// ├── routes/
// │   └── vegRoutes.js
// │
// ├── config/
// │   └── db.js
// │
// ├── app.js
// └── package.json


// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// // MySQL connection setup
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root', // use your MySQL username
//   password: 'vaishnavii2704', // use your MySQL password
// });

// // Create database and table if they don't exist
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');

//   // Create the database if it doesn't exist
//   connection.query('CREATE DATABASE IF NOT EXISTS veg_store', (err) => {
//     if (err) {
//       console.error('Error creating database:', err);
//       return;
//     }
//     console.log('Database "veg_store" ensured');

//     // Use the database
//     connection.query('USE veg_store', (err) => {
//       if (err) {
//         console.error('Error switching to database:', err);
//         return;
//       }
//       console.log('Switched to database "veg_store"');

//       // Create the table if it doesn't exist
//       const createTableQuery = `
//         CREATE TABLE IF NOT EXISTS vegData (
//           id INT AUTO_INCREMENT PRIMARY KEY,
//           text VARCHAR(255) NOT NULL,
//           price DECIMAL(10, 2) NOT NULL,
//           quantity DECIMAL(10, 2) NOT NULL
//         )
//       `;
//       connection.query(createTableQuery, (err) => {
//         if (err) {
//           console.error('Error creating table:', err);
//           return;
//         }
//         console.log('Table "vegData" ensured');
//       });
//     });
//   });
// });

// // Get all vegetable data
// app.get('/vegData', (req, res) => {
//   connection.query('SELECT * FROM vegData', (err, results) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.json(results);
//   });
// });

// // Add new vegetable data
// app.post('/vegData', (req, res) => {
//   const { text, price, quantity } = req.body;
//   connection.query('INSERT INTO vegData (text, price, quantity) VALUES (?, ?, ?)', [text, price, quantity], (err, results) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     console.log("added");
//     res.status(201).json({ id: results.insertId });
//   });
// });

// // Delete a vegetable entry
// app.delete('/vegData/:id', (req, res) => {
//   const { id } = req.params;
//   connection.query('DELETE FROM vegData WHERE id = ?', [id], (err, results) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     console.log("deleted");
//     res.status(204).send();
//   });
// });

// // Update vegetable data
// app.put('/vegData/:id', (req, res) => {
//   const { id } = req.params;
//   const { text, price, quantity } = req.body;
//   connection.query('UPDATE vegData SET text = ?, price = ?, quantity = ? WHERE id = ?', [text, price, quantity, id], (err, results) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     console.log("have put");
//     res.status(200).json(results);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
