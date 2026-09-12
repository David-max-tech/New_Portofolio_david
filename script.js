// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        // Ouvre / ferme le menu
        navLinks.classList.toggle("show");

        // Change l'icône du menu
        const icon = menuBtn.querySelector("i");

        if (icon) {
            if (navLinks.classList.contains("show")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
    });


    // Fermer le menu après avoir cliqué sur un lien
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });
}

// ============================
// ACTIVE NAVIGATION LINK
// ============================

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ============================
// SCROLL ANIMATION
// ============================

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .about, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {
    observer.observe(element);
});


// ============================
// UPDATE FOOTER YEAR
// ============================

const yearElement = document.getElementById("year");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.textContent = currentYear;
}


// ============================
// BACK TO TOP BUTTON
// ============================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ============================
// CONTACT BUTTON
// ============================

const contactButtons = document.querySelectorAll(
    'a[href="#contact"]'
);

contactButtons.forEach(button => {

    button.addEventListener("click", () => {

        const contactSection = document.getElementById("contact");

        if (contactSection) {

            contactSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ============================
// CONSOLE MESSAGE
// ============================

console.log("Portfolio de David Mumeme chargé avec succès.");