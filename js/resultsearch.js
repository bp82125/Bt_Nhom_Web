document.addEventListener('DOMContentLoaded', function() {
    var storedResults = sessionStorage.getItem('searchResults');
    var searchResults = JSON.parse(storedResults);

    var searchResultsContainer = document.getElementById('searchResultsContainer');
    var classList = document.getElementById('classList');

    // Hiển thị kết quả tìm kiếm trên trang, bao gồm cả tên class để lấy phần bootstrap
    searchResults.forEach(function(result) {
        var cardDiv = document.createElement('div');
        cardDiv.innerHTML = result.html;

        // Thêm lại tên class từ thông tin đã lưu
        var cardElement = cardDiv.firstChild;
        cardElement.classList.add(...result.classes.split(' '));
        searchResultsContainer.appendChild(cardElement);
    });
});