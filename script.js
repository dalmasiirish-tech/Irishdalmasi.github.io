// MOBILE NAVIGATION MENU
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
const links = document.querySelectorAll("#nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.textContent = "☰";
    });
});