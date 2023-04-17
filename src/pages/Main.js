import React from "react";
import "../styles/mainPage.css";
import SocialLinks from "../components/SocialLinks";

const Main = () => {
  return (
    <>
      <div id="indexContent">
        <p className="textMediumTitle">Hello!</p>
        Welcome to my portfolio!
        <br />
        <br />
        This website was developed with React and Material UI.
      </div>
      <div id="indexContent">
        <SocialLinks showLinks={true} />
      </div>
    </>
  );
};

export default Main;
