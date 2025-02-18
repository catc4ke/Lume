document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelectorAll(".about-text, .line-1, .line-2, .line-3, .line-4, .about-heading");

    function handleScroll() {
        slider.forEach((line) => {
            const rect = line.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.90 && !line.classList.contains("text-appear")) {
                line.classList.add("text-appear"); // Animate slide
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load in case already in view
});
