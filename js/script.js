// ================= SCROLL ANIMATION FIX =================

const sections = document.querySelectorAll(".section");

function showSections() {
sections.forEach(sec => {
const position = sec.getBoundingClientRect().top;

if (position < window.innerHeight - 100) {
sec.classList.add("show");
}
});
}

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);
