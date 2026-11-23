document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");

    if (header) {
        header.innerHTML = `
            <nav class="navbar">
                <a href="../index.html" class="brand">
                    MY <span>GENESIS LAB</span>
                </a>

                <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">
                    ☰
                </button>

                <div class="nav-links" id="nav-links">
                    <a href="../index.html">HOME</a>
                    <a href="../pages/projects.html">PROJECTS</a>
                    <a href="../pages/skills.html">SKILLS</a>
                    <a href="../pages/education.html">EDUCATION</a>
                    <a href="../pages/about.html">ABOUT</a>
                </div>
            </nav>
        `;

        const toggle = document.getElementById("menu-toggle");
        const links = document.getElementById("nav-links");

        toggle.addEventListener("click", () => {
            links.classList.toggle("open");
        });

        const currentPage = document.body.dataset.page;

        document.querySelectorAll(".nav-links a").forEach(link => {
            if (link.getAttribute("href").includes(currentPage)) {
                link.classList.add("active");
            }
        });
    }

    if (footer) {
        footer.innerHTML = `
            <p>© ${new Date().getFullYear()} MY GENESIS LAB</p>
            <p>Where Ideas Evolve Into Innovation.</p>
        `;
    }
});