const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./src/routes/productRoutes');
require('dotenv').config();
const connectDB = require('./src/config/db.js');


const app = express();
const PORT = process.env.PORT || 3000;

const DATABASE_URL = process.env.DATABASE_URL
// Database Connection
connectDB(DATABASE_URL)
 
app.use(express.json());
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
