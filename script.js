// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slider = document.querySelector('.gallery-slider');
    let index = 0;
    
    setInterval(() => {
        index = (index + 1) % slider.children.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
});
