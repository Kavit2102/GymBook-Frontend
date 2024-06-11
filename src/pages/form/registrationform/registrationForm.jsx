/**
 */
// /**
//  * A component that renders a registration form with a sidebar.
//  * @returns JSX element that contains the registration form and sidebar.
//  */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import { SignupApi } from "../../../service/auth.service";
import "./registrationForm.scss";
// import toast from "react-hot-toast";

const UserForm = () => {

  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState();
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");
  const [Address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: Name,
      email: Email,
      mobileNo: Mobile,
      address: Address,
      password: Password,
      role: Role,
      userRole: localStorage.getItem('user_role')
    }

    // console.log(body);

    SignupApi(body).then(
      response => {
        console.log(response);
        // toast.success(`SignUp for ${Role} role Successfull !!!`);
        navigate("/admin");
      }
    ).
      catch(error => {
        // toast.error("Server response failed ");
        console.log(error);
      })
  }

  return (
    <div className="regform">
      <Sidebar mode="admin" />
      <div className="formContainer">
        <h3>Registration Form</h3>
        <div className="auth-body">
          <form className="auth-form-validation" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="input-control"
                id="name"
                placeholder="Name"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="email" className="input-label">
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="input-control"
                id="email"
                placeholder="example@gmail.com"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="mob_no" className="input-label">
                Mobile No.
              </label>
              <input
                onChange={(e) => setMobile(e.target.value)}
                type="tel"
                className="input-control"
                id="mob_no"
                placeholder="Mobile"
                autoComplete="off"
                minLength={10}
                maxLength={10}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="address" className="input-label">
                Address
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="input-control"
                id="address"
                placeholder="Address"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="input-control"
                placeholder="Password"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="role" className="input-label">
                Role
              </label>
              <select
                className="input-control"
                name="role"
                id="role"
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="select">Select a role</option>
                <option value="customer">Customer</option>
                <option value="trainer">Trainer</option>
              </select>
            </div>
            <button type="submit" className="btn-submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
