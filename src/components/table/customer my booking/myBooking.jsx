import React from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./mybooking.scss"

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const myBooking = () => {

  const rows = [
    {
      name: "John",
      email: "john@gmail.com",
      mobileno: "1234567890",
      address: "john Nagar",
      gymplan: "1500 basic",
    },
    {
      name: "John",
      email: "john@gmail.com",
      mobileno: "1234567890",
      address: "john Nagar",
      gymplan: "1500 basic",
    },
  ];

  return (
    <div className="mybooking">
      <Sidebar mode="customer"/>
      <div className="mybookingContainer">
        <Navbar />
        <h3>My Booking</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell className="tableCell">Sr. No.</TableCell>
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
                  <TableCell className="tableCell">{index+1}</TableCell>
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
      </div>
    </div>
  );
};

export default myBooking;
