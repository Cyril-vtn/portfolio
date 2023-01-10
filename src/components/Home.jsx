import React from "react";
import "./Home.scss";
import profilePic from "../assets/profilePicBig.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import ReactTypingEffect from "react-typing-effect";
import "animate.css";
const Home = () => {
  return (
    <div className="home" id="accueil">
      <div className="profilePicWrapper animate__animated animate__fadeInDown">
        <img src={profilePic} alt="" className="profilePic" />
      </div>
      <h1 className="animate__animated animate__fadeInDown animate__delay-1s">
        Cyril Votion
      </h1>
      <p>
        <ReactTypingEffect
          text={["Dévelopeur Front-End", "Aim coach"]}
          typingDelay="1000"
          speed="80"
          eraseDelay="1500"
          eraseSpeed="80"
        />
      </p>
      <div className="social">
        <a href="https://github.com/Cyril-vtn" target="blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/cyril-votion-8b1080167/"
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="mailto:cyril.votion@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
      </div>
      <button>
        <a href="#contact" className="contactText">
          Me contacter
        </a>
      </button>
      <div>
        <a href="#apropos" className="arrowIconContent">
          <FontAwesomeIcon icon={faAngleDoubleDown} className="arrowIcon" />
        </a>
      </div>
    </div>
  );
};

export default Home;
