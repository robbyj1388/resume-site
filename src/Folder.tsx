// Folder.tsx
import React, { ReactNode } from "react";
import "./Folder.css";

type FolderProps = {
  children: ReactNode;
  setActiveTab: (tab: string) => void;
};

export default function Folder({ children, setActiveTab }: FolderProps ) {
  return (
    <div className="container">
      <div className="folder">
        <div className="paper" id="description">
          {children}
        </div>
      </div>
      
      <div className="tabs">
        <div className="trapezoid" onClick={() => {setActiveTab("welcome")}}>Welcome</div>
        <div className="trapezoid" onClick={() => {setActiveTab("about")}}>About Me</div>
        <div className="trapezoid" onClick={() => {setActiveTab("projects")}}>Projects</div>
      </div>
      
    </div>
  );
}
