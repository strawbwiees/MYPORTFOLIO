const fadeElements = document.querySelectorAll(
    ".recent-project-card, .page-banner, .about-content, .interest-card, .language-card, .tool-card, .contact-card, .education-card, .about-section, .hero, .call-to-action"
);

// Add the fade class immediately
fadeElements.forEach(element => {
    element.classList.add("fade");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(element => observer.observe(element));

/* ==========================================================
   PROJECT MODALS
========================================================== */

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}


/* ==========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================== */

window.addEventListener("click", function(event) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

});


/* ==========================================================
   CLOSE MODAL WITH ESC KEY
========================================================== */

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.querySelectorAll(".modal").forEach(modal => {
            modal.classList.remove("active");
        });
        document.body.style.overflow = "auto";
    }
});


/* ==========================================================
   HERO IMAGE FLOAT
========================================================== */

const heroImage = document.querySelector(".hero-image img");
if (heroImage) {
    heroImage.style.animation = "float 4s ease-in-out infinite";
}
const sectiondivider = document.querySelector(".section-divider img");
if (heroImage) {
    heroImage.style.animation = "float 8s ease-in-out infinite";
}


/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {

    const page = link.getAttribute("href");
    if (page === currentPage) {
        link.classList.add("active");
    }

});


/* ==========================================================
   BACK TO TOP BUTTON
========================================================== */

const backToTop = document.createElement("button");
backToTop.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    }

    else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================================
   IMAGE LIGHTBOX
========================================================== */

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "lightbox";

        overlay.innerHTML = `

            <span class="close-lightbox">

                &times;

            </span>

            <img src="${image.src}">

        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});


/* ==========================================================
   HERO TYPING EFFECT
========================================================== */

const heroTitle =
document.querySelector(".hero-title");

if (heroTitle) {

    const text = heroTitle.textContent;

    heroTitle.textContent = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            heroTitle.textContent += text.charAt(index);

            index++;

            setTimeout(type, 80);

        }

    }

    window.onload = type;

}


/* ==========================================================
   BUTTON RIPPLE EFFECT
========================================================== */

const buttons =
document.querySelectorAll(".primary-button, .secondary-button");

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const circle =
        document.createElement("span");

        circle.classList.add("ripple");

        const rect =
        button.getBoundingClientRect();

        circle.style.left =
        e.clientX - rect.left + "px";

        circle.style.top =
        e.clientY - rect.top + "px";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});


/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.log(
    "Portfolio developed by Noella Mariz Beltran ❤️"
);

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {

    document.querySelector(".nav-links").classList.toggle("active");

    hamburger.classList.toggle("active");

});