import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import LOGO from "../../images/gym1.png";
import { LoginApi, forgetPasswordApi } from "../../service/auth.service";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Signin = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [NewEmail, setNewEmail] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { email: Email.trim(), password: Password.trim() };
      const response = await LoginApi(body);
      console.log(response);

      await localStorage.setItem("login_status", JSON.stringify(response.user));
      let token = await localStorage.setItem("token_status", response.token);
      console.log(token);

      alert("Login Successfull");

      if (response.user.role === "admin") {
        navigate("/admin");
      } else if (response.user.role === "trainer") {
        navigate("/trainer");
      } else if (response.user.role === "customer") {
        navigate("/customer");
      }
    } catch (error) {
      alert("Server response failed ");
    }
  };

  const forgetPassword = async (e) => {
    const body = {email: NewEmail, password:NewPassword,confirmPassword: ConfirmPassword };
    await forgetPasswordApi(body)
      .then((response) => {
        console.log(response);
        alert("Password changed successfully !!");
      })
      .catch((error) => {
        console.log(error);
        alert("Server Error !!");
      });
  };

  return (
    <React.Fragment>
      <h1 className="auth-header-title">Welcome to Gym Book</h1>
      <div className="form">
        <div className="auth-header">
          <img
            src={LOGO}
            height={400}
            alt=""
            className="auth-header-logo-img"
          />
        </div>

        <div className="auth-body">
          <p className="auth-header-subtitle">Sign-in</p>
          <form className="auth-form-validation" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="email" className="input-label">
                Email address
              </label>
              <input
                type="text"
                className="input-control"
                id="email"
                placeholder="Example@gmail.com"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
            </div>
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
                value={Password}
              />
              <Popup
                trigger={
                  <span className="forgotPassButton">Forgot Password</span>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <h3>Forgot Password</h3><br/>
                      <div className="input-field">
                        <label htmlFor="email" className="input-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="input-control"
                          id="email"
                          autoComplete="off"
                          required
                          onChange={(e) => setNewEmail(e.target.value)}
                        />
                      </div>
                      <div className="input-field">
                        <label htmlFor="newPass" className="input-label">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="input-control"
                          id="newPass"
                          autoComplete="off"
                          required
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>

                      <div className="input-field">
                        <label htmlFor="confirmNewPass" className="input-label">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="input-control"
                          id="confirmNewPass"
                          autoComplete="off"
                          required
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <button className="btn-S" onClick={forgetPassword}>
                      Change Password
                    </button>
                    <button className="btn-R" onClick={() => close()}>
                      Close
                    </button>
                  </div>
                )}
              </Popup>
            </div>
            <button type="submit" className="btn-submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;
