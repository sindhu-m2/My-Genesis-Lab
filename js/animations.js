document.addEventListener("DOMContentLoaded", () => {

    // Interactive 3D dashboard cards
    const cards = document.querySelectorAll(".dashboard-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", event => {
            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (centerY - y) / 18;
            const rotateY = (x - centerX) / 18;

            card.style.transform =
                `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });

    // Background parallax
    document.addEventListener("mousemove", event => {
        const x = (event.clientX / window.innerWidth - 0.5) * 20;
        const y = (event.clientY / window.innerHeight - 0.5) * 20;

        document.querySelectorAll(".orb").forEach((orb, index) => {
            const direction = index === 0 ? 1 : -1;
            orb.style.transform =
                `translate(${x * direction}px, ${y * direction}px)`;
        });
    });

});