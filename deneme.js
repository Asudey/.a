var dateElement = document.getElementById('clickableDate');

// Tıktık
dateElement.addEventListener('click', function() {
    // tarih
    const currentDate = new Date();

    //Aug 23, 2024
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(currentDate);

    // İçerik
    dateElement.textContent = formattedDate;
});
