 document.addEventListener("DOMContentLoaded", function() {
            // Get all the dropdown parents
            const dropdownParents = document.querySelectorAll('.dropdown-parent');

            const navLinks = document.querySelectorAll('.nav-links > li > a');

            // Function to remove the active class from all links
            function removeActiveClasses() {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                });
            }

            
            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    // Prevent default only for dropdown parents to handle toggle
                    if (this.parentElement.classList.contains('dropdown-parent')) {
                        event.preventDefault();
                    }
                    
                    
                    removeActiveClasses();
                    
                   
                    this.classList.add('active-link');
                });
            });

           
            dropdownParents.forEach(parent => {
                const dropdownLink = parent.querySelector('a');
                const dropdownMenu = parent.querySelector('.dropdown-menu');

                dropdownLink.addEventListener('click', function(event) {
                   
                    dropdownParents.forEach(otherParent => {
                        if (otherParent !== parent) {
                            otherParent.querySelector('.dropdown-menu').classList.remove('dropdown-show');
                        }
                    });
                    
                   
                    dropdownMenu.classList.toggle('dropdown-show');
                });
            });

            
            document.addEventListener('click', function(event) {
                if (!event.target.matches('.dropdown-parent a')) {
                    dropdownParents.forEach(parent => {
                        const dropdownMenu = parent.querySelector('.dropdown-menu');
                        dropdownMenu.classList.remove('dropdown-show');
                    });
                }
            });

          
            window.addEventListener('resize', function() {
             
                if (window.innerWidth > 768) {
                    dropdownParents.forEach(parent => {
                        const dropdownMenu = parent.querySelector('.dropdown-menu');
                        dropdownMenu.classList.remove('dropdown-show');
                    });
                }
            });
        });
   