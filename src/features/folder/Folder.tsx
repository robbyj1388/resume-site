import { Box } from "@mui/material";
import { FolderTabs } from "../folder-tabs/FolderTabs";
import { FolderBody } from "./components/FolderBody";
import { Paper } from "./components/Paper";

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
        height: "90vh",
        width: "100%",
        mt: folderMargin.t,
        mb: folderMargin.b,
        ml: folderMargin.l,
        mr: folderMargin.r,
        pt: folderPadding.t,
        pb: folderPadding.b,
        pl: folderPadding.l,
        pr: folderPadding.r,
        display: "flex",
        gap: 2,
      }}
    >
      <FolderBody>
        <Paper>
          <h1>TEST</h1>
        </Paper>
      </FolderBody>
      <Box
        sx={{
          ml: 4,
          pt: 8,
          pr: 1,
          flexShrink: 0,
        }}
      >
        <FolderTabs />
      </Box>
    </Box>
  );
};
