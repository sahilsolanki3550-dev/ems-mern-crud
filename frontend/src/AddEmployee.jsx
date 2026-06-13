import axios from "axios";
import React, { useState } from "react";
import "./Form.css";

function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setDesignation("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { firstName, lastName, email, contact, designation };
      await axios.post("http://127.0.0.1:5000/employee/store", data);
      alert("New Employee Added Successfully");
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2>Add New Employee</h2>

        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
