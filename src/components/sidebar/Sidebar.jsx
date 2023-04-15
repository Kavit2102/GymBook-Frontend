import "./sidebar.scss";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ViewListIcon from "@mui/icons-material/ViewList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const history = useNavigate();
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };

  const deleteLT = (e) => {
    e.preventDefault();
    localStorage.removeItem("login_status");
    localStorage.removeItem("token_status");
    history("/");
  };

  return (
    <>
      {props.mode === "admin" && (
        <div className="sidebar1">
          <div className="top">
            <Link style={{ textDecoration: "none" }}>
              <span className="logo">
                <SportsGymnasticsIcon className="logoicon" />
                <span>GymBook</span>
              </span>
            </Link>
          </div>

          <hr />

          <div className="center">
            <ul>
              <Link
                to="/admin/registration-form"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <DynamicFormIcon className="icon" />
                  <span>User Registration</span>
                </li>
              </Link>
              <Link
                to={"/admin/addclass-form"}
                style={{ textDecoration: "none" }}
              >
                <li>
                  <DynamicFormIcon className="icon" />
                  <span>Add Classes</span>
                </li>
              </Link>
              <Link to="/admin/view-users" style={{ textDecoration: "none" }}>
                <li>
                  <ViewListIcon className="icon" />
                  <span>User Details</span>
                </li>
              </Link>
              <Link to="/admin/view-class" style={{ textDecoration: "none" }}>
                <li>
                  <ViewListIcon className="icon" />
                  <span>Class Details</span>
                </li>
              </Link>
              <Link
                to="/admin/view-feedbacks"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <FeedbackIcon className="icon" />
                  <span>Feedback Details</span>
                </li>
              </Link>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Profile</span>
                </li>
              </Link>

              <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}

      {props.mode === "trainer" && (
        <div className="sidebar2">
          <div className="top">
            <Link style={{ textDecoration: "none" }}>
              <span className="logo">
                <SportsGymnasticsIcon className="logoicon" />
                <span>GymBook</span>
              </span>
            </Link>
          </div>

          <hr />

          <div className="center">
            <ul>
              <Link
                to="/trainer/view-booking"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <ViewListIcon className="icon" />
                  <span>Booking Details</span>
                </li>
              </Link>
              <Link
                to={"/trainer/feedback-form"}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <li>
                  <DynamicFormIcon className="icon" />
                  <span>Add Feedback</span>
                </li>
              </Link>
              <Link to={"/profile"} style={{ textDecoration: "none" }}>
                {" "}
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Profile</span>
                </li>
              </Link>

              <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}

      {props.mode === "customer" && (
        <div className="sidebar3">
          <div className="top">
            <Link style={{ textDecoration: "none" }}>
              <span className="logo">
                <SportsGymnasticsIcon className="logoicon" />
                <span>GymBook</span>
              </span>
            </Link>
          </div>

          <hr />

          <div className="center">
            <ul>
              <Link
                to="/customer/view-classes"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <ViewListIcon className="icon" />
                  <span>Classes</span>
                </li>
              </Link>
              <Link
                to="/customer/my-booking"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <ViewListIcon className="icon" />
                  <span>My Booking's</span>
                </li>
              </Link>
              <Link
                to={"/customer/feedback-form"}
                style={{ textDecoration: "none" }}
              >
                <li>
                  <FeedbackIcon className="icon" />
                  <span>Add Feedback</span>
                </li>
              </Link>
              <Link to={"/profile"} style={{ textDecoration: "none" }}>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Profile</span>
                </li>
              </Link>

              <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}

      {props.mode === "profile" && (
        <div className="sidebar">
          <div className="top">
            <Link style={{ textDecoration: "none" }}>
              <span className="logo">
                <SportsGymnasticsIcon className="logoicon" />
                <span>GymBook</span>
              </span>
            </Link>
          </div>

          <hr />

          <div className="center">
            <ul>
              <Link onClick={Back} style={{ textDecoration: "none" }}>
                <li>
                  <ArrowBackIcon className="icon" />
                  <span>Go Back</span>
                </li>
              </Link>

              <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
