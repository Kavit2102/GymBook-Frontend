import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import UserContext from "../../context/user_context";
import Admin from "./admin/admin";
import Trainer from "./trainer/trainer";
import Customer from "./customer/customer";

const Home = ({ mode }) => {
  const { isUser } = useContext(UserContext);

  useEffect(() => {
    console.log(isUser.current);
  }, [isUser.current]);

  const renderContent = () => {
    switch (mode) {
      case "admin":
        return <Admin />;
      case "trainer":
        return <Trainer />;
      case "customer":
        return <Customer />;
      default:
        return <div>Invalid mode</div>;
    }
  };

  return (
    <div className="home">
      <Sidebar mode={mode} />
      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  mode: PropTypes.oneOf(["admin", "trainer", "customer"]).isRequired,
};

export default Home;
