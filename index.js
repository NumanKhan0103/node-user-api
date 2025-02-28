const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/database');

// load environment variables
dotenv.config();

connectDB();

const app = express(); 

// middleware 
app.use(express.json());

// routes 
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));