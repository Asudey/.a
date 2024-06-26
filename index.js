const dateElement = document.getElementById('clickableDate');

// Tıklama olayı
dateElement.addEventListener('click', function() {
    // Mevcut tarih
    const currentDate = new Date();

    //Aug 23, 2024 gibi
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(currentDate);

    // İçerik
    dateElement.textContent = formattedDate;
});
