// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.section, .card');

function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = revealElements[i].getBoundingClientRect().top;
        let elementVisible = 120; // adjust sensitivity

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
        } else {
            revealElements[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // run on load

// ===== Dark/Light Mode Toggle =====
const toggleButton = document.createElement('button');
toggleButton.innerText = "🌙";
toggleButton.classList.add('dark-toggle');
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerText = "☀️";
    } else {
        toggleButton.innerText = "🌙";
    }
});

// ===== Hover Effect on Cards =====
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "translateY(-8px) scale(1.03)";
        card.style.transition = "0.3s";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});
