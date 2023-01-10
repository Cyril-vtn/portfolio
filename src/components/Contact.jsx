import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import copy from "copy-to-clipboard";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copyText, setCopyText] = useState("votion.cyril@gmail.com");
  const [copiedText, setCopiedText] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esp9fda",
        "template_pljnkdy",
        form.current,
        "Kig7GK6PlsjNyxSv6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setMessage("");
          setEmail("");
          setSubject("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const copyToClipboard = () => {
    copy(copyText);
    setCopiedText(true);
    setTimeout(() => {
      setCopiedText(false);
    }, 2000);
  };
  return (
    <section className="contact" id="contact">
      <div className="content">
        <h2 className="section-title ">Me contacter</h2>
        <div className="space" data-height="60"></div>
        <div className="text-content">
          {/* <p className="hiddenText" id="textEmail">
            votion.cyril@gmail.com
          </p> */}
          <p className="text-formulaire">
            Pas fan de formulaire... Voici mon
            <span onClick={copyToClipboard}> adresse mail.</span>
            <br />
            {copiedText ? <p style={{ color: "red" }}>Copier !</p> : null}
          </p>
        </div>
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
                      placeholder="Votre prénom"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                </div>
                <div className="column md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="InputEmail"
                      placeholder="Votre adresse mail"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
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
                      placeholder="Sujet"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
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
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      style={{
                        height: "184px",
                        overflow: "auto",
                        resize: "vertical",
                      }}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" name="submit" id="submit" className="btn">
                Envoyer un message
              </button>
            </form>
          </div>
        </div>
        <div className="space" data-height="96"></div>
      </div>
    </section>
  );
};

export default Contact;
