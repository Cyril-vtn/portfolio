import React from "react";
import "./Projets.scss";
import Projet from "./Projet.jsx";

//Images for background
import projetReactAdmin from "../assets/projet-react-admin.png";
import adviceGenerator from "../assets/advice-generator.png";
import valorantClicker from "../assets/valorant-clicker.png";
import githubSearch from "../assets/github-search.png";
import pigGame from "../assets/pig-game.png";
import portfolio from "../assets/portfolio.png";
import underConstruction from "../assets/under-construction.png";

const Projets = () => {
  return (
    <section className="projet" id="projets">
      <div className="content">
        <h2 className="section-title ">Projets récents</h2>
        <div className="space" data-height="60"></div>
        <div className="row">
          <Projet
            image={underConstruction}
            title="Sawatdee Apprendre le Thai ! "
            language="En cours de création"
          />
          <Projet
            image={portfolio}
            title="Portfolio"
            language="React"
            githubLink="https://github.com/Cyril-vtn/portfolio"
            liveLink="#"
          />
          <Projet
            image={projetReactAdmin}
            title="Admin React Dashboard"
            language="React / MaterialUI"
            githubLink="https://github.com/Cyril-vtn/react-admin-dashboard"
            liveLink="https://funny-youtiao-d39d8a.netlify.app/"
          />
          <Projet
            image={githubSearch}
            title="GitHub profile search"
            language="HTML / CSS / JS / API"
            githubLink="https://github.com/Cyril-vtn/GitHub_Search_API"
            liveLink="https://capable-croissant-261792.netlify.app/"
          />
          <Projet
            image={pigGame}
            title="Pig game"
            language="HTML / CSS / JS"
            githubLink="https://github.com/Cyril-vtn/PigGame"
            liveLink="https://spiffy-dodol-1b79c4.netlify.app"
          />
          <Projet
            image={adviceGenerator}
            title="Generateur de conseils "
            language="HTML / CSS / JS / API"
            githubLink="https://github.com/Cyril-vtn/advice-generator-app"
            liveLink="https://magical-frangollo-d0834f.netlify.app"
          />
          <Projet
            image={valorantClicker}
            title="Valorant clicker game"
            language="HTML / CSS / JS"
            githubLink="https://github.com/Cyril-vtn/Valorant_clicker"
            liveLink="https://majestic-scone-1d0d26.netlify.app"
          />
        </div>
      </div>
    </section>
  );
};

export default Projets;
