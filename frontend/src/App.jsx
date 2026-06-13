import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import AllEmployees from "./AllEmployees";
import EditEmployee from "./EditEmployee";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>Employee Management System</h1>
      </header>

      {/* Navigation Buttons */}
      <nav className="nav-buttons">
        <Link to="/addemployee">
          <button className="primary-btn">Add Employee</button>
        </Link>
        <Link to="/allemployees">
          <button className="secondary-btn">View All Employees</button>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="content">
        <Routes>
          <Route path="/" element={<AllEmployees />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/allemployees" element={<AllEmployees />} />
          <Route path="/editemployee/:id" element={<EditEmployee />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EMS. All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;
