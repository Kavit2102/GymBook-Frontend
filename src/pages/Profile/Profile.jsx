import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { changePassApi } from "../../service/auth.service";
import { useNavigate } from "react-router-dom";

let user;
const getuser = localStorage.getItem("login_status");
if (getuser && getuser.length) {
  user = JSON.parse(getuser);
  console.log(user);
}

const Profile = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { password, confirmPassword };
      console.log(body);
      const response = await changePassApi(body);
      console.log(response);
      navigate("/");
    } catch (error) {
      alert("Server response failed ");
      console.log(error);
    }
  };

  return (
    <div className="account">
      <Sidebar mode="profile" />
      <div className="accountContainer">
        <Navbar />
        <h3>Account Details</h3>
        <br />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell className="tableCell">Sr. No.</TableCell> */}
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
              {/* {rows.map((row, index) => ( */}
              <TableRow>
                {/* <TableCell className="tableCell">{index + 1}</TableCell> */}
                <TableCell className="tableCell">{user.name}</TableCell>
                <TableCell className="tableCell">{user.email}</TableCell>
                <TableCell className="tableCell">{user.mobileNo}</TableCell>
                <TableCell className="tableCell">{user.address}</TableCell>
                <TableCell className="tableCell">{user.role}</TableCell>
                <TableCell className="tableCell">{user.gymPlan}</TableCell>
                <TableCell className="tableCell">{user.salary}</TableCell>
              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="auth-body">
          <h2>Change Password</h2>
          <form className="auth-form-validation" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-control"
                placeholder="Password"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-control"
                placeholder="confirm password"
                autoComplete="off"
                required
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
