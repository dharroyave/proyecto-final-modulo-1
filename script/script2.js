document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const filterableItems = document.querySelectorAll('.filterable-item');

    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        filterableItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();

            if (itemText.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none'; 
            }
        });
    });
});