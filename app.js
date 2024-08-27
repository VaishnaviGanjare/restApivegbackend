const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const vegRoutes = require('./routes/vegRoutes');
const vegModel = require('./models/vegModel'); // Import to ensure the table is created

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Ensure the table is created
vegModel.createTable();

// Use the routes
app.use('/', vegRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
