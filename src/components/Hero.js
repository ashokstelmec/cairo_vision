import React from "react";
import { ImAndroid } from "react-icons/im";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-content">
        <div className="content">
          <div className="companion-care">
            <h2>Companion care</h2>
            <span>
              Papa Pals provide vital social support and care to strengthen
              families, help older adults remain connected, and support diverse
              communities—providing win-win benefits for all.
            </span>
          </div>

          <div className="about-companion-care">
            <div className="promote-independence">
              <ImAndroid className="android-icon" />
              <h4>Promote independence</h4>
              <p>
                Papa gives older adults companionship and support to live and
                feel better at home.
              </p>
            </div>
            <div className="promote-independence">
              <ImAndroid className="android-icon" />
              <h4>Reduce disparities</h4>
              <p>
                Papa addresses needs holistically, advancing equity for
                traditionally underserved populations.
              </p>
            </div>
            <div className="promote-independence">
              <ImAndroid className="android-icon" />
              <h4>Cure loneliness</h4>
              <p>
                No one’s meant to go it alone. With Papa, “together” is just a
                call or click away.
              </p>
            </div>
            <div className="promote-independence">
              <ImAndroid className="android-icon" />
              <h4>Improve outcomes</h4>
              <p>
                Research shows that members feel physically and mentally
                healthier with Papa.
              </p>
            </div>
            <div className="promote-independence">
              <ImAndroid className="android-icon" />
              <h4>Control costs</h4>
              <p>
                Less isolation, more connection, reliable transportation,
                nutritious food—the results add up.
              </p>
            </div>
            <div className="promote-independence">
              <ImAndroid className="android-icon" />
              <h4>Increase satisfaction</h4>
              <p>
                Our one-of-a-kind benefit helps health plans retain members and
                employers attract—and keep!—talent.
              </p>
            </div>
          </div>
        </div>

        <div className="sign-me-up">
          <p>Introducing our new quarterly magazine, Rx: Human</p>
          <h3>
            Subscribe for the latest on topics like health equity, social
            <br /> drivers of health, and closing care gaps.
          </h3>
          <button>SIGN ME UP</button>
        </div>

        <div className="rx-human">
          <img
            src="./pexels-joão-rabelo-10291366.jpg"
            alt="Mother daughter duo"
            className="mother-daughter"
          />
          <img src="./pepsi.jpeg" alt="Pepsi Coke" className="pepsi-coke" />
          <img src="./rx-human.jpg" alt="Old Aunty" className="old-aunty" />
        </div>
      </div>
      <div className="meet-papa">
        <img src="./Website-Brand-Video-1536x689.webp" alt="Meet papa" />
        <div className="play-circle">
          <i class="fa-solid fa-play"></i>
        </div>
      </div>
    </>
  );
};

export default Hero;
