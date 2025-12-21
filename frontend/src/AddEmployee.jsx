import axios from "axios";
import React, { useState } from "react";

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
      const response = await axios.post(
        "http://127.0.0.1:5000/employee/store",
        data
      );
      alert("New Employee Added Successfully");
      resetForm();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h2
        align="center"
        style={{ position: "relative", top: "30px", right: "50px" }}
      >
        Add New Employee
      </h2>
      <form onSubmit={submitHandler}>
        <table align="center" cellPadding={10} cellSpacing={0}>
          <tr>
            <td>First Name</td>
            <td>
              <input
                type="text"
                id="fname"
                name="fname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>last Name</td>
            <td>
              <input
                type="text"
                id="lname"
                name="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Contact</td>
            <td>
              <input
                type="text"
                id="contact"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Designation</td>
            <td>
              <input
                type="text"
                id="designation"
                name="designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <input type="submit" id="submit" name="submit" value="Submit" />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default AddEmployee;
