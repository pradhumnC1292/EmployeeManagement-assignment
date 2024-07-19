import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/employees/")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="employee-list">
      {employees.map((employee, idx) => (
        <EmployeeCard key={idx} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
