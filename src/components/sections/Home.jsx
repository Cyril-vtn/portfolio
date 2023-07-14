import React from "react";
import "./Home.scss";
import profilePic from "../../assets/ProfilePicture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import ReactTypingEffect from "react-typing-effect";
import "animate.css";
/**
 * Renders the home component.
 * @returns {JSX.Element} The rendered home component.
 */
const Home = () => {
  return (
    <div className="home" id="accueil">
      {/* Profile picture */}
      <div className="profilePicWrapper animate__animated animate__fadeInDown">
        <img src={profilePic} alt="" className="profilePic" />
      </div>

      {/* Name */}
      <h1 className="animate__animated animate__fadeInDown animate__delay-1s">
        Cyril Votion
      </h1>

      {/* Typing effect */}
      <p>
        <ReactTypingEffect
          // Text to be typed
          text={["Dévelopeur Front-End", "Compétiteur", "Créatif", "Autonome"]}
          typingDelay="1000"
          speed="80"
          eraseDelay="1500"
          eraseSpeed="80"
        />
      </p>

      {/* Social links */}
      <div className="social">
        <a href="https://github.com/Cyril-vtn" target="blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://linkedin.com/in/cyrilvotion" target="blank">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="mailto:votion.cyril@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
      </div>

      {/* Contact button */}
      <a href="#contact">
        <button className="contactText">Me contacter</button>
      </a>

      {/* Scroll down arrow */}
      <div>
        <a href="#apropos" className="arrowIconContent">
          <FontAwesomeIcon icon={faAngleDoubleDown} className="arrowIcon" />
        </a>
      </div>
    </div>
  );
};

export default Home;
