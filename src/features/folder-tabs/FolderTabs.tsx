import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

export const FolderTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (_event: React.SyntheticEvent, newTab: number) => {
    setActiveTab(newTab);
    console.log("print");
  };

  return (
    <Box
      sx={{
        transform: "rotate(90deg)",
        transformOrigin: "top left",
        display: "inline-flex",
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="icon tabs example"
        sx={{
          "& .MuiTab-root": {
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            bgcolor: "#e0e0e0", // Inactive tab color
            mr: 1,
          },
          "& .Mui-selected": {
            bgcolor: "white", // Active tab color
            color: "black !important",
          },
        }}
      >
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
      </Tabs>
    </Box>
  );
};
