import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import SkillsBox from "../components/SkillsBox";
import ContentBox from "../components/ContentBox";
import { Container } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

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
