let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonials.length;

document.querySelector('.testimonials-container').insertAdjacentHTML('beforeend', `
    <button class="prev-btn">&#10094;</button>
    <button class="next-btn">&#10095;</button>
`);

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

document.querySelector('.next-btn').addEventListener('click', nextTestimonial);
document.querySelector('.prev-btn').addEventListener('click', prevTestimonial);

// Auto-rotate testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// Initialize the first testimonial
showTestimonial(currentTestimonial);