import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { addClassApi } from "../../../service/auth.service";
import "./AddClass.scss";

const AddClass = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Trainer, setTrainer] = useState("");
  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        classTitle: Title,
        description: Desc,
        time: Time,
        date: date,
      };
      // console.log(body);
      const response = await addClassApi(body);
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
      <Sidebar mode="admin" />
      <div className="formContainer">
        <Navbar />
        <div className="auth-body">
          <h1 className="auth-header-title">Add Class Form</h1>
          {/* <p className="auth-header-subtitle">
        Sign-in to your account and start the adventure
      </p> */}
          <form className="auth-form-validation" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="title" className="input-label">
                Title
              </label>
              <input
                type="text"
                className="input-control"
                id="title"
                placeholder="Title"
                autoComplete="off"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="desc" className="input-label">
                Description
              </label>
              <input
                type="text"
                className="input-control"
                id="desc"
                placeholder=""
                autoComplete="off"
                required
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="time" className="input-label">
                Time
              </label>
              <input
                type="time"
                className="input-control"
                id="time"
                placeholder="Mobile"
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
                placeholder="Mobile"
                autoComplete="off"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Trainer
              </label>
              <input
                type="text"
                name="trainer"
                id="trainer"
                className="input-control"
                placeholder="Trainer"
                autoComplete="off"
                required
                onChange={(e) => setTrainer(e.target.value)}
              />
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

export default AddClass;
