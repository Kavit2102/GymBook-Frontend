import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./mybooking.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  deleteClassApi,
  deRegisterClassApi,
  getClassApi,
} from "../../../service/class.service";

const MyBooking = () => {
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
    console.log(response);
  };

  const deRegisterClass = async (classTitle, _id) => {
    // console.log(title + id);
    try {
      const body = { _id, classTitle };
      const response = await deRegisterClassApi(body);
      // console.log(response);
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
        <h3>My Booking</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">S.No</TableCell>
                <TableCell className="tableCell">Title</TableCell>
                <TableCell className="tableCell">Description</TableCell>
                <TableCell className="tableCell">Trainer</TableCell>
                <TableCell className="tableCell">Date & Time</TableCell>
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
                    {Class.date.toString().substring(3, 15)}
                  </TableCell>
                  <TableCell className="tableCell">{Class.gymplan}</TableCell>
                  <TableCell className="tableCell">
                    <button
                      onClick={() =>
                        deRegisterClass(Class.classTitle, Class._id)
                      }
                    >
                      Cancel
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>{" "}
      </div>
    </div>
  );
};

export default MyBooking;
