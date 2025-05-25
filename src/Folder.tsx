// Folder.tsx
import React, { ReactNode } from "react";
import "./PortfolioTabs.css"; // Or put folder styles in their own CSS

type FolderProps = {
  children: ReactNode;
};

export default function Folder({ children }: FolderProps) {
  return (
    <div className="folder">
      <div className="paper" id="description">
        {children}
      </div>
    </div>
  );
}
