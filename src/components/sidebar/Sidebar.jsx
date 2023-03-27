import "./sidebar.scss";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ViewListIcon from "@mui/icons-material/ViewList";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import Logo from "../../images/gym.png";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={Logo} alt="" height={35} />
            <span>Gym Book</span>
          </span>
        </Link>
      </div>

      <hr />

      <div className="center">
        {props.mode === "admin" && (
          <ul>
            <Link
              to="/admin/registration-form"
              style={{ textDecoration: "none" }}
            >
              <li>
                <DynamicFormIcon className="icon" />
                <span>Registration Form</span>
              </li>
            </Link>
            <Link
              to={"/admin/addclass-form"}
              style={{ textDecoration: "none" }}
            >
              <li>
                <DynamicFormIcon className="icon" />
                <span>Add Classes Form</span>
              </li>
            </Link>
            <Link to="/admin/view-users" style={{ textDecoration: "none" }}>
              <li>
                <ViewListIcon className="icon" />
                <span>View Users</span>
              </li>
            </Link>
            <Link to="/admin/view-feedbacks" style={{ textDecoration: "none" }}>
              <li>
                <FeedbackIcon className="icon" />
                <span>View Feedbacks</span>
              </li>
            </Link>
            <Link to="/account" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Account</span>
              </li>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        )}

        {props.mode === "trainer" && (
          <ul>
            <Link to="/trainer/view-booking" style={{ textDecoration: "none" }}>
              <li>
                <ViewListIcon className="icon" />
                <span>View Booking</span>
              </li>
            </Link>
            <Link
              to={"/trainer/feedback-form"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              <li>
                <DynamicFormIcon className="icon" />
                <span>Feedback Form</span>
              </li>
            </Link>
            <Link to={"/account"} style={{ textDecoration: "none" }}>
              {" "}
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Account</span>
              </li>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        )}

        {props.mode === "customer" && (
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
            <Link to="/customer/my-booking" style={{ textDecoration: "none" }}>
              <li>
                <ViewListIcon className="icon" />
                <span>My Booking</span>
              </li>
            </Link>
            <Link
              to={"/customer/feedback-form"}
              style={{ textDecoration: "none" }}
            >
              <li>
                <FeedbackIcon className="icon" />
                <span>Feedback Form</span>
              </li>
            </Link>
            <Link to={"/account"} style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Account</span>
              </li>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        )}

        {props.mode === "account" && (
          <ul>
            <Link to={""} style={{ textDecoration: "none" }}>
              <li>
                <ArrowBackIcon className="icon" />
                <span>Go Back</span>
              </li>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
