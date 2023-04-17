import React from "react";
import "../styles/projectsPage.css";
import { Container } from "@mui/material";

const Projects = () => {
  return (
    <Container maxWidth="sm">
      <div className="contentBox">
        <div id="contentTitle">Boxinator</div>
        <div id="contentText">
          Boxinator is a poject that allows users to create shipments for
          mystery boxes. It consists of a backend developed in Java with Spring,
          and a front-end developed in React. The front-end uses Tailwind css
          and Material UI and is responsive to fit screens of different sizes.
          <br />
          <br />
          Both the front-end and backend are secured with authentication and
          authorization. Keycloak is used as an identity provider.
          <br />
          <br />
          Feel free to read more about the project in the readme on the github
          repositories.
          <br />
          <br />
          Role in project:
          <ul>
            <li>Worked on both the backend and the front-end</li>
          </ul>
          <br />
          Link to github repository:{" "}
          <a href="https://github.com/Milovane/Boxinator">React project</a>
          <br />
          Link to github repository:{" "}
          <a href="https://github.com/SethOberg/boxinatorAPI">Java backend</a>
          <ul id="skillsList">
            <li>Java</li>
            <li>JPA</li>
            <li>Hibernate</li>
            <li>Spring Security</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>CSS</li>
            <li>Keycloak</li>
          </ul>
        </div>
      </div>
      {/* Other Project */}
      <div className="contentBox">
        <div id="contentTitle">Lost in translation</div>
        <div id="contentText">
          Lost in translation is a project that allows users to translate text
          to American sign language.
          <br />
          <br />
          Role in project:
          <ul>
            <li>Worked on a mockup in figma of the user interface</li>
            <li>Worked on the frontend</li>
          </ul>
          <br />
          Link to github repository:{" "}
          <a href="https://github.com/SethOberg/Lost-in-translation">Link</a>
          <ul id="skillsList">
            <li>Javascript</li>
            <li>React</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      {/* Other Project */}
      <div className="contentBox">
        <div id="contentTitle">DSS for groups</div>
        <div id="contentText">
          DSS for groups is a decision support program for generating groups.
          The program allows a user to create a form that people can use to
          register interest in joining project groups. The data from the form
          can then be downloaded and used as input in DSS for groups, which will
          then generate groups based on the input from the form.
          <br /> <br />
          The program allows the user to decide on how many members should be
          allowed in each project. The program then also has functionality like
          showing an overview of generated groups, move members, send emails to
          everyone and sending emails to specific groups.
          <br />
          <br />
          Role in project:
          <ul>
            <li>Helped create a mockup of the user interface in AdobeXD</li>
            <li>Helped with requirement gathering</li>
            <li>Worked on the backend</li>
          </ul>
          <ul id="skillsList">
            <li>Java</li>
            <li>JavaFX</li>
            <li>AdobeXD</li>
          </ul>
        </div>
      </div>
      {/* Other Project */}
    </Container>
  );
};

export default Projects;
