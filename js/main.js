document.addEventListener("DOMContentLoaded", () => {

    // Hide loading screen
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);

        }, 900);
    }

    // Render individual project pages
    const projectKey = document.body.dataset.project;

    if (projectKey) {
        const app = document.getElementById("app");

        if (app && typeof renderProject === "function") {
            app.innerHTML = renderProject(projectKey);
        }
    }

    // Reveal animations
    const revealElements = document.querySelectorAll(
        ".content-card, .project-card, .dashboard-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, { threshold: 0.12 });

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }

});