import React, { useState } from "react";
import "./Navbar.css";
import AddEmployeeModal from "./AddEmployeeModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="path/to/logo.png" alt="Brand Logo" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-buttons">
        <button className="btn signup" onClick={() => setShowModal(true)}>
          Add Employee
        </button>
        {showModal && (
          <AddEmployeeModal closeModal={() => setShowModal(false)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
