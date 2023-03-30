import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./ViewUsers.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchCustmersApi } from "../../../service/auth.service";

const ViewUsers = () => {
  const [Customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const response = await fetchCustmersApi();
    console.log(response);
    await setCustomers(response.allUser);
  };

  return (
    <div className="view-trainers">
      <Sidebar mode="admin" />
      <div className="trainersContainer">
        <Navbar />
        <h3>View Users</h3>
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
                <TableCell className="tableCell">Role</TableCell>
                <TableCell className="tableCell">Gym Plan</TableCell>
                <TableCell className="tableCell">Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {Customers.find((customer) => customer.role == "customer").map((customer, index) => ( */}
              {Customers.map((customer, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="tableCell">{index + 1}</TableCell>
                    <TableCell className="tableCell">{customer.name}</TableCell>
                    <TableCell className="tableCell">
                      {customer.email}
                    </TableCell>
                    <TableCell className="tableCell">
                      {customer.mobileNo}
                    </TableCell>
                    <TableCell className="tableCell">
                      {customer.address}
                    </TableCell>
                    <TableCell className="tableCell">{customer.role}</TableCell>
                    <TableCell className="tableCell">
                      {customer.gymPlan}
                    </TableCell>
                    <TableCell className="tableCell">
                      {customer.salary}
                    </TableCell>
                    <TableCell className="tableCell">
                      <button>Delete</button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ViewUsers;
