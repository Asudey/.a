const dateElement = document.getElementById('clickableDate');

// Tıklama olayını dinliyoruz
dateElement.addEventListener('click', function() {
    // Mevcut tarihi alıyoruz
    const currentDate = new Date();

    // Tarihi istenilen formata çeviriyoruz (Aug 23, 2024 gibi)
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(currentDate);

    // Elementin içeriğini güncelliyoruz
    dateElement.textContent = formattedDate;
});

function changeBackgroundColor() {
    const colors = ["#00AAA0", "#975A5E", "#680747", "#C3195D", "#D9DAD7", "#D9B650", "#FF894C", "#83CEE0", "#C7B198", "#3C4245"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.setAttribute("bgcolor", randomColor);
}


document.querySelectorAll('.photo-grid-item img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('modalImage').src = this.src;
        document.getElementById('imageModal').style.display = 'flex';
    });
});

document.getElementById('imageModal').addEventListener('click', function(event) {
    if (event.target !== document.getElementById('modalImage')) {
        this.style.display = 'none';
    }
});