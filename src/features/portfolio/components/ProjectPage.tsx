import { Box, Typography } from "@mui/material";
// PLACEHOLDER VARIABLE FOR PROJECT LIST
const projectsList: string[] = [
  "tableOfContents",
  "Rob-bot",
  "Javafx Web Browser",
  "Valentines Day Card",
];

export const ProjectPage = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h3" component="h1">
          Projects
        </Typography>
      </Box>
      <Box component="ul">
        {projectsList.map((project, index) => (
          <Box component="li" key={project}>
            {project} - {index + 1}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
