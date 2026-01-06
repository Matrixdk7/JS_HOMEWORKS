'use strict';

const cards = document.getElementById('cards');

cards.addEventListener('click', (event) => {
    const button = event.target.closest('[data-read-more-btn]');
    if (!button) return;

    const card = button.closest('.card');
    if (!card) return;

    card.classList.toggle('expanded');

    const isExpanded = card.classList.contains('expanded');

    button.textContent = isExpanded ? 'Hide' : 'Read more';
});
