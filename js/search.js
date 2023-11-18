document.getElementById('searchForm').addEventListener('submit', function(event) {
    // Ngăn chặn hành động mặc định của form (không gửi request)
    event.preventDefault();

    // Lấy giá trị từ ô input
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Lặp qua tất cả các card
    var cards = document.querySelectorAll('[data-searchable]');
    var searchResults = [];

    cards.forEach(function(card) {
        // Lấy nội dung của card
        var cardContent = card.innerText.toLowerCase();

        // Kiểm tra xem nội dung có chứa từ khóa tìm kiếm không
        if (cardContent.includes(searchTerm)) {
            // Nếu có, thêm card và tên class của nó vào kết quả tìm kiếm
            var cardClasses = Array.from(card.classList).join(' ');
            searchResults.push({
                html: card.outerHTML,
                classes: cardClasses
            });
        }
    });

    // Lưu kết quả vào sessionStorage để sử dụng hiển thị trên trang tìm kiếm
    sessionStorage.setItem('searchResults', JSON.stringify(searchResults));
    // Chuyển sang trang tìm kiếm
    window.location.href = 'ResultSearch.html';
});