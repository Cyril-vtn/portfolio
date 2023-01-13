import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import copy from "copy-to-clipboard";
import "./Contact.scss";

const Contact = () => {
  // Form handling state
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // state for text copied
  const [copiedText, setCopiedText] = useState(false);

  // handling form sending
  const [emailSend, setEmailSend] = useState(false);

  // Error state
  const [error, setError] = useState();
  const [alertMessage, setAlertMessage] = useState("");

  // Connecting to emailjs account and sending form
  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return;
    }
    emailjs

      .sendForm(
        "service_esp9fda",
        "template_pljnkdy",
        form.current,
        "Kig7GK6PlsjNyxSv6"
      )
      .then(
        (result) => {
          setEmailSend(true);
          setAlertMessage("Email envoyé");
          setTimeout(() => {
            setEmailSend(false);
          }, 2000);
          setName("");
          setMessage("");
          setEmail("");
          setSubject("");
        },
        (e) => {
          setEmailSend(true);
          setError(e.message);
          setAlertMessage(error);
          setTimeout(() => {
            setEmailSend(false);
          }, 2000);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="content">
        <h2 className="section-title ">Me contacter</h2>
        <div className="space" data-height="60"></div>
        <div className="text-content">
          <p className="text-formulaire">
            Pas fan de formulaire... Voici mon
            <span>
              <a href="mailto:votion.cyril@gmail.com"> adresse mail.</a>
            </span>
            <br />
            {/* Setup alert when user click on text */}
            {copiedText ? <p className="copy-text">{alertMessage}</p> : null}
          </p>
        </div>

        {/* FORM */}
        <div className="row">
          <div className="contact-form-content">
            <form
              id="contact-form"
              className="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="column md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="InputName"
                      placeholder="Votre prénom *"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required="true"
                    />
                  </div>
                </div>
                <div className="column md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control "
                      name="email"
                      id="InputEmail"
                      placeholder="Votre adresse mail *"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required="true"
                    />
                  </div>
                </div>
                <div className="column md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="InputSubject"
                      placeholder="Sujet *"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      required="true"
                    />
                  </div>
                </div>
                <div className="column md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      id="InputMessage"
                      placeholder="Message *"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      style={{
                        height: "184px",
                        overflow: "auto",
                        resize: "vertical",
                      }}
                      required="true"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" name="submit" id="submit" className="btn">
                Envoyer un message
              </button>
              {emailSend ? <p className="copy-text">{alertMessage}</p> : null}
            </form>
          </div>
        </div>
        <div className="space" data-height="96"></div>
      </div>
    </section>
  );
};

export default Contact;
