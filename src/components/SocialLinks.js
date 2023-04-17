import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialLinks = ({ showLinks }) => {
  return (
    <>
      {showLinks && "Find me on:"}
      <ul className="socialLinks">
        <li>
          <a href="https://github.com/SethOberg">
            <GitHubIcon fontSize="large" />
          </a>
        </li>
        <li>
          <a href="https://se.linkedin.com/in/seth-%C3%B6berg-9067b220b">
            <LinkedInIcon sx={{ color: "#0072b1" }} fontSize="large" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialLinks;
