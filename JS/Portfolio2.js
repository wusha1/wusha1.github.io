// portfolio filters

const filterButtons = document.querySelectorAll(".portfolio-filters button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.textContent.trim();

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        portfolioItems.forEach((item) => {
            const category = item.dataset.category;

            if (
                filter === "All" ||
                (filter === "Game Development" && category === "game") ||
                (filter === "Web Development" && category === "web") ||
                (filter === "Software" && category === "software")
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Project image preview

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const closeLightbox = document.querySelector(".lightbox-close");
const previewButtons = document.querySelectorAll(".preview-btn");

previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const project = button.closest(".portfolio-item");
        const projectImage = project.querySelector("img");
        const projectTitle = project.querySelector("h3");

        lightboxImage.src = projectImage.src;
        lightboxTitle.textContent = projectTitle.textContent;
        lightbox.classList.add("active");
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");

            // Stop watching after it reveals once
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});