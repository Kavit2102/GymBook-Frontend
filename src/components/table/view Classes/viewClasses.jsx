import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./viewClasses.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import moment from 'moment-timezone';
import {
  bookClassApi,
  deleteClassApi,
  getClassApi,
} from "../../../service/class.service";
import { useNavigate } from "react-router-dom";

const ViewClasses = ({ mode }) => {
  const navigate = useNavigate();
  const [Classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    const response = await getClassApi();
    // await setClasses(response.allFutureClass);
    await setClasses(response.allClass);
    console.log(Classes);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const deleteClass = async (classTitle, _id) => {
    try {
      const body = { classTitle, _id };
      const response = await deleteClassApi(body);
      alert("Class Deleted Successfully");
      navigate(0);
    } catch (error) {
      console.log(error);
      alert("Server Response Failed ");
    }
  };

  const bookClass = async (classTitle, _id) => {

    try {
      const response = await bookClassApi({classTitle, _id});
      console.log(response);
      alert("Class Booking Successfull");
    } catch (error) {
      console.log(error);
      alert("Server Response Failed");
    }
  };

  return (
    <div className="view-classes">
      <Sidebar mode={mode} />
      <div className="classContainer">
        <Navbar />
        <h3>Classes Details</h3>
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
                    {mode === "customer" && (
                      <button
                        className="btn-G"
                        onClick={() => bookClass(Class.classTitle, Class._id)}
                      >
                        Book Now
                      </button>
                    )}
                    {mode === "admin" && (
                    <button
                      className="btn-R"
                      onClick={() => deleteClass(Class.classTitle, Class._id)}
                    >
                      Delete
                    </button>
                    )}
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

export default ViewClasses;
