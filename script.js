document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const loginButton = document.querySelector(".login-btn");
    const navLinks = document.querySelectorAll(".nav a");
    
    // Анимация при наведении на кнопку входа
    loginButton.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "all 0.3s ease";
    });
    
    loginButton.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
    
    // Анимация для навигационных ссылок
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "all 0.3s ease";
        });
        
        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
    
    // Интерактивное поле поиска
    searchInput.addEventListener("focus", function () {
        this.style.border = "2px solid #B5C18E";
    });

    searchInput.addEventListener("blur", function () {
        this.style.border = "1px solid #ccc";
    });

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            alert("Поиск пока не работает, но скоро будет!");
        }
    });
});