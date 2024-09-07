// script.js
document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.getElementById("dark-mode");
    const lightModeButton = document.getElementById("light-mode");
    const body = document.body;

    // Check if a theme is already saved in local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    darkModeButton.addEventListener("click", function() {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    });

    lightModeButton.addEventListener("click", function() {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light-mode");
    });
});
