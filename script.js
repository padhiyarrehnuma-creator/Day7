// ==========================
// Mobile Menu Toggle
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// ==========================
// Close Menu After Click
// ==========================

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
