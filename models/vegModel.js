const connection = require('../config/db');

const createTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS vegData (
      id INT AUTO_INCREMENT PRIMARY KEY,
      text VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      quantity DECIMAL(10, 2) NOT NULL
    )
  `;
  connection.query(query, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Table "vegData" ensured');
    }
  });
};

const getAllVegData = (callback) => {
  connection.query('SELECT * FROM vegData', callback);
};

const addVegData = (data, callback) => {
  const { text, price, quantity } = data;
  connection.query('INSERT INTO vegData (text, price, quantity) VALUES (?, ?, ?)', [text, price, quantity], callback);
};

const updateVegData = (id, data, callback) => {
  const { text, price, quantity } = data;
  connection.query('UPDATE vegData SET text = ?, price = ?, quantity = ? WHERE id = ?', [text, price, quantity, id], callback);
};

const deleteVegData = (id, callback) => {
  connection.query('DELETE FROM vegData WHERE id = ?', [id], callback);
};

module.exports = {
  createTable,
  getAllVegData,
  addVegData,
  updateVegData,
  deleteVegData,
};
