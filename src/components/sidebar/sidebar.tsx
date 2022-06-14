import { FaHome, FaReact, FaServer } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import "./styles/sidebar.scss";

export const SideBar = () => {
  const buttonClick = () => {
    console.log("this does nothing");
  };

  return (
    <div className="dashboard-sidebar">
      <div>
        <FaReact
          size={30}
          color="black"
          className="App-logo"
          onClick={buttonClick}
        />
      </div>
      <div className="nav">
        <FaHome
          size={30}
          color="#242424"
          className="nav-item"
          onClick={buttonClick}
        />
        <AiOutlineStock
          size={30}
          color="#242424"
          className="nav-item"
          onClick={buttonClick}
        />
        <FaServer
          size={30}
          color="#242424"
          className="nav-item"
          onClick={buttonClick}
        />
      </div>
      <div>
        <SiTypescript size={30} color="#242424" onClick={buttonClick} />
      </div>
    </div>
  );
};
