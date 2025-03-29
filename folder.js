document.addEventListener('DOMContentLoaded', (event) => {
    const tab1 = document.getElementById('welcome-tab');
    const tab2 = document.getElementById('about-tab');
    const tab3 = document.getElementById('projects-tab');
    const paper = document.getElementById('paper');
    const description = document.getElementById('description');
    const pageCounter = document.getElementById('page');
    let currentPage = 1;

    activate(tab1); // Make tab1 the default starting tab

    tab1.addEventListener('click', () => {
        activate(tab1); // Switch tab to active
    });

    tab2.addEventListener('click', () => {
        activate(tab2); // Switch tab to active
    });

    tab3.addEventListener('click', () => {
        activate(tab3); // Switch tab to active
    });

    const updatePageCounter = () => {
        const scrollPosition = description.scrollTop;
        const containerHeight = description.clientHeight;
        const newPage = Math.floor(scrollPosition / containerHeight) + 1;

        const descriptionTop = description.scrollTop;
        paper.style.backgroundPositionY = -descriptionTop + 'px';


        if (newPage !== currentPage) {
            currentPage = newPage;
            pageCounter.innerText = `Page: ${currentPage}`;
        }
    };

    description.addEventListener('scroll', updatePageCounter);

    function activate(tab) {
        // Change info on description
        changePaper(tab); // Change html based on what tab is clicked
        currentPage = 1;
        pageCounter.innerText = `Page: ${currentPage}`;
    }

    function changePaper(tab) {
        switch (tab) {
            case tab1:
                description.innerHTML = ` 
                    <div id="chapter">
                        <h1>Welcome</h1>
                    </div>
                    <p>
                        Welcome to my professional portfolio! I’m thrilled to have you here. 
                        This site is a showcase of my journey, skills, and the projects I’m passionate about. 
                        Dive into the "About Me" section to learn more about my background, experiences, and what drives me. 
                        Explore the "Projects" section to see examples of my work and the impact I’ve made. 
                        I hope this glimpse into my professional world sparks your interest and leads to exciting opportunities for us to collaborate. Enjoy your visit!
                    </p>
                `;
                break;

            case tab2:
                description.innerHTML = `
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
                `;
                break;

            case tab3:
                description.innerHTML = `
                    <div id="chapter">
                        <h1>Table of Projects</h1>
                    </div>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------------------------------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>
                    <p>Project Title -------------------- 1pg</p>

                `;
                break;
        }
    }
});
