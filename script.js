function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

/* анимация появления */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});