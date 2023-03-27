import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./viewFeedbacks.scss"

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { feedBackApi } from "../../../service/auth.service";


const ViewFeedbacks = () => {
  const [Feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const response = await feedBackApi();
    console.log(response);
    await setFeedbacks(response.userFeedback);    
  };

  return (
    <div className="view-feedbacks">
      <Sidebar mode="admin"/>
      <div className="feedbacksContainer">
        <Navbar />
        <h3>View Feedbacks</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell className="tableCell">Sr. No.</TableCell>
                <TableCell className="tableCell">Name</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Feedback Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Feedbacks.map((feedback, index) => (
                <TableRow key={index}>
                  <TableCell className="tableCell">{index+1}</TableCell>
                  <TableCell className="tableCell">{feedback.name}</TableCell>
                  <TableCell className="tableCell">{feedback.email}</TableCell>
                  <TableCell className="tableCell">{feedback.feedBack}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ViewFeedbacks;