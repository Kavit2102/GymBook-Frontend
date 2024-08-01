import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  adminSideBar,
  customerSideBar,
  trainerSideBar,
} from "../../utils/sideBarData";
import UserContext from "../../context/user_context";

const Sidebar = ({ mode }) => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const deleteLT = (e) => {
    e.preventDefault();
    localStorage.removeItem("login_status");
    localStorage.removeItem("token_status");
    localStorage.removeItem("user_role");
    navigate("/");
    updateUser(false);
  };

  const renderSidebarItems = (items) => (
    <ul>
      {items.map((item, index) => (
        <Link
          key={index}
          to={`/${mode}/${item.href}`}
          style={{ textDecoration: "none" }}
        >
          <li>
            {/* <DynamicFormIcon className="icon" /> */}
            <span>{item.innerText}</span>
          </li>
        </Link>
      ))}
      <Link to="/profile" style={{ textDecoration: "none" }}>
        <li>
          {/* <PersonOutlineIcon className="icon" /> */}
          <span>Profile</span>
        </li>
      </Link>
      <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
        <li>
          {/* <ExitToAppIcon className="icon" /> */}
          <span>Logout</span>
        </li>
      </Link>
    </ul>
  );

  const getSidebarContent = () => {
    switch (mode) {
      case "admin":
        return renderSidebarItems(adminSideBar);
      case "trainer":
        return renderSidebarItems(trainerSideBar);
      case "customer":
        return renderSidebarItems(customerSideBar);
      case "profile":
        return (
          <ul>
            <Link
              to={`/${localStorage.getItem("user_role")}`}
              style={{ textDecoration: "none" }}
            >
              <li>
                {/* <ArrowBackIcon className="icon" /> */}
                <span>Go Back</span>
              </li>
            </Link>
            <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
              <li>
                {/* <ExitToAppIcon className="icon" /> */}
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`sidebar ${mode}`}>
      <div className="top">
        <Link style={{ textDecoration: "none" }} to={`/${mode}`}>
          <span className="logo">
            {/* <SportsGymnasticsIcon className="logoicon" /> */}
            <span>GymBook</span>
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">{getSidebarContent()}</div>
    </div>
  );
};

export default Sidebar;
