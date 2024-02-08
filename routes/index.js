const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Import the Student model

router.get('/dashboard', async (req, res) => {
    try {
        const students = await Student.find({}, 'name examMarks attendance extraCircularPoints');
        res.json(students); // Send the fetched students data as JSON response
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
    }
});

module.exports = router;
