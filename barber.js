const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");
const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.88;

    reveals.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        if (top < trigger) {
            element.classList.add("active");
        }
    });
}

function handleScrollUI() {
    if (!backToTop) return;

    if (window.scrollY > 350) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}

window.addEventListener("scroll", () => {
    revealOnScroll();
    handleScrollUI();
});

window.addEventListener("load", () => {
    revealOnScroll();
    handleScrollUI();
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* Parallax leve no hero */
if (hero && heroContent && window.innerWidth > 760) {
    hero.addEventListener("mousemove", (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

        heroContent.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
    });

    hero.addEventListener("mouseleave", () => {
        heroContent.style.transform = "translate(0, 0)";
    });
}

/* Efeito magnético leve nos botões */
const magneticButtons = document.querySelectorAll(".magnetic");

if (window.innerWidth > 760) {
    magneticButtons.forEach((button) => {
        button.addEventListener("mousemove", (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translate(0, 0)";
        });
    });
}

/* Tilt leve nos cards de serviço */
const tiltCards = document.querySelectorAll(".tilt-card");

if (window.innerWidth > 760) {
    tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 5;
            const rotateY = ((x - centerX) / centerX) * -5;

            card.style.transform =
                `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
        });
    });
}

/* Galeria reagindo ao mouse */
const galleryItems = document.querySelectorAll(".mouse-gallery");

if (window.innerWidth > 760) {
    galleryItems.forEach((item) => {
        const img = item.querySelector("img");

        item.addEventListener("mousemove", (e) => {
            const rect = item.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;

            item.style.transform = `rotateX(${-y / 3}deg) rotateY(${x / 3}deg)`;
            if (img) {
                img.style.transform = `scale(1.08) translate(${x}px, ${y}px)`;
            }
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "rotateX(0) rotateY(0)";
            if (img) {
                img.style.transform = "scale(1)";
            }
        });
    });
}