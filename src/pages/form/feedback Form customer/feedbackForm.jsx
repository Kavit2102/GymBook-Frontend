import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { feedBackApi } from "../../../service/auth.service";
import "./feedbackForm.scss";

const FeedbackForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name: Name,
        email: Email,
        feedBack: Feedback,
      };
      // console.log(body);
      const response = await feedBackApi(body);
      console.log(response);

      // localStorage.setItem("login_status", JSON.stringify(response.user));
      // let token = localStorage.setItem("token_status", response.token);
      // console.log(token);

      alert("Feedback submission Successfull");
    } catch (error) {
      alert("Server response failed ");
      console.log(error);
    }
  };

  return (
    <div className="addclassform">
      <Sidebar mode="customer" />
      <div className="formContainer">
        <Navbar />
        <div className="auth-body">
          <h1 className="auth-header-title">Feedback Form</h1>
          {/* <p className="auth-header-subtitle">
    Sign-in to your account and start the adventure
  </p> */}
          <form className="auth-form-validation" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                type="text"
                className="input-control"
                id="name"
                placeholder="Name"
                autoComplete="off"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              />
            </div>
            <div className="input-field">
              <label htmlFor="desc" className="input-label">
                Feedback Description
              </label>
              <textarea
                name="desc"
                id="desc"
                cols="62"
                rows="5"
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>

            {/* <div className="flex-end">
      <Link to={"/Forgot"} className="link-end">
        Forgot password?
      </Link>
    </div> */}
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
          {/* <p className="text-center">
    New on our platform?{" "}
    <Link to={"/Signup"} className="link-text-center">
      Create account here
    </Link>
  </p> */}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
