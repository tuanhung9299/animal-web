import React from "react";
import Helmet from "../../components/Helmet";
import { AiFillFacebook, AiFillGithub, AiFillMail } from "react-icons/ai";


const Contact = () => {
  return (
    <Helmet title="Contact">
      <div className="contact">
        <p className="contact__ContactHeading">Hi !</p>
        <h3 className="contact__ContactName">My name is Dao Tuan Hung</h3>
        <p className="contact__TextContactHeading">I'm a front-end Developer</p>

        <div className="contact__ContactItemWrapper">
          <div className="contact__ContactItem">
            <a
              className="facebook"
              href="https://www.facebook.com/hung.ba.184/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
            <h3>Facebook</h3>
            <p>facebook.com/hung.ba.184</p>
          </div>

          <div className="contact__ContactItem">
            <a
              className="github"
              href="https://github.com/tuanhung9299"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <h3>Github</h3>
            <p>github.com/tuanhung9299</p>
          </div>

          <div className="contact__ContactItem">
            <a
              className="gmail"
              href="jobs.tuanhung9299@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillMail />
            </a>
            <h3>E-mail</h3>
            <p>jobs.tuanhung9299@gmail.com</p>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
