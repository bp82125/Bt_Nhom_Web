document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var cards = document.querySelectorAll('[data-searchable]');
    var searchResults = [];

    cards.forEach(function(card) {
        var cardContent = card.innerText.toLowerCase();
        if (cardContent.includes(searchTerm)) {
            var cardClasses = Array.from(card.classList).join(' ');
            searchResults.push({
                html: card.outerHTML,
                classes: cardClasses
            });
        }
    });
    sessionStorage.setItem('searchResults', JSON.stringify(searchResults));
    window.location.href = 'ResultSearch.html';
});