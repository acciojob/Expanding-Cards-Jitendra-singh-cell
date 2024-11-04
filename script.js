//your JS code here. If required.
const panels = document.querySelectorAll('.panel');

// Add click event listeners to all panels
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remove active class from all panels
        panels.forEach(p => p.classList.remove('active'));
        // Add active class to the clicked panel
        panel.classList.add('active');
    });
});

// Initially, expand the first panel
panels[0].classList.add('active');
