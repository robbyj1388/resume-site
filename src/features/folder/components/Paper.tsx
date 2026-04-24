import { Box } from "@mui/material";

type PaperProps = {
  children: React.ReactNode;
};

const paperMargin = {
  t: 5,
  b: 2,
  l: 5,
  r: 5,
};

export const Paper = ({ children }: PaperProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        alignSelf: "stretch",
        minWidth: 0,
        bgcolor: "white",
        /* Create lines in paper */
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
        backgroundSize: "1px 20px",
        backgroundAttachment: "local",
        border: "1px solid #000000",
        mt: paperMargin.t,
        mb: paperMargin.b,
        ml: paperMargin.l,
        mr: paperMargin.r,
      }}
    >
      {children}
    </Box>
  );
};
