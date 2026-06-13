import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";

function EditEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");
  const API_URL = import.meta.env.VITE_API_URL

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchOneDetails = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/employee/edit/${id}`
      );
      const emp = response.data.result;
      setFirstName(emp.firstName);
      setLastName(emp.lastName);
      setEmail(emp.email);
      setContact(emp.contact);
      setDesignation(emp.designation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOneDetails();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { firstName, lastName, email, contact, designation };
      await axios.put(
        `${API_URL}/employee/update/${id}`,
        data
      );
      alert("Employee Updated Successfully");
      navigate("/allemployees");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2>Edit Employee</h2>

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
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
