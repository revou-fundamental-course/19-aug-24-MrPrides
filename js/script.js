document.addEventListener('DOMContentLoaded', function() {
    let name = localStorage.getItem('userName');
    if (!name) {
        name = prompt("Please enter your name:");
        if (name) {
            localStorage.setItem('userName', name);
        } else {
            name = "Guest";
        }
    }
    document.getElementById('userName').textContent = name;
});




const carouselImages = document.querySelector('.carousel-images');
        const images = document.querySelectorAll('.carousel-images img');
        let index = 0;

        function showNextImage() {
            index = (index + 1) % images.length;
            carouselImages.style.transform = `translateX(${-index * 100}%)`;
        }

        setInterval(showNextImage, 3000); // Ganti gambar setiap 3 detik



document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Tampilkan data di sebelah form
    const output = document.getElementById('output');
    output.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Reset form setelah submit
    document.getElementById('userForm').reset();
});


// JavaScript untuk mengaktifkan menu accordion
document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});


