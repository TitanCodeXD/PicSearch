//Hooks
import React from "react";

//CSS / Estilização
import "./Footer.css";
import { FaUnsplash } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Powered by{" "}
        <a href="https://unsplash.com/developers" target="_blank">
          Unsplash API <FaUnsplash />
        </a>
        .
      </p>

      <p>
        PicSearch &copy; 2024. Made by{" "}
        <a href="https://github.com/TitanCodeXD" target="_blank">
          Wesley Santos <FaGithub />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
