const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
  
// Import Routes
const expenseRoutes = require('./routes/expenseRoutes');
const authRoutes = require("./routes/auth");
const reportRoutes = require("./routes/reportRoutes")

// Use Routes
app.use("/api/auth", authRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/reports', reportRoutes);

app.get('/', (req, res) => {
  res.send('Expense Tracker API');
});

app.get('/api/health', async (req, res) => {
  const mongoStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';

  res.status(200).json({
    status: 'ok',
    mongo: mongoStatus,
    timestamp: new Date(),
    message: 'Expense Tracker API is healthy',
  });
});

module.exports = app;
