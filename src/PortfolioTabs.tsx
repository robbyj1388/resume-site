import { useEffect, useRef, useState } from "react";
import "./PortfolioTabs.css";
import Folder from "./Folder.tsx";

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
    console.log(activeTab);
    switch (activeTab) {
      case "welcome":
        return (
          <>
          <div id="chapter">
              <h1>Welcome</h1>
          </div>
          <p>
              Welcome to my professional portfolio! I'0m thrilled to have you here. 
              This site is a showcase of my journey, skills, and the projects I'm passionate about. 
              Dive into the "About Me" section to learn more about my background, experiences, and what drives me. 
              Explore the "Projects" section to see examples of my work and the impact I've made. 
              I hope this glimpse into my professional world sparks your interest and leads to exciting opportunities for us to collaborate. Enjoy your visit!
          </p>
          </>
        );
      case "about":
        return (
          <>
            <div id="chapter">
                        <h1>About Me</h1>
                    </div>
                    <p>
                        <h2>Contact information</h2>
                        <p>Robby L. Johnson III</p>
                        <p>Email: <a href="mailto:johnsonrobby1388@gmail.com">johnsonrobby1388@gmail.com</a></p>
                        <p>Phone: <a href="tel:(810) 300-0115">(810) 300-0115</a></p>
                        <h2>Education</h2>
                        <div>
                            <h3>Michigan Technological University</h3>
                            <p><strong>Major Course of Study:</strong> Computer Programming, Minor in Cybersecurity</p>
                            <p><strong>Expected Graduation:</strong> May 2026</p>
                        </div>
                        <div>
                            <h3>Saint Clair County Community College</h3>
                            <p><strong>Major Course of Study:</strong> Computer Programming, Core College Classes</p>
                            <p><strong>Graduation:</strong> Winter 2024</p>
                        </div>
                        <div>
                            <h3>St. Clair County Technical Education Center</h3>
                            <p><strong>Relevant Classes:</strong> Computer Science Principles, Data Structures</p>
                            <p><strong>Major Course of Study:</strong> Computer Programming</p>
                            <p><strong>Certifications:</strong> Python, Java, JavaScript, HTML, and CSS</p>
                            <p><strong>Graduation:</strong> June 2024</p>
                        </div>
                        <div>
                            <h3>St. Clair High School</h3>
                            <p><strong>Relevant Classes:</strong> Computer Programming</p>
                            <p><strong>Major Course of Study:</strong> High School Diploma</p>
                            <p><strong>Graduation:</strong> June 2024</p>
                        </div>
                    </p>
                    <div class="work-experience">
                        <h2>Work Experience</h2>
                        <div>
                            <h3>Saint Clair RESA</h3>
                            <p><strong>Position:</strong> Full Time</p>
                            <p><strong>Description:</strong> I contract out to schools and help teachers and school staff with miscellaneous technical issues. Ranging from computer hardware issues to networking issues. During the summer, I lead a team of new part-time interns on helping out with summer projects, such as projector replacements and Chromebook management.</p>
                            <p><strong>Location:</strong> Marysville, Michigan 48040</p>
                            <p><strong>Dates:</strong> 6/2023 - Current</p>
                        </div>
                    </div>
                    <h2>Skills/Experience</h2>
                    <div class="certifications">
                        <h3>Certifications:</h3>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>HTML and CSS</li>
                        </ul>
                    </div>
                    <p>
                        I have advanced knowledge of C++, C#, and the Unity Engine. I have been project manager of a web designing team of 6. 
                        I like to work efficiently and effectively, but not at the cost of quality. 
                        I was the captain of the Saint Clair Wrestling Team and I am currently improving my skills as an IT technician as well.
                    </p>
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
      <Folder setActiveTab={setActiveTab}>
        {renderContent()}
      </Folder>

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
