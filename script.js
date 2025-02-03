// Get all the 'Learn More' buttons
const learnMoreButtons = document.querySelectorAll('.learn-more');

// Loop through each button and add a click event listener
learnMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = e.target.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

// Get all the 'close' buttons in the modals
const closeButtons = document.querySelectorAll('.close-btn');

// Loop through each close button and add a click event listener
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close the modal if the user clicks outside of the modal
window.addEventListener('click', (e) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
