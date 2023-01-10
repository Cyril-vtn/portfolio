import React from "react";
import "./Experiences.scss";

const Experiences = () => {
  return (
    <section className="experiences" id="experiences">
      <div className="content">
        <h2 className="section-title ">Expériences</h2>
        <div className="space" data-height="60"></div>
        <div className="row">
          <div className="experiences-container">
            <div className="experiences-content">
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">Vendeur Magasin</h3>
                  <span className="time">
                    2020 - A ce jour | Esprit Terroirs - Muizon 51140
                  </span>
                  <p>
                    Vendeur fruits et légumes. Mon rôle est de mettre à
                    contribution mes compétences afin de dynamiser le rayon et
                    augmenter le CA
                  </p>
                </div>
              </div>
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">Agent de production</h3>
                  <span className="time">
                    2019 - 2020 | Faurecia - Mouzon 08210
                  </span>
                  <p>
                    Missions intérim, chef d’équipe, gestion de 6 personnes sur
                    poste, création de pièces automobiles en respectant un
                    cahier des charges ainsi que les règles de sécurité.
                  </p>
                </div>
              </div>
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">Vendeur magasin</h3>
                  <span className="time">
                    2017 - 2018 | Carrefour Market - Blagny 08110
                  </span>
                  <p>
                    Vendeur fruits et légumes, charcuterie, surgelés. Mon rôle
                    étaient de développer les rayons cités et ainsi augmenter
                    leur CA.
                  </p>
                </div>
              </div>
              <span className="line"></span>
            </div>
          </div>
          <div className="formations-container">
            <div className="formations-content">
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">Udemy (formation developeur web)</h3>
                  <span className="time">Mars 2022 - A ce jour | en ligne</span>
                  <p>
                    Apprentissage des languages HTML CSS JS REACT SCSS au
                    travers de cours et de projets divers et variés
                  </p>
                </div>
              </div>
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">BTS MUC</h3>
                  <span className="time">
                    2015 - 2017 | Lycée Pierre-Bayle - Sedan 08200
                  </span>
                  <p>
                    BTS Management des unités commerciales, apprentissage de
                    toutes les techniques de vente et de management
                  </p>
                </div>
              </div>
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">BAC STMG</h3>
                  <span className="time">
                    2014 - 2015 | Lycée Pierre-Bayle - Sedan 08200
                  </span>
                  <p>Lycée Pierre-Bayle - Sedan 08200</p>
                </div>
              </div>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
