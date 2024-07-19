const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  department: String,
  designation: String,
  dateOfJoining: Date,
  salary: Number,
  image: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
