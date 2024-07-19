import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ employee }) => {
  const initials = `${employee.firstName[0]}${employee.lastName[0]}`;

  return (
    <div className="employee-card">
      <div className="avatar">
        {employee.image ? (
          <img src={employee.image} alt="avatar" />
        ) : (
          <div className="initials">{initials}</div>
        )}
      </div>
      <div className="employee-details">
        <h2>
          {employee.firstName} {employee.lastName}
        </h2>
        <p>{employee.department}</p>
        <p>{employee.designation}</p>
        <p>{employee.dateOfJoining}</p>
        <p>{employee.salary}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
