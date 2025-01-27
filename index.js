const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();

connectDB();

const app = express();


// middleware 
app.use(express.json());

// routes 
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));