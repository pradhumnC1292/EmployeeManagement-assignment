const Employee = require("../model/employeeModel");

exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getEmployeeByID = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.searchEmployees = async (req, res) => {
  try {
    const { firstname, lastname, department, designation } = req.query;
    const searchCriteria = {};

    if (firstname) {
      searchCriteria.firstName = new RegExp(firstname, "i");
    }
    if (lastname) {
      searchCriteria.lastName = new RegExp(lastname, "i");
    }
    if (department) {
      searchCriteria.department = new RegExp(department, "i");
    }
    if (designation) {
      searchCriteria.designation = new RegExp(designation, "i");
    }

    const employees = await Employee.find({
      $or: [
        searchCriteria.firstName
          ? { firstName: searchCriteria.firstName }
          : null,
        searchCriteria.lastName ? { lastName: searchCriteria.lastName } : null,
        searchCriteria.department
          ? { department: searchCriteria.department }
          : null,
        searchCriteria.designation
          ? { designation: searchCriteria.designation }
          : null,
      ].filter(Boolean),
    });

    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
