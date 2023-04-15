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
  UpdateClassDT,
  deRegisterClassApi,
  getClassApi,
} from "../../../service/class.service";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {useNavigate } from "react-router-dom";

const MyBooking = () => {

  const navigate = useNavigate();
  const [Classes, setClasses] = useState([]);

  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");

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
