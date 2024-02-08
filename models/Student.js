const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  examMarks: Number,
  attendance: Number,
  extraCircularPoints: Number
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
