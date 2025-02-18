document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in, .fade-in-scroll");

    function handleScroll() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.95) {
                element.classList.add("in-fade"); // Add class when in view
            } else {
                //element.classList.remove("in-fade"); // Remove class when out of view (optional)
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load in case elements are already in view
});
