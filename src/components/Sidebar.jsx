import React from "react";
import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SchoolIcon from "@mui/icons-material/School";
import LayersIcon from "@mui/icons-material/Layers";
import ChatIcon from "@mui/icons-material/Chat";
import logo from "../../src/assets/logo.svg";
const Sidebars = () => {
  return (
    <>
      <div className="mobileSidebar">
        <img src={logo} className="mobileLogo" />
      </div>

      <div className="sidebar">
        <img src={logo} />
        <nav className="navbar">
          <ul>
            <li>
              <a href="#accueil">
                <HomeIcon className="icon" /> Accueil
              </a>
            </li>
            <li>
              <a href="#apropos">
                <Person2Icon className="icon" />A propos
              </a>
            </li>
            <li>
              <a href="#experiences">
                <SchoolIcon className="icon" />
                Expériences
              </a>
            </li>
            <li>
              <a href="#">
                <LayersIcon className="icon" />
                Projets
              </a>
            </li>
            <li>
              <a href="">
                <ChatIcon className="icon" /> Contact
              </a>
            </li>
          </ul>
        </nav>
        <h5 className="footer">© 2023 Cyril Votion</h5>
      </div>
    </>
  );
};

export default Sidebars;
