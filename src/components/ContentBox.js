import React from "react";
import "../styles/contentbox.css";
import SocialLinks from "./SocialLinks";

const ContentBox = () => {
  return (
    <>
      <div className="contentBox">
        <div id="contentTitle">About</div>
        <div id="contentText">
          Hi! <br /> <br />
          My name is Seth. I have a bachelor in system develoment from Malmö
          University. I love to work problem solving and learn new things. I'm
          currently practicing on React, for example I created this portfolio
          with React.
          <br />
          <br />
          Feel free to contact me on linkedin!
        </div>
      </div>

      <div className="contentBox">
        <div id="contentTitle">Experience</div>
        <div id="contentText">
          <p className="textMediumTitle">Full-Stack developer at experis</p>
          January 2023 - ongoing
          <br />
          <br />
          <p className="textMediumTitle">Developer at Netcompany</p>
          August 2021 - June 2022 (11 months)
          <br />
          <br />
          <p className="textMediumTitle">
            Bachelors degree, System development, 180hp
          </p>
          Malmö University, August 2018 - June 2021
        </div>
      </div>

      <div className="contentBox">
        <div id="contentTitle">Contact</div>
        <div id="contentText">
          <SocialLinks showText={false} />
        </div>
      </div>
    </>
  );
};

export default ContentBox;
