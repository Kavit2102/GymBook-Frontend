import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./feedbackForm.scss";

const FeedbackForm = () => {
  return (
    <div className="addclassform">
      <Sidebar />
      <div className="formContainer">
        <Navbar />
        <div className="auth-body">
          <h1 className="auth-header-title">Feedback Form</h1>
          {/* <p className="auth-header-subtitle">
    Sign-in to your account and start the adventure
  </p> */}
          <form className="auth-form-validation">
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
              />
            </div>
            <div className="input-field">
              <label htmlFor="desc" className="input-label">
                Feedback Description
              </label>
              <textarea name="desc" id="desc" cols="71" rows="10"></textarea>
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
