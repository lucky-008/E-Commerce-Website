const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json()); // Corrected function call
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');
app.use(`/api/category`,categoryRoutes);
app.use(`/api/products`,productRoutes);
// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('Database connection is ready...');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('Database connection error:', err);
  });
