import { type ReactNode, useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";

type FolderProps = {
  children: ReactNode;
  setActiveTab: (tab: string) => void;
};

const tabs = [
  { label: "Welcome", value: "welcome" },
  { label: "About Me", value: "about" },
  { label: "Projects", value: "projects" },
];

export function Folder({ children, setActiveTab }: FolderProps) {
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    scrollTargetRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollContainer = scrollTargetRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      setShowButton(scrollContainer.scrollTop > 100);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ display: "inline-block" }}>
      <Box
        sx={{
          float: "left",
          mt: 0,
          ml: "25vw",
          p: "1%",
          bgcolor: "rgb(248, 215, 117)",
          width: "40vw",
          height: "90vh",
          zIndex: 1,
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <Box
          ref={scrollTargetRef}
          sx={{
            bgcolor: "white",
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "1px 20px",
            backgroundAttachment: "local",
            border: "1px solid #000000",
            p: "10px",
            m: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {showButton && (
            <Button
              onClick={handleScrollToTop}
              sx={{
                position: "sticky",
                top: 0,
                float: "right",
                backgroundImage: "url('/scribbles.png')",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: 2,
                p: "5px",
                border: "none",
                textAlign: "right",
                pl: "10px",
                fontSize: "3vh",
                fontWeight: "bold",
                color: "white",
                minWidth: "auto",
                textTransform: "none",
                "&:hover": {
                  backgroundImage: "url('/scribbles.png')",
                  opacity: 0.9,
                },
              }}
            >
              Top
            </Button>
          )}
          {children}
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", position: "relative", left: 0 }}>
        {tabs.map((tab) => (
          <Box
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            sx={{
              width: "10vw",
              height: "10vh",
              background: "rgb(248, 215, 117)",
              clipPath: "polygon(0 0, 28% 30%, 28% 70%, 0 100%)",
              writingMode: "vertical-lr",
              mb: "2vh",
              fontWeight: "bold",
              textAlign: "left",
              pt: "3vh",
              fontSize: "13px",
              cursor: "pointer",
              zIndex: 0,
              userSelect: "none",
            }}
          >
            {tab.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
