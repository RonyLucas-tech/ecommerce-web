// dropdown.js

document.addEventListener("DOMContentLoaded", function () {
    // Desktop dropdown functionality
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
                if (isActive) {
                    dropdownMenu.classList.remove("show");
                    setTimeout(() => {
                        dropdownMenu.style.display = "none";
                    }, 300);
                } else {
                    dropdownMenu.style.display = "block";
                    setTimeout(() => {
                        dropdownMenu.classList.add("show");
                    }, 10);
                }
            }
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown-parent")) {
            dropdownParents.forEach(parent => {
                parent.classList.remove("active");
                const menu = parent.querySelector(".dropdown-menu");
                if (menu) {
                    menu.classList.remove("show");
                    setTimeout(() => {
                        menu.style.display = "none";
                    }, 300);
                }
            });
        }
    });

    // Mobile navigation functionality
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const closeBtn = document.getElementById('close-btn');

    // Update ARIA attributes for accessibility
    function updateAriaAttributes(isOpen) {
        if (hamburgerBtn) {
            hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
        }
        if (mobileNav) {
            mobileNav.setAttribute('aria-hidden', (!isOpen).toString());
        }
    }

    // Open mobile navigation
    function openMobileNav() {
        mobileNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
        hamburgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        updateAriaAttributes(true);
    }

    // Close mobile navigation
    function closeMobileNav() {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        updateAriaAttributes(false);
    }

    // Event listeners for mobile navigation
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openMobileNav);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileNav);
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileNav);
    }

    // Close mobile nav when clicking on nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    // Handle window resize - close mobile nav if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileNav();
        }
    });

    // Mobile search functionality
    const mobileSearchBtn = document.querySelector('.search-btn');
    const mobileSearchInput = document.getElementById('search');

    if (mobileSearchBtn && mobileSearchInput) {
        mobileSearchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const searchTerm = mobileSearchInput.value.trim();
            if (searchTerm) {
                // Here you can implement search functionality
                console.log('Searching for:', searchTerm);
                // Example: window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
            }
        });

        // Allow search on Enter key press
        mobileSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                mobileSearchBtn.click();
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading states for better UX
    const actionIcons = document.querySelectorAll('.action-icon, .mobile-action-icon');
    actionIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            // Add loading state
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            // Remove loading state after a short delay
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 500);
        });
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile nav with Escape key
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileNav();
        }
        
        // Close dropdowns with Escape key
        if (e.key === 'Escape') {
            dropdownParents.forEach(parent => {
                parent.classList.remove("active");
                const menu = parent.querySelector(".dropdown-menu");
                if (menu) {
                    menu.classList.remove("show");
                    setTimeout(() => {
                        menu.style.display = "none";
                    }, 300);
                }
            });
        }
    });

    // Focus management for accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    function trapFocus(element) {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Apply focus trap to mobile navigation when it's open
    if (mobileNav) {
        trapFocus(mobileNav);
    }

    // Add ARIA attributes for better accessibility
    if (hamburgerBtn) {
        hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    if (closeBtn) {
        closeBtn.setAttribute('aria-label', 'Close navigation menu');
    }


});






