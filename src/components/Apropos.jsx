import React from "react";
import "./Apropos.scss";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faSquareJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Apropos = () => {
  return (
    <section className="Apropos" id="apropos">
      <div className="content">
        <h2 className="section-title">A propos</h2>
        <div className="space" data-height="60"></div>
        <div className="rows">
          <div className="content">
            <div className="row">
              <div className="description">
                <p>
                  Développeur Front-end junior passionné et dévoué. Créatif et
                  soucieux de l'expérience utilisateur, je souhaite contribuer à
                  la création de sites web innovants et réactifs grace aux
                  technologies comme React ou NextJS. À la recherche
                  d'opportunités d'alternance pour continuer à développer mes
                  compétences dans ce domaine qui me passionne depuis maintenant
                  plusieurs années.
                </p>
                <a href="resume.pdf" download="resume.pdf">
                  <button className="btn">Télécharger CV</button>
                </a>
              </div>
              <div className="skills">
                <div className="icons">
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className="icon"
                    title="html"
                  />
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    className="icon"
                    title="css"
                  />
                  <FontAwesomeIcon
                    icon={faSass}
                    className="icon"
                    title="sass"
                  />
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    className="icon"
                    title="Javascript"
                  />
                  <FontAwesomeIcon
                    icon={faReact}
                    className="icon"
                    title="React"
                  />
                </div>
                <div className="projets">
                  <div className="text_content">
                    Envie de voir tous mes <span>projets</span> réalisés
                  </div>

                  <div>
                    <a href="#projets">
                      <button className="btn">Clique ici</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
