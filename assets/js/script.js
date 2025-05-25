const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;
let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    const spans = menuToggle.querySelectorAll('span');
    
    if (isMenuOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                
        mobileNav.classList.add('active');
        body.classList.add('menu-open');
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
                
        
        mobileNav.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

const mobileNavClose = document.querySelector('.mobile-nav-close');
mobileNavClose.addEventListener('click', () => {
    if (isMenuOpen) {
        menuToggle.click();
    }    
});

const mobileNavLinks = document.querySelectorAll('.mobile-nav-content a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) {
            menuToggle.click();
        }
    });
});

mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
        if (isMenuOpen) {
            menuToggle.click();
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth'});
        }
    });
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        menuToggle.click();
    }
});