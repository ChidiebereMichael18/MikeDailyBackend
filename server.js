const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // add this line
const userRoutes = require('./routes/userRoutes');
dotenv.config();

const app = express();
app.use(cors()); // add this line
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas (mikedaily)'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes go here
app.use('/api/users', userRoutes); // example

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
