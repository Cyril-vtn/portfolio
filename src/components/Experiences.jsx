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
                  <h3 className="title">Chef de rayon</h3>
                  <span className="time">2020 - A ce jour</span>
                  <p>
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto.
                  </p>
                </div>
              </div>
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">Agent de production</h3>{" "}
                  <span className="time">2019 - 2020</span>
                  <p>
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto.
                  </p>
                </div>
              </div>
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">Vendeur magasin</h3>
                  <span className="time">2017 - 2018</span>
                  <p>
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto.
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
                  <h3 className="title">Chef de rayon</h3>
                  <span className="time">2020 - A ce jour</span>
                  <p>
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto.
                  </p>
                </div>
              </div>
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">Agent de production</h3>
                  <span className="time">2019 - 2020</span>
                  <p>
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto.
                  </p>
                </div>
              </div>
              <div className="timeline-container ">
                <div className="content">
                  <h3 className="title">Vendeur magasin</h3>
                  <span className="time">2017 - 2018</span>
                  <p>
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto.
                  </p>
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
