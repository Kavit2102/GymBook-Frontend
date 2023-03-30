import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./viewBooking.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getClassApi } from "../../../service/class.service";

const ViewBooking = () => {
  // const rows = [
  //   {
  //     name: "John",
  //     email: "john@gmail.com",
  //     mobileno: "1234567890",
  //     address: "john Nagar",
  //     gymplan: "1500 basic",
  //   },
  //   {
  //     name: "John",
  //     email: "john@gmail.com",
  //     mobileno: "1234567890",
  //     address: "john Nagar",
  //     gymplan: "1500 basic",
  //   },
  // ];

  const [Classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    const response = await getClassApi();
    await setClasses(response.allClass);
    console.log(Classes);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="view-booking">
      <Sidebar mode="trainer" />
      <div className="bookingContainer">
        <Navbar />

        <h3>View Booking</h3>
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
              {Classes.map((Class, index) => (
                <TableRow key={index}>
                  <TableCell className="tableCell">{index + 1}</TableCell>
                  <TableCell className="tableCell">{Class.name}</TableCell>
                  <TableCell className="tableCell">{Class.email}</TableCell>
                  <TableCell className="tableCell">{Class.mobileNo}</TableCell>
                  <TableCell className="tableCell">{Class.address}</TableCell>
                  <TableCell className="tableCell">{Class.gymPlan}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ViewBooking;
