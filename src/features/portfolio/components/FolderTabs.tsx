import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

export const FolderTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (_event: React.SyntheticEvent, newTab: number) => {
    setActiveTab(newTab);
    console.log("print");
  };

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="icon tabs example"
      >
        <Tab aria-label="favorite" />
        <Tab aria-label="phone" />
        <Tab aria-label="person" />
      </Tabs>
    </Box>
  );
};
