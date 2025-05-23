// Test script for contact form modal
document.addEventListener('DOMContentLoaded', function() {
    console.log('Test script loaded');
    
    // Get all contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    console.log('Found contact links:', contactLinks.length);
    
    // Get modal elements
    const modal = document.getElementById('contactModal');
    console.log('Modal found:', !!modal);
    
    if (modal) {
        const closeBtn = modal.querySelector('.close');
        console.log('Close button found:', !!closeBtn);
        
        const contactForm = modal.querySelector('form');
        console.log('Contact form found:', !!contactForm);
        
        // Test opening the modal
        if (contactLinks.length > 0) {
            console.log('Testing contact link click...');
            contactLinks[0].click();
            
            // Check if modal is visible after 100ms
            setTimeout(() => {
                console.log('Modal display style:', modal.style.display);
                console.log('Modal has show class:', modal.classList.contains('show'));
                
                // Test closing the modal
                if (closeBtn) {
                    console.log('Testing close button click...');
                    closeBtn.click();
                    
                    // Check if modal is hidden after 300ms
                    setTimeout(() => {
                        console.log('Modal display style after close:', modal.style.display);
                        console.log('Modal has show class after close:', modal.classList.contains('show'));
                    }, 300);
                }
            }, 100);
        }
    }
});
