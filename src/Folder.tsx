import React, { type ReactNode, useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Folder.css";

type FolderProps = {
  children: ReactNode;
  setActiveTab: (tab: string) => void;
};

export default function Folder({ children, setActiveTab }: FolderProps) {
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    scrollTargetRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollContainer = scrollTargetRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      setShowButton(scrollContainer.scrollTop > 100); // Show if scrolled more than 100px
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="folder">
        <div className="paper" ref={scrollTargetRef}>
          {showButton && (
            <button className="btn scroll-to-top" onClick={handleScrollToTop}>
              Top
            </button>
          )}
          {children}
        </div>
      </div>

      <div className="tabs">
        <div className="trapezoid" onClick={() => setActiveTab("welcome")}>
          Welcome
        </div>
        <div className="trapezoid" onClick={() => setActiveTab("about")}>
          About Me
        </div>
        <div className="trapezoid" onClick={() => setActiveTab("projects")}>
          Projects
        </div>
      </div>
    </div>
  );
}
