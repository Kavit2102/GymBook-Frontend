import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./viewBooking.scss";
import moment from "moment-timezone";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getClassApi } from "../../../service/class.service";

const ViewBooking = () => {
  const [Classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    const response = await getClassApi();
    await setClasses(response.trainerClass);
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
                <TableCell className="tableCell">Title</TableCell>
                <TableCell className="tableCell">Description</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Time</TableCell>
                <TableCell className="tableCell">Booked By -</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Classes.map((Class, index) => (
                <TableRow key={index}>
                  <TableCell className="tableCell">{index + 1}</TableCell>
                  <TableCell className="tableCell">{Class.classTitle}</TableCell>
                  <TableCell className="tableCell">{Class.description}</TableCell>
                  <TableCell className="tableCell">
                    {moment(Class.date).tz("Asia/Kolkata").format('MMMM Do YYYY')}
                  </TableCell>
                  <TableCell className="tableCell">
                  {moment(Class.date).tz("Asia/Kolkata").format('h:mm:ss a')}
                  </TableCell>
                  <TableCell className="tableCell">
                    Name: <br />
                    Email: Email <br />
                    Mobile No.: Mobile No. <br /> 
                    Gym Plan: Gym Plan
                  </TableCell>
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
