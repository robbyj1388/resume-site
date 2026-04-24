import { Box } from "@mui/material";
const folderMargin = {
  t: 5,
  b: 5,
  l: 20,
  r: 10, // Leave Space for folder tabs
};
const folderPadding = {
  t: 2,
  b: 2,
  l: 5,
  r: 5,
};

export const Folder = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: "0px 0px 15px #787878",
        height: "90vh",
        mt: folderMargin.t,
        mb: folderMargin.b,
        ml: folderMargin.l,
        mr: folderMargin.r,
        pt: folderPadding.t,
        pb: folderPadding.b,
        pl: folderPadding.l,
        pr: folderPadding.r,
        bgcolor: "rgb(248, 215, 117)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "white",
          /* Create lines in paper */
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "1px 20px",
          backgroundAttachment: "local",
          border: "1px solid #000000",
        }}
      >
        <h1> Test</h1>
      </Box>
    </Box>
  );
};
