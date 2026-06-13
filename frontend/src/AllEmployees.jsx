import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllEmployee.css"

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL

  // Fetch all employees
  const fetchAllEmployees = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/employee/all`
      );

      // IMPORTANT: backend sends { result: [...] }
      setEmployees(response.data.result || []);
    } catch (error) {
      console.log("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete employee
  const deleteRecord = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${API_URL}/employee/delete/${id}`
      );
      fetchAllEmployees(); // refresh list
    } catch (error) {
      console.log("Error deleting employee:", error);
    }
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        All Employees
      </h2>

      {loading ? (
        <p align="center">Loading employees...</p>
      ) : (
        <div className="table-container">

        <table
          border="1"
          align="center"
          cellPadding="10"
          cellSpacing="0"
          style={{ background: "white" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Designation</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp._id}>
                  <td>{emp._id}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.contact}</td>
                  <td>{emp.designation}</td>
                  <td>
                    <Link to={`/editemployee/${emp._id}`}>Edit</Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteRecord(emp._id)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" align="center">
                  No Employees Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      )}
    </>
  );
}

export default AllEmployees;
