document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        button.textContent = content.style.display === 'block' ? 'Mostrar menos' : 'Saber más';
    });
});
