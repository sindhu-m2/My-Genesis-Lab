/* =========================================
   MY GENESIS LAB - PROJECT DATA
   ========================================= */

const projectData = {

    stock: {
        number: "PROJECT 01",
        title: "Stock Portfolio Tracker",
        icon: "📈",

        description:
            "A Python-based stock portfolio application to track stocks, manage holdings and monitor investment performance.",

        objective:
            "To develop a stock portfolio tracker that helps users monitor stock prices, manage their investments and understand portfolio performance.",

        live: "https://stock-portfolio-project-7os4.onrender.com/",

        github: "https://github.com/sindhu-m2/Stock-Portfolio-Project",

        readme: "https://github.com/sindhu-m2/Stock-Portfolio-Project#readme",

        technologies: [
            "Python",
            "Flask",
            "HTML",
            "CSS",
            "JavaScript",
            "Stock API",
            "JSON"
        ],

        features: [
            "Stock price tracking",
            "Portfolio management",
            "Buy and sell functionality",
            "Holdings management",
            "Profit and loss tracking",
            "Stock information display"
        ],

        learned: [
            "Python programming",
            "Flask web development",
            "API integration",
            "Portfolio calculations",
            "Frontend and backend integration"
        ]
    },


    hangman: {
        number: "PROJECT 02",
        title: "Hangman Game",
        icon: "🎮",

        description:
            "An interactive word-guessing game developed using Python with a simple and engaging gameplay experience.",

        objective:
            "To create an interactive Hangman game where players guess hidden words by selecting letters while avoiding incorrect attempts.",

        live: "https://hangman-game-project.onrender.com/",

        github: "https://github.com/sindhu-m2/Hangman-Game-Project",

        readme: "https://github.com/sindhu-m2/Hangman-Game-Project#readme",

        technologies: [
            "Python",
            "HTML",
            "CSS",
            "JavaScript",
            "Flask"
        ],

        features: [
            "Interactive word guessing",
            "Letter selection",
            "Wrong attempt tracking",
            "Win and lose conditions",
            "User-friendly interface"
        ],

        learned: [
            "Python fundamentals",
            "Conditional statements",
            "Loops and functions",
            "Game logic development",
            "Web application development"
        ]
    },


    taskflow: {
        number: "PROJECT 03",
        title: "TaskFlow Automation Suite",
        icon: "⚙️",

        description:
            "A Python and Flask-based productivity application designed to simplify file management, document processing and task automation.",

        objective:
            "To develop an automation suite that combines multiple productivity tools into one web application.",

        live: "https://task-automation-project.onrender.com/",

        github: "https://github.com/sindhu-m2/Task-Automation-Project",

        readme: "https://github.com/sindhu-m2/Task-Automation-Project#readme",

        technologies: [
            "Python",
            "Flask",
            "HTML",
            "CSS",
            "JavaScript",
            "Pandas",
            "OpenPyXL",
            "PyPDF",
            "APScheduler"
        ],

        features: [
            "File management",
            "PDF merging and splitting",
            "Excel preview and cleaning",
            "Email automation",
            "Task scheduling",
            "Productivity tools"
        ],

        learned: [
            "Python automation",
            "Flask application development",
            "File handling",
            "PDF processing",
            "Excel data processing",
            "Email automation"
        ]
    }

};


/* =========================================
   PROJECT PAGE RENDER FUNCTION
   ========================================= */

function renderProject(projectKey) {

    const project = projectData[projectKey];

    if (!project) {
        return `
            <section class="page-container">
                <div class="content-card">
                    <h2>Project Not Found</h2>
                    <p>The requested project could not be found.</p>
                    <a href="projects.html" class="action-button">
                        Back to Projects
                    </a>
                </div>
            </section>
        `;
    }

    return `

        <section class="page-container">

            <!-- PROJECT HEADING -->

            <div class="page-heading">

                <span class="card-number">
                    ${project.number}
                </span>

                <h1>
                    ${project.icon} ${project.title}
                </h1>

                <p>
                    ${project.description}
                </p>

            </div>


            <!-- PROJECT OBJECTIVE -->

            <div class="content-card" id="project-details">

                <h2>🎯 Project Objective</h2>

                <p>
                    ${project.objective}
                </p>

            </div>


            <!-- TECHNOLOGIES -->

            <div class="content-card">

                <h2>💻 Technologies Used</h2>

                <div class="tag-list">

                    ${project.technologies.map(tech => `
                        <span class="tag">${tech}</span>
                    `).join("")}

                </div>

            </div>


            <!-- PROJECT FEATURES -->

            <div class="content-card">

                <h2>✨ Key Features</h2>

                <ul class="feature-list">

                    ${project.features.map(feature => `
                        <li>✓ ${feature}</li>
                    `).join("")}

                </ul>

            </div>


            <!-- WHAT I LEARNED -->

            <div class="content-card">

                <h2>🚀 What I Learned</h2>

                <ul class="feature-list">

                    ${project.learned.map(item => `
                        <li>✓ ${item}</li>
                    `).join("")}

                </ul>

            </div>


            <!-- PROJECT ACTION BUTTONS -->

            <div class="content-card">

                <h2>🔗 Explore This Project</h2>

                <p>
                    Explore the live application, source code,
                    project information and documentation.
                </p>

                <div class="action-grid">

                    <a
                        href="${project.live}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="action-button"
                    >
                        🌐 Live Preview
                    </a>


                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="action-button"
                    >
                        💻 GitHub Repository
                    </a>


                    <a
                        href="#project-details"
                        class="action-button"
                    >
                        📋 Project Details
                    </a>


                    <a
                        href="${project.readme}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="action-button"
                    >
                        📖 README
                    </a>

                </div>

            </div>


            <!-- BACK BUTTON -->

            <div class="profile-links">

                <a href="projects.html">
                    ← Back to All Projects
                </a>

                <a href="../index.html">
                    🏠 Dashboard
                </a>

            </div>

        </section>

    `;
}