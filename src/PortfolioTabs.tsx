import { useEffect, useRef, useState } from "react";
import "./PortfolioTabs.css";

const projectsList = ["tableOfContents"];
const repeatedProjects = ["Rob-bot", "Javafx Web Browser", "Valentines Day Card"];
while (projectsList.length < 100) projectsList.push(...repeatedProjects);

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("welcome");
  const [currentPage, setCurrentPage] = useState(0);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const topBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeTab === "projects") generateTableOfContents();
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      if (descriptionRef.current && topBtnRef.current) {
        const scrollTop = descriptionRef.current.scrollTop;
        topBtnRef.current.style.visibility = scrollTop > 100 ? "visible" : "hidden";
      }
    };

    const description = descriptionRef.current;
    if (description) description.addEventListener("scroll", handleScroll);
    return () => {
      if (description) description.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const generateTableOfContents = () => {
    const list = document.getElementById("table-of-contents");
    if (list && list.children.length === 0) {
      projectsList.forEach((proj, i) => {
        const li = document.createElement("li");
        li.textContent = `${proj} - ${i + 1}`;
        list.appendChild(li);
      });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "welcome":
        return (
          <>
            <div id="chapter"><h1>Welcome</h1></div>
            <p>Welcome to my professional portfolio! I'm thrilled to have you here...</p>
          </>
        );
      case "about":
        return (
          <>
            <div id="chapter"><h1>About Me</h1></div>
            <h2>Contact Information</h2>
            <p>Robby L. Johnson III</p>
            <p>Email: <a href="mailto:johnsonrobby1388@gmail.com">johnsonrobby1388@gmail.com</a></p>
            <p>Phone: <a href="tel:(810) 300-0115">(810) 300-0115</a></p>
            <p>Github: <a href="https://github.com/robbyj1388" target="_blank" rel="noreferrer">robbyj1388</a></p>
          </>
        );
      case "projects":
        return (
          <>
            <div id="chapter"><h1>Projects</h1></div>
            <ul id="table-of-contents"></ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>

      
      <div ref={descriptionRef}>
        {renderContent()}
      </div>

      <button
        id="top"
        ref={topBtnRef}
        onClick={() => {
          descriptionRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Top
      </button>
    </div>
  );
}
