document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const subjectDisplay = document.querySelector('.subject-display p');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const course = button.getAttribute('data-course');
            subjectDisplay.textContent = course;
        });
    });
});
