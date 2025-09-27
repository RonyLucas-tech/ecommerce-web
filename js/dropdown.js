// dropdown.js

document.addEventListener("DOMContentLoaded", function () {
    const dropdownParents = document.querySelectorAll(".dropdown-parent");

    dropdownParents.forEach(parent => {
        const link = parent.querySelector("a");
        const dropdownMenu = parent.querySelector(".dropdown-menu");

        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Close all other dropdowns
            dropdownParents.forEach(item => {
                if (item !== parent) {
                    item.classList.remove("active");
                    const menu = item.querySelector(".dropdown-menu");
                    if (menu) menu.style.display = "none";
                }
            });

            // Toggle current dropdown
            const isActive = parent.classList.contains("active");
            if (dropdownMenu) {
                parent.classList.toggle("active");
                dropdownMenu.style.display = isActive ? "none" : "block";
            }
        });
    });

    // Optional: Close dropdown if clicked outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown-parent")) {
            dropdownParents.forEach(parent => {
                parent.classList.remove("active");
                const menu = parent.querySelector(".dropdown-menu");
                if (menu) menu.style.display = "none";
            });
        }
    });
});
