import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchOneDetails = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/employee/edit/${id}`
      );
      setFirstName(response.data.result.firstName);
      setLastName(response.data.result.lastName);
      setEmail(response.data.result.email);
      setContact(response.data.result.contact);
      setDesignation(response.data.result.designation);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchOneDetails();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { firstName, lastName, email, contact, designation };
      const response = await axios.put(
        `http://127.0.0.1:5000/employee/update/${id}`,
        data
      );
      alert("Your Record Updated Successfully");
      navigate("/allemployees");
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
        Edit Employee
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
              <input type="submit" id="submit" name="submit" value="Update" />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default EditEmployee;
