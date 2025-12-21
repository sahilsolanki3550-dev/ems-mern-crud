import axios from "axios";
import React, { useEffect, useState } from "react";

function AllEmployees() {
  const [result, setResult] = useState([]);

  const fetchAllEmployees = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/employee/all");
      setResult(response.data.result);
    } catch (e) {
      console.log(e);
    } 
  };

  const deleteRecord = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:5000/employee/delete/${id}`
      );
      fetchAllEmployees();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);
  return (
    <>
      <h2 align="center" style={{ position: "relative", top: "30px" }}>
        All Employees
      </h2>
      <table border={1} align="center" cellPadding={10} cellSpacing={0}>
        <tr>
          <td>Id</td>
          <td>FirstName</td>
          <td>LastName</td>
          <td>Email</td>
          <td>Contact</td>
          <td>Designation</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
        {result.map((row) => (
          <tr>
            <td>{row._id}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.email}</td>
            <td>{row.contact}</td>
            <td>{row.designation}</td>
            <td>
              <a href={`/editemployee/${row._id}`}>Edit</a>
            </td>
            <td>
              <input
                type="button"
                value="delete"
                onClick={() => {
                  deleteRecord(row._id);
                }}
              />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default AllEmployees;
