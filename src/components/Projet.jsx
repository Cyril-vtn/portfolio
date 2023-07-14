import React from "react";
import "./Projet.scss";
import projetReactAdmin from "../assets/projet-react-admin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

/**
 * Renders a project component.
 *
 * @param {string} image - The URL of the project image.
 * @param {string} title - The title of the project.
 * @param {string} language - The programming language used in the project.
 * @param {string} githubLink - The URL of the project's GitHub repository.
 * @param {string} liveLink - The URL of the live version of the project.
 * @returns {JSX.Element} - The rendered project component.
 */
const Projet = ({ image, title, language, githubLink, liveLink }) => {
  return (
    <div className="projet-container">
      <div className="projet-content">
        {/* Project details */}
        <div className="detail">
          <span className="term text-capitalize">{language}</span>
          <h4 className="title">{title}</h4>
          {/* GitHub link */}
          <a
            href={githubLink}
            className="more-btn git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          {/* Live link */}
          <a
            href={liveLink}
            className="more-btn live"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEarthEurope} className="icon" />
          </a>
        </div>
        {/* Project thumbnail */}
        <div className="thumb">
          <img src={image} alt="" className="img" />
          <div className="mask"></div>
        </div>
      </div>
    </div>
  );
};
export default Projet;
