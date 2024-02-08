const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Student = require('./models/Student');
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourDBName', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'dashboard.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Fetch and return data as JSON
app.get('/data', async (req, res) => {
  try {
    const students = await Student.find({}, 'name examMarks attendance extraCircularPoints');
    res.json(students);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Error fetching data');
  }
});
