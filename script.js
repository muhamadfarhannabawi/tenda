/**
 * Script Lengkap Tenda Mulia Premium
 * Menangani: Navigasi Mobile, Form WhatsApp, dan Interaksi Sewa
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. KONFIGURASI ADMIN ---
    const adminWA = "628811205935"; // Nomor WhatsApp Utama Anda

    // --- 2. LOGIKA NAVIGASI MOBILE (HAMBURGER MENU) ---
    const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');      // Animasi garis tiga jadi X
    menuLinks.classList.toggle('active'); // Memunculkan menu samping
});

    if (menu && menuLinks) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('is-active'); 
            menuLinks.classList.toggle('active');
        });

        // Menutup menu saat link diklik (Scroll ke section atau ganti halaman)
        document.querySelectorAll('.nav-links li a').forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('is-active');
                menuLinks.classList.remove('active');
            });
        });
    }

    // --- 3. LOGIKA FORMULIR KONTAK (Halaman Kontak) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value;
            const pesan = document.getElementById('pesan').value;
            let waUser = document.getElementById('wa_number') ? document.getElementById('wa_number').value : 'Tidak dicantumkan';
            
            // Auto-format nomor user: Jika mulai dari 08... ubah jadi 628...
            if (waUser.startsWith('0')) {
                waUser = '62' + waUser.substring(1);
            }
            
            const teksPesan = `Halo Tenda Mulia,%0A%0ASaya *${nama}*%0AWA: ${waUser}%0A%0A*Pesan:*%0A${pesan}`;
            const urlWA = `https://wa.me/${adminWA}?text=${teksPesan}`;
            
            window.open(urlWA, '_blank');
        });
    }

    // --- 4. EFEK NAVBAR SCROLL ---
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = '#ffffff';
            nav.style.padding = '10px 8%'; // Navbar mengecil sedikit saat di-scroll
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
        } else {
            nav.style.background = '#ffffff';
            nav.style.padding = '20px 8%';
            nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        }
    });

    // --- 5. LOGIKA TOMBOL BOOKING (Halaman Sewa) ---
    // Diletakkan di luar DOMContentLoaded agar bisa diakses oleh atribut onclick di HTML
    window.handleBooking = function(packageName) {
        const teksPesan = `Halo Tenda Mulia, saya ingin berkonsultasi mengenai *${packageName}*. Apakah paket ini tersedia untuk tanggal tertentu?`;
        const urlWA = `https://wa.me/${adminWA}?text=${encodeURIComponent(teksPesan)}`;
        
        window.open(urlWA, '_blank');
    };
});