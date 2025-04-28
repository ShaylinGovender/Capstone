document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav ul li a');
    
    menuItems.forEach(item => {
        if (currentLocation.includes(item.href)) {
            item.classList.add('active');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle (if needed in future)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
});
