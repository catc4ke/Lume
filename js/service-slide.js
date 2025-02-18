document.addEventListener("DOMContentLoaded", function () {
    const lineBreaks = document.querySelectorAll(".line-break");

    function handleScroll() {
        lineBreaks.forEach((line, index) => {
            const rect = line.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.95 && !line.classList.contains("slide")) {
                line.classList.add("slide"); // Animate line-break

                // Find corresponding service elements (assumes they appear in order in the HTML)
                const serviceBody = document.querySelectorAll(".service-body")[index];
                const serviceHeading = document.querySelectorAll(".service-heading")[index];

                // Wait for line-break animation to finish before triggering service elements
                setTimeout(() => {
                    if (serviceBody) serviceBody.classList.add("slide");
                    if (serviceHeading) serviceHeading.classList.add("slide");
                }, 600); // Adjust delay based on transition time
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load in case already in view
});
