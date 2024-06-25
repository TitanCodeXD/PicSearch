//Hooks
import React from "react";

//RRD
import { Link } from "react-router-dom";

//Icons
import { IoReturnUpBackOutline } from "react-icons/io5";

//Css
import "./About.css";

const About = () => {
  return (
    <main className="content">
      <div>
        <h1>About this Website...</h1>
        <p>
          {" "}
          Seeking to evolve in programming, I made this site to improve my
          knowledge of React.js, using axios to work with APIs. This website is
          a personal project aimed at <span>studies</span>. An image gallery
          Website, where you search by category or randomly. This site was
          powered by the{" "}
          <a href="https://unsplash.com/developers" target="_blank">
            Unsplash API
          </a>
          .
        </p>
        <h2>
          Check my portfolio and get in touch with me clicking here{" "}
          <a href="https://portfolio-wesley-santos.netlify.app" target="_blank">
            Portfolio.
          </a>
        </h2>
      </div>
      <div className="btn">
        <button>
          <Link to="/">
            Back to Home <IoReturnUpBackOutline />
          </Link>
        </button>
      </div>
    </main>
  );
};

export default About;
