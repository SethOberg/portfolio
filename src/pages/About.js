import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SkillsBox from "../components/SkillsBox";
import ContentBox from "../components/ContentBox";

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        columnSpacing={5}
        rowSpacing={1}
        direction="row"
        maxWidth="lg"
      >
        <Grid xs={12} sm={8}>
          <ContentBox />
        </Grid>
        <Grid xs={12} sm={4}>
          <SkillsBox />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
