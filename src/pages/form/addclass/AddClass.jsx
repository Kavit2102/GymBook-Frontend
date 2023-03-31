import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { fetchCustmersApi } from "../../../service/auth.service";
import { addClassApi } from "../../../service/class.service";
import "./AddClass.scss";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const navigate = useNavigate();
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [trainerName, setTrainerName] = useState("");
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    let users = await fetchCustmersApi();
    setUsers(users.allUser);
    console.log(users);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newDate = new Date(date);
    let hour = Time.split(":")[0];
    let minute = Time.split(":")[1];
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    try {
      const body = {
        classTitle: Title,
        description: Desc,
        dateNtime: newDate,
        trainerId: trainerName,
      };
      console.log(body);
      const response = await addClassApi(body);
      console.log(response);
      alert("Feedback submission Successfull");
      navigate(0);
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
        <h3>Add Class Form</h3>
        <div className="auth-body">
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
                autoComplete="off"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password" className="input-label">
                Trainer
              </label>

              <select
                name="trainer"
                id="trainer"
                className="input-control"
                onChange={(e) => setTrainerName(e.target.value)}
              >
                <option value="select">Select Trainer</option>
                {Users.map((user, index) => {
                  return (
                    user.role === "trainer" && (
                      <option key={index} value={user._id}>{user.name}</option>
                    )
                  );
                })}
              </select>
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

export default AddClass;
