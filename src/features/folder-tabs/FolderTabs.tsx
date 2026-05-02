import { Box, Tab, Tabs } from "@mui/material";
import type { TabId } from "@/types/TabId";

type FolderTabsProps = {
  value: TabId;
  onChange: (value: TabId) => void;
};
export const FolderTabs = ({ value, onChange }: FolderTabsProps) => {
  const handleTabChange = (_event: React.SyntheticEvent, newTab: TabId) => {
    console.log(newTab);
    onChange(newTab);
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
        value={value}
        onChange={handleTabChange}
        aria-label="icon tabs example"
        sx={{
          "& .MuiTab-root": {
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            bgcolor: "#e0e0e0", // Inactive tab color
            mr: 1,
            minWidth: 120,
            minHeight: 44,
          },
          "& .Mui-selected": {
            bgcolor: "white", // Active tab color
            color: "black !important",
          },
        }}
      >
        <Tab value="welcome" label="Welcome" />
        <Tab value="about" label="About" />
        <Tab value="projects" label="Projects" />
      </Tabs>
    </Box>
  );
};
