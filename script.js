document.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.style.backgroundColor = '#222'; 
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
