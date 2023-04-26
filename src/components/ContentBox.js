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
        <div id="contentTitle">Links</div>
        <div id="contentText">
          <SocialLinks showText={false} />
        </div>
      </div>
    </>
  );
};

export default ContentBox;
