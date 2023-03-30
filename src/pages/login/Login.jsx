import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import LOGO from "../../images/gym1.png";
import { LoginApi } from "../../service/auth.service";
// import

const Signin = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");

  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // navigate("/admin");

    try {
      const body = { email: Email.trim(), password: Password.trim() };
      // console.log(body);
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
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="form">
        <div className="auth-header">
          <div className="auth-header-logo">
            <img
              src={LOGO}
              height={300}
              alt=""
              className="auth-header-logo-img"
            />
          </div>
        </div>
        <div className="auth-body">
          <h1 className="auth-header-title">Welcome to Gym Book</h1>
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
                placeholder="example@gmail.com"
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
