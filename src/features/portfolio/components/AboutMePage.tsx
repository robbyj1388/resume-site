import { Box, Typography, Link } from "@mui/material";

export const AboutMePage = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h3" component="h1">
          About Me
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" component="h2">
          Contact information
        </Typography>
        <Typography>Robby L. Johnson III</Typography>
        <Typography>
          Email:{" "}
          <Link href="mailto:johnsonrobby1388@gmail.com">
            johnsonrobby1388@gmail.com
          </Link>
        </Typography>
        <Typography>
          Phone: <Link href="tel:(810) 300-0115">(810) 300-0115</Link>
        </Typography>
        <Typography variant="h4" component="h2">
          Education
        </Typography>
        <Box>
          <Typography variant="h5" component="h3">
            Michigan Technological University
          </Typography>
          <Typography>
            <strong>Major Course of Study:</strong> Computer Programming, Minor
            in Cybersecurity
          </Typography>
          <Typography>
            <strong>Expected Graduation:</strong> April 2027
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" component="h3">
            Saint Clair County Community College
          </Typography>
          <Typography>
            <strong>Major Course of Study:</strong> Computer Programming, Core
            College Classes
          </Typography>
          <Typography>
            <strong>Graduation:</strong> June 2024
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" component="h3">
            St. Clair County Technical Education Center
          </Typography>
          <Typography>
            <strong>Relevant Classes:</strong> Computer Science Principles, Data
            Structures
          </Typography>
          <Typography>
            <strong>Major Course of Study:</strong> Computer Programming
          </Typography>
          <Typography>
            <strong>Certifications:</strong> Python, Java, JavaScript, HTML, and
            CSS
          </Typography>
          <Typography>
            <strong>Graduation:</strong> June 2024
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" component="h3">
            St. Clair High School
          </Typography>
          <Typography>
            <strong>Relevant Classes:</strong> Computer Programming
          </Typography>
          <Typography>
            <strong>Major Course of Study:</strong> High School Diploma
          </Typography>
          <Typography>
            <strong>Graduation:</strong> June 2024
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" component="h2">
          Work Experience
        </Typography>
        <Box>
          <Typography variant="h5" component="h3">
            Saint Clair RESA
          </Typography>
          <Typography>
            <strong>Position:</strong> Full Time
          </Typography>
          <Typography>
            <strong>Description:</strong> I contract out to schools and help
            teachers and school staff with miscellaneous technical issues.
            Ranging from computer hardware issues to networking issues. During
            the summer, I lead a team of new part-time interns on helping out
            with summer projects, such as projector replacements and Chromebook
            management.
          </Typography>
          <Typography>
            <strong>Location:</strong> Marysville, Michigan 48040
          </Typography>
          <Typography>
            <strong>Dates:</strong> June 2023 - Current
          </Typography>
        </Box>
      </Box>
      <Typography variant="h4" component="h2">
        Skills/Experience
      </Typography>
      <Box>
        <Typography variant="h5" component="h3">
          Certifications:
        </Typography>
        <Box component="ul" sx={{ mt: 0 }}>
          <Box component="li">Python</Box>
          <Box component="li">Java</Box>
          <Box component="li">JavaScript</Box>
          <Box component="li">HTML and CSS</Box>
        </Box>
      </Box>
      <Typography>
        I have advanced knowledge of C++, C#, and the Unity Engine. I have been
        project manager of a web designing team of 6. I like to work efficiently
        and effectively, but not at the cost of quality. I was the captain of
        the Saint Clair Wrestling Team and I am currently improving my skills as
        an IT technician as well.
      </Typography>
    </Box>
  );
};
