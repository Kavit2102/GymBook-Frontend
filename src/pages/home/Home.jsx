import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = (props) => {
  return (
    <div className="home">
      <Sidebar mode={props.mode}/>
      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">
            {props.mode === "admin" && <h1>Admin Dashboard</h1>}
            {props.mode === "trainer" && <h1>Trainer Dashboard</h1>}
            {props.mode === "customer" && <h1>Customer Dashboard</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
