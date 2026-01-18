document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector(".navbar ul"); // single <ul>

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active"); // hamburger animation
        nav.classList.toggle("active");    // show/hide menu
    });
});
