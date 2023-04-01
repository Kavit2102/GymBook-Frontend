import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./mybooking.scss";
import moment from "moment-timezone";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  deRegisterClassApi,
  getClassApi,
} from "../../../service/class.service";

const MyBooking = () => {
  const [Classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    const response = await getClassApi();
    await setClasses(response.userRegisteredClass);
    console.log(response);
  };

  const deRegisterClass = async (classTitle, _id) => {
    // console.log(title + id);
    try {
      const body = { _id, classTitle };
      const response = await deRegisterClassApi(body);
      console.log(response);
      alert("Class cancelled Successfully");
    } catch (error) {
      console.log(error);
      alert("Server Response Failed ");
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="mybooking">
      <Sidebar mode="customer" />
      <div className="mybookingContainer">
        <Navbar />
        <h3>My Booking's</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">S.No</TableCell>
                <TableCell className="tableCell">Title</TableCell>
                <TableCell className="tableCell">Description</TableCell>
                <TableCell className="tableCell">Trainer</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Time</TableCell>
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Classes.map((Class, index) => (
                <TableRow key={index}>
                  <TableCell className="tableCell">{index + 1}</TableCell>
                  <TableCell className="tableCell">
                    {Class.classTitle}
                  </TableCell>
                  <TableCell className="tableCell">
                    {Class.description}
                  </TableCell>
                  <TableCell className="tableCell">
                    {Class.trainerName}
                  </TableCell>
                  <TableCell className="tableCell">
                    {moment(Class.date).tz("Asia/Kolkata").format('MMMM Do YYYY')}
                  </TableCell>
                  <TableCell className="tableCell">
                  {moment(Class.date).tz("Asia/Kolkata").format('h:mm:ss a')}
                  </TableCell>
                  <TableCell className="tableCell">
                    <button
                      className="btn-R"
                      onClick={() =>
                        deRegisterClass(Class.classTitle, Class._id)
                      }
                    >
                      Cancel Booking
                    </button>
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

export default MyBooking;
