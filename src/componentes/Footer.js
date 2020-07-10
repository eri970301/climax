import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-12">
            <div className="mb-5 py-3 text-center">
              <a className="/">
                <FontAwesomeIcon
                  className="icon_footer"
                  icon={faFacebookF}
                ></FontAwesomeIcon>
              </a>
              <a className="/">
                <FontAwesomeIcon
                  className="icon_footer"
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
              </a>
              <a className="/">
                <FontAwesomeIcon
                  className="icon_footer"
                  icon={faGithubAlt}
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-light mt-0 py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> Erika Otalvaro Z.</a>
      </div>
    </footer>
  );
}

export default Footer;
