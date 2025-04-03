
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".dropdown-menu a").forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("booksButton").textContent = this.textContent.trim();
        });
    });
});