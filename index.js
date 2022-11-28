require('dotenv').config();
const express = require('express');
const cors = require('cors')

// MongoDB
const mongoose = require('mongoose');
const mongoDatabase = process.env.DATABASE_URL;

mongoose.connect(mongoDatabase);
const database = mongoose.connection;

database.on('error', (error) => {console.log(error)})
database.once('connected', () => {console.log('Database Connected')})

// Express
const app = express();
app.use(express.json());
app.use(cors())

// Port
var port = process.env.PORT || 8000;
app.listen(port, () => {console.log(`Server Started at ${port}`)})

// Routes
const StorageUnit = require('./routes/StorageUnit');
app.use('/api/storage-unit', StorageUnit)

const Customer = require('./routes/Customer');
app.use('/api/customer', Customer)

const Lease = require('./routes/Lease');
app.use('/api/lease', Lease)

const Payment = require('./routes/Payment');
app.use('/api/payment', Payment)
