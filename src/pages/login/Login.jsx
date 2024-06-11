import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import LOGO from "../../images/gym1.png";
import { LoginApi, SignupApi, forgetPasswordApi } from "../../service/auth.service";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import toast from "react-hot-toast";
import UserContext from "../../context/user_context";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    newEmail: "",
    newPassword: "",
    confirmPassword: "",
    role: ""
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const body = { email: email.trim(), password: password.trim() };
      const response = await LoginApi(body);
      // console.log(response);
      await localStorage.setItem("login_status", JSON.stringify(response.user));
      await localStorage.setItem("token_status", response.token);
      await localStorage.setItem("user_role", response.user.role);
      // toast.success("Login Successfull !!!");
      navigateUser(response.user.role);
      // user.setIsUser()
      user.updateUser()
    } catch (error) {
      console.error(error);
      // toast.error("Login failed: " + (error.message || "Server response failed"));
    }
  };

  const user = useContext(UserContext)

  useEffect(() => {
    console.log(user.isUser.current)
  }, [])

  const handlePasswordReset = async () => {
    const { newEmail, newPassword, confirmPassword } = formData;
    const body = { email: newEmail, password: newPassword, confirmPassword };
    try {
      const response = await forgetPasswordApi(body);
      console.log(response);
      alert("Password changed successfully!");
      user.updateUser(true);
      navigate(0);
    } catch (error) {
      console.error(error);
      alert("Password reset failed: " + (error.message || "Server Error"));
    }
  };

  const handleSignUp = async () => {
    const { name, newEmail, mobile, address, newPassword, role } = formData;
    const body = { name, email: newEmail, mobileNo: mobile, address, password: newPassword, role };
    try {
      const response = await SignupApi(body);
      console.log(response.data);
      alert("Sign Up Successful!");
    } catch (error) {
      console.error(error);
      alert("Sign Up failed: " + (error.message || "Server Error"));
    }
  };



  const navigateUser = (role) => {
    switch (role) {
      case "admin":
        navigate("/admin");
        break;
      case "trainer":
        navigate("/trainer");
        break;
      case "customer":
        navigate("/customer");
        break;
      default:
        // toast.error("Sorry !!!!")
        break;
    }
  };


  return (
    <div className="login-body">
      <h1 className="auth-header-title">Welcome to Gym Book</h1>
      <div className="form">
        <div className="auth-header">
          <img src={LOGO} alt="Gym Logo" className="auth-header-logo-img" loading="lazy" />
        </div>

        <div className="auth-body">
          <p className="auth-header-subtitle">Sign-in</p>
          <form className="auth-form-validation" onSubmit={handleSignIn}>
            <div className="input-field">
              <label htmlFor="email" className="input-label">Email address</label>
              <input
                type="text"
                className="input-control"
                id="email"
                name="email"
                placeholder="Example@gmail.com"
                autoComplete="off"
                required
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password" className="input-label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-control"
                placeholder="Password"
                autoComplete="off"
                required
                onChange={handleInputChange}
                value={formData.password}
              />
              <Popup trigger={<span className="forgotPassButton">Forgot Password</span>} modal nested>
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <h3>Forgot Password</h3>
                      <br />
                      <div className="input-field">
                        <label htmlFor="newEmail" className="input-label">Email</label>
                        <input
                          type="text"
                          className="input-control"
                          id="newEmail"
                          name="newEmail"
                          autoComplete="off"
                          required
                          onChange={handleInputChange}
                          value={formData.newEmail}
                        />
                      </div>
                      <div className="input-field">
                        <label htmlFor="newPassword" className="input-label">New Password</label>
                        <input
                          type="password"
                          className="input-control"
                          id="newPassword"
                          name="newPassword"
                          autoComplete="off"
                          required
                          onChange={handleInputChange}
                          value={formData.newPassword}
                        />
                      </div>
                      <div className="input-field">
                        <label htmlFor="confirmPassword" className="input-label">Confirm New Password</label>
                        <input
                          type="password"
                          className="input-control"
                          id="confirmPassword"
                          name="confirmPassword"
                          autoComplete="off"
                          required
                          onChange={handleInputChange}
                          value={formData.confirmPassword}
                        />
                      </div>
                    </div>
                    <button className="btn-S" onClick={handlePasswordReset}>Change Password</button>
                    <button className="btn-R" onClick={() => close()}>Close</button>
                  </div>
                )}
              </Popup>
            </div>
            <button type="submit" className="btn-submit" onClick={handleSignIn}>Sign in</button>
          </form>

          <Popup trigger={<span className="signUpbtn">Sign Up</span>} modal nested>
            {(close) => (
              <div className="modal">
                <div className="content">
                  <h3>Sign Up</h3>
                  <br />
                  <div className="input-field">
                    <label htmlFor="name" className="input-label">Name</label>
                    <input
                      type="text"
                      className="input-control"
                      id="name"
                      name="name"
                      autoComplete="off"
                      required
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="newEmail" className="input-label">Email</label>
                    <input
                      type="text"
                      className="input-control"
                      id="newEmail"
                      name="newEmail"
                      autoComplete="off"
                      required
                      onChange={handleInputChange}
                      value={formData.newEmail}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="mobile" className="input-label">Mobile No.</label>
                    <input
                      type="number"
                      className="input-control"
                      id="mobile"
                      name="mobile"
                      autoComplete="off"
                      required
                      onChange={handleInputChange}
                      value={formData.mobile}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="address" className="input-label">Address</label>
                    <input
                      type="text"
                      className="input-control"
                      id="address"
                      name="address"
                      autoComplete="off"
                      required
                      onChange={handleInputChange}
                      value={formData.address}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="newPassword" className="input-label">Password</label>
                    <input
                      type="password"
                      className="input-control"
                      id="newPassword"
                      name="newPassword"
                      autoComplete="off"
                      required
                      onChange={handleInputChange}
                      value={formData.newPassword}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="role" className="input-label">Select Role</label>
                    <div className="role-options">
                      {["admin", "trainer", "customer"].map((role) => (
                        <label key={role}>
                          <input
                            type="radio"
                            value={role}
                            name="role"
                            checked={formData.role === role}
                            onChange={() => setFormData((prevData) => ({ ...prevData, role }))}
                          />
                          {role.charAt(0).toUpperCase() + role.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="btn-S" onClick={handleSignUp}>Sign Up</button>
                <button className="btn-R" onClick={() => close()}>Close</button>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Signin;
