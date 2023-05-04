import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoIosMan } from "react-icons/io";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-logo">
            <img src="./linkedin.png" alt="header logo" />
          </div>
          <div className="menu-items">
            <li>Health Plans</li>
            <li>Employers</li>
            <li>Be a Papa Pal</li>
            <li>Resources</li>
          </div>
          <div className="contact-papa">CONTACT PAPA</div>
          <div className="contact-papa menu-icon">
            <CgMenuRight className="cg-menu" />
          </div>
        </div>

        <div className="hero-section">
          <div className="hero">
            <h2>
              Hi! We’re <br />
              Papa.
            </h2>
            <p>We all need a pal sometimes. That’s why Papa’s here.</p>
            <span>
              Papa helps health plans and employers connect members and their
              families to real people for help with companionship, everyday
              tasks, transportation, and more. It’s vital human connection,
              right to the front door.
            </span>
            <select>
              <option>I'd like to learn...</option>
              <option>how Papa works with health plans</option>
              <option>where I can sign up to be a Papa Pal.</option>
              <option>how to get started as a member</option>
              <option>about career opportunities at Papa</option>
            </select>
          </div>

          <div className="hero-image">
            <img src="./FPO_Home-Hero_683x1096.webp" alt="Hero-Papa" />
          </div>
        </div>
      </header>

     <div className="human-icon">
        < IoIosMan className="man-icon"/>
     </div>
    </>
  );
};

export default Home;
