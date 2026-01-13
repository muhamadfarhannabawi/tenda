/**
 * Script Lengkap Tenda Mulia Premium
 * Menangani: Navigasi Mobile (Sync dengan CSS), Form WhatsApp, dan Interaksi Sewa
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. KONFIGURASI ADMIN ---
    const adminWA = "628811205935"; // Nomor WhatsApp Utama Anda

    // --- 2. LOGIKA NAVIGASI MOBILE (HAMBURGER MENU) ---
    // ID 'mobile-menu' harus sesuai dengan yang ada di HTML <div id="mobile-menu">
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    if (menu && menuLinks) {
        menu.addEventListener('click', () => {
            // PERBAIKAN: Menggunakan 'active' agar sinkron dengan CSS .menu-toggle.active
            menu.classList.toggle('active'); 
            menuLinks.classList.toggle('active');
        });

        // Menutup menu saat link diklik
        document.querySelectorAll('.nav-links li a').forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('active');
                menuLinks.classList.remove('active');
            });
        });
    }

    // --- 3. LOGIKA FORMULIR KONTAK ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value;
            const pesan = document.getElementById('pesan').value;
            let waUser = document.getElementById('wa_number') ? document.getElementById('wa_number').value : 'Tidak dicantumkan';
            
            if (waUser.startsWith('0')) {
                waUser = '62' + waUser.substring(1);
            }
            
            const teksPesan = `Halo Tenda Mulia,%0A%0ASaya *${nama}*%0AWA: ${waUser}%0A%0A*Pesan:*%0A${pesan}`;
            const urlWA = `https://wa.me/${adminWA}?text=${teksPesan}`;
            
            window.open(urlWA, '_blank');
        });
    }

    // --- 4. EFEK NAVBAR SCROLL (Warna Emas pada Bayangan) ---
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = '#ffffff';
            nav.style.padding = '10px 8%'; 
            nav.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.1)'; // Bayangan sedikit emas
        } else {
            nav.style.background = '#ffffff';
            nav.style.padding = '20px 8%';
            nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        }
    });

    // --- 5. LOGIKA TOMBOL BOOKING ---
    window.handleBooking = function(packageName) {
        const teksPesan = `Halo Tenda Mulia, saya ingin berkonsultasi mengenai *${packageName}*. Apakah paket ini tersedia untuk tanggal tertentu?`;
        const urlWA = `https://wa.me/${adminWA}?text=${encodeURIComponent(teksPesan)}`;
        
        window.open(urlWA, '_blank');
    };
});