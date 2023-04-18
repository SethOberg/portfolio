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
          When I started I participated in Experis academy, which is an
          accelerated learning program during 3 months. I participated in the
          Java Fullstack program and learned to use React and Angular as well as
          expanded my knowledge in Java and learnt more about Spring Web, Spring
          Security and Spring data JPA.
          <br />
          <br />
          <p className="textMediumTitle">Developer at Netcompany</p>
          August 2021 - June 2022 (11 months)
          <br />
          <br />
          I worked on maintaining a large complex system developed in Java using
          spring, thymeleaf and an oracle sql database.
          <br />
          <br />
          <p className="textMediumTitle">
            Bachelors degree, System development, 180hp
          </p>
          Malmö University, August 2018 - June 2021
          <br /> <br />
          My studies were quite varied, I both had courses in programming as
          well as courses in project management as well as interaction design.
          <br />
          <br />
          Some courses I had:
          <ul>
            <li>Object oriented programming</li>
            <li>Threads and data communication</li>
            <li>Multithreaded programming</li>
            <li>Database technology</li>
            <li>System development</li>
            <li>Programming in C# for non beginners</li>
          </ul>
        </div>
      </div>

      <div className="contentBox">
        <div id="contentTitle">Links</div>
        <div id="contentText">
          <SocialLinks showText={false} />
        </div>
      </div>
    </>
  );
};

export default ContentBox;
