import React from "react";
import "../styles/contentbox.css";

const ContentBox = () => {
  return (
    <>
      <div className="contentBox">
        <div id="contentTitle">About</div>
        <div id="contentText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sint
          animi neque quasi ipsa hic, distinctio sed iste id quae sunt ea ex
          dolores cum, modi quis porro, minus nisi.
          <br />
          <br />
          <b>Links:</b>
          <ul>
            <li>
              <a href="/">LinkedIn</a>
            </li>
            <li>
              <a href="/">Github</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="contentBox">
        <div id="contentTitle">Experience</div>
        <div id="contentText">
          Full-Stack developer at experis January 2023 - ongoing
          <br />
          <br />
          Developer at Netcompany, August 2021 - June 2022 (11 months)
          <br />
          <br />
          Bachelors degree, System development, 180hp, August 2018 - June 2021
        </div>
      </div>
    </>
  );
};

export default ContentBox;
