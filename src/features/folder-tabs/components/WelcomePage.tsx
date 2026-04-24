import { Box, Typography } from "@mui/material";

export const WelcomePage = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h3" component="h1">
          Welcome
        </Typography>
      </Box>
      <Typography>
        Welcome to my professional portfolio! I'm thrilled to have you here.
        This site is a showcase of my journey, skills, and the projects I'm
        passionate about. Dive into the "About Me" section to learn more about
        my background, experiences, and what drives me. Explore the "Projects"
        section to see examples of my work and the impact I've made. I hope this
        glimpse into my professional world sparks your interest and leads to
        exciting opportunities for us to collaborate. Enjoy your visit!
      </Typography>
    </Box>
  );
};
