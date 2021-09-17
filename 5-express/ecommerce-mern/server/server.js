require('dotenv').config;
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

//Middleware

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

connectDB();
