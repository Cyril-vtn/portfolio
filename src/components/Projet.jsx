import React from "react";
import "./Projet.scss";
import projetReactAdmin from "../assets/projet-react-admin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

const Projet = ({ image, title, language, githubLink, liveLink }) => {
  return (
    <div className="projet-container">
      <div className="projet-content">
        <div className="detail">
          <span className="term text-capitalize">{language}</span>
          <h4 className="title">{title}</h4>
          <a href={githubLink} className="more-btn git" target="blank">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href={liveLink} className="more-btn live" target="blank">
            <FontAwesomeIcon icon={faEarthEurope} className="icon" />
          </a>
        </div>
        <div className="thumb">
          <img src={image} alt="" className="img" />
          <div className="mask"></div>
        </div>
      </div>
    </div>
  );
};

export default Projet;
