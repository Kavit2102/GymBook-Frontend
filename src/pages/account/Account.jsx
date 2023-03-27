import React from "react";
import Datatable from "../../components/datatable/Datatable";
// import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import List from "../list/List";
import "./Account.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const Account = () => {

  const rows = [
    {
      name: "John",
      email: "john@gmail.com",
      mobileno: "1234567890",
      address: "john Nagar",
      gymplan: "1500 basic",
    },
  ];

  return (
    <div className="account">
      <Sidebar mode="account" />
      <div className="accountContainer">
        <Navbar />
        <h3>Account Details</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              {/* <TableCell className="tableCell">Sr. No.</TableCell> */}
                <TableCell className="tableCell">Name</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Mobile No.</TableCell>
                <TableCell className="tableCell">Address</TableCell>
                <TableCell className="tableCell">Gym plan</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.id}>
                  {/* <TableCell className="tableCell">{index+1}</TableCell> */}
                  <TableCell className="tableCell">{row.name}</TableCell>
                  <TableCell className="tableCell">{row.email}</TableCell>
                  <TableCell className="tableCell">{row.mobileno}</TableCell>
                  <TableCell className="tableCell">{row.address}</TableCell>
                  <TableCell className="tableCell">{row.gymplan}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="auth-body">
          <h1 className="auth-header-title">Forgot Password</h1>
          <form className="auth-form-validation">
            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-control"
                placeholder="Password"
                autoComplete="off"
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-control"
                placeholder="confirm password"
                autoComplete="off"
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
