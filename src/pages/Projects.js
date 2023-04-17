import React from "react";
import "../styles/projectsPage.css";

const Projects = () => {
  return (
    <>
      <div className="contentBox">
        <div id="contentTitle">Project Name</div>
        <div id="contentText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sint
          animi neque quasi ipsa hic, distinctio sed iste id quae sunt ea ex
          dolores cum, modi quis porro, minus nisi.
          <br />
          <br />
          Link to github repository: <a href="/">Link</a>
          <ul id="skillsList">
            <li>Java</li>
            <li>Spring</li>
            <li>React</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
