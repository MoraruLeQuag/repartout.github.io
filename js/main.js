// ===== MENU MOBILE =====
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== SCROLL SMOOTH =====
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

        navLinks.classList.remove("active");
    });
});

// ===== ANIMATION AU SCROLL =====
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});

// ===== VALIDATION FORMULAIRE =====
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Merci pour votre message ! Nous vous répondrons rapidement.");

    form.reset();
});
