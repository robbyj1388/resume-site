import { Box } from "@mui/material";
import type React from "react";

type FolderProps = {
  children: React.ReactNode;
};

export const FolderBody = ({ children }: FolderProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "100%",
        height: "100%",
        textAlign: "center",
        boxShadow: "0px 0px 15px #787878",
        bgcolor: "rgb(248, 215, 117)",
      }}
    >
      {children}
    </Box>
  );
};
