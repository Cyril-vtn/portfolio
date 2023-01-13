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
                  Cyril Votion, jeune développeur web Front-end ! Je crée des
                  sites web responsive et user-friendly en utilisant Javascript
                  et React.
                </p>
                <div className="btn">
                  <a href="resume.pdf" download="resume.pdf">
                    Télécharger CV
                  </a>
                </div>
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

                  <div className="btn">
                    <a href="#projets">Clique ici</a>
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
