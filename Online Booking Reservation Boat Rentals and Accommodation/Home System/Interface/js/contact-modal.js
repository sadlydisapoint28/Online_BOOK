/**
 * Contact Form Modal JavaScript
 * Handles the opening, closing, and submission of the contact form modal
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact modal script loaded');
    
    // Get contact links by ID and class
    const contactLink = document.getElementById('contactLink');
    const mobileContactLink = document.getElementById('mobileContactLink');
    const allContactLinks = document.querySelectorAll('.contact-link');
    
    console.log('Contact links found:', {
        contactLink: !!contactLink,
        mobileContactLink: !!mobileContactLink,
        allContactLinks: allContactLinks.length
    });
    
    // Get modal elements
    const modal = document.getElementById('contactModal');
    console.log('Modal found:', !!modal);
    
    if (modal) {
        const closeBtn = modal.querySelector('.close');
        console.log('Close button found:', !!closeBtn);
        
        const contactForm = modal.querySelector('form');
        console.log('Contact form found:', !!contactForm);
        
        // Function to open the modal
        function openModal() {
            console.log('Opening modal');
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden';
            
            // If clicked from mobile menu, close the mobile menu
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                const menuToggle = document.querySelector('.mobile-menu-toggle');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        }
        
        // Add click event to specific contact links
        if (contactLink) {
            contactLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Main contact link clicked');
                openModal();
            });
        }
        
        if (mobileContactLink) {
            mobileContactLink.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Mobile contact link clicked');
                openModal();
            });
        }
        
        // Add click event to all contact links (as a fallback)
        allContactLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Contact link clicked');
                openModal();
            });
        });

        // Close modal when close button is clicked
        closeBtn.addEventListener('click', function() {
            console.log('Close button clicked');
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = '';
        });

        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                console.log('Clicked outside modal');
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            }
        });

        // Handle form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form and close modal
            contactForm.reset();
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = '';
        });
    } else {
        console.error('Contact modal not found');
    }
}); 