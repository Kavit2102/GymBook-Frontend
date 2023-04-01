import React, { useState, useEffect } from "react";
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
import moment from "moment-timezone";
import {
  UpdateClassDT,
  bookClassApi,
  deleteClassApi,
  getClassApi,
} from "../../../service/class.service";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ViewClasses = ({ mode }) => {
  const navigate = useNavigate();
  const [Classes, setClasses] = useState([]);
  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");

  const fetchClasses = async () => {
    const response = await getClassApi();
    await setClasses(response.allFutureClass);
    console.log(Classes);
  };

  useEffect(() => {
    fetchClasses();
  });

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
      const response = await bookClassApi({ classTitle, _id });
      console.log(response);
      alert("Class Booking Successfull");
    } catch (error) {
      console.log(error);
      alert("Server Response Failed");
    }
  };

  const updateClassDnT = async (_id) => {
    console.log(_id);
    let newDate = new Date(date);
    let hour = Time.split(":")[0];
    let minute = Time.split(":")[1];
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    try {
      const body = {
        classId: _id,
        dateNtime: newDate,
      };
      console.log(body);
      const response = await UpdateClassDT(body);
      console.log(response);
      alert("Class Rescheduled");
      navigate(0);
    } catch (error) {
      alert("Server response failed ");
      console.log(error);
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
                    {moment(Class.date)
                      .tz("Asia/Kolkata")
                      .format("MMMM Do YYYY")}
                  </TableCell>
                  <TableCell className="tableCell">
                    {moment(Class.date).tz("Asia/Kolkata").format("h:mm:ss a")}
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
                      <>
                        <Popup
                          trigger={
                            <button className="btn-Y">Reschedule</button>
                          }
                          modal
                          nested
                        >
                          {(close) => (
                            <div className="modal">
                              <div className="content">
                                <h3>Reschedule Class</h3>
                                <div className="input-field">
                                  <label htmlFor="time" className="input-label">
                                    Time
                                  </label>
                                  <input
                                    type="time"
                                    className="input-control"
                                    id="time"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => setTime(e.target.value)}
                                  />
                                </div>
                                <div className="input-field">
                                  <label htmlFor="time" className="input-label">
                                    Date
                                  </label>
                                  <input
                                    type="date"
                                    className="input-control"
                                    id="date"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => setDate(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div>
                                <button
                                  className="btn-S"
                                  onClick={() => {
                                    updateClassDnT(Class._id);
                                  }}
                                >
                                  Submit
                                </button>
                                <button
                                  className="btn-R"
                                  onClick={() => close()}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          )}
                        </Popup>

                        <button
                          className="btn-R"
                          onClick={() =>
                            deleteClass(Class.classTitle, Class._id)
                          }
                        >
                          Delete
                        </button>
                      </>
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
