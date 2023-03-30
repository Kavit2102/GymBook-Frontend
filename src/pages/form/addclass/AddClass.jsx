import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { fetchCustmersApi } from "../../../service/auth.service";
import { addClassApi } from "../../../service/class.service";
import "./AddClass.scss";

const AddClass = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [trainerName, setTrainerName] = useState("");
  const [trainerId, setTrainerId] = useState("");
  const [Users, setUsers] = useState([]);

  const fetchTrainers = async () => {
    let users = await fetchCustmersApi();
    await setUsers(users.allUser);
    console.log(Users);
  };

  // const handleSelect = (e) => {
  //   setTrainerName(e.target.value);
  //   console.log(trainerName);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDate = new Date();
    const hour = Time.split(":")[0];
    const minute = Time.split(":")[1];
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    try {
      const body = {
        classTitle: Title,
        description: Desc,
        dateNtime: newDate,
        // trainerId: ,
        tainerName: trainerName,
      };
      console.log(body);
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

  useEffect(() => {
    fetchTrainers();
  }, []);

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
              {/* <input
                type="text"
                name="trainer"
                id="trainer"
                className="input-control"
                placeholder="Trainer"
                autoComplete="off"
                required
                onChange={(e) => setTrainer(e.target.value)}
              /> */}

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
                      <option key={index}>{user.name}</option>
                    )
                  );
                })}
              </select>
              {/* {console.log(Trainers)} */}
            </div>

            <div className="input-field">
              <label htmlFor="tid" className="input-label">
                TrainerID
              </label>
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
