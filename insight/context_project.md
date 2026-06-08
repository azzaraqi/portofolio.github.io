# Konteks Proyek: Portofolio Personal Dhiwa Thatsbih Azzaraqi

Dokumen ini mendefinisikan latar belakang, arsitektur teknis, dan filosofi personal branding dari situs portofolio personal **Dhiwa Thatsbih Azzaraqi** (Fresh Graduate Software Engineer dari Politeknik Negeri Padang).

---

## 1. Filosofi Personal Branding

Portofolio ini dirancang bukan sebagai CV digital statis yang membosankan, melainkan sebagai sebuah sistem terintegrasi yang menggabungkan:
1. **Personal CMS (Work Showcase)**: Tempat memamerkan bukti karya rekayasa perangkat lunak secara transparan dan detail.
2. **Mini-CRM (Marketing Funnel)**: Saluran konversi yang mengarahkan minat rekruter atau kolaborator langsung menuju form kontak interaktif.

Proyek ini dibangun bersandarkan pada **Tiga Pilar Personal Branding**:
*   **Technical Evidence yang Mendalam**: Menyajikan detail arsitektur, diagram MVC, data training AI/Deep Learning, dan performa riil, bukan sekadar visual luaran.
*   **Persona Otentik & Edukatif**: Mengadopsi persona yang bersahabat seperti rekan belajar/kakak kelas, memadukan bahasa pemrograman yang kaku dengan pendekatan komunikasi yang hangat.
*   **Orientasi Konversi & Analitis**: Menyediakan aksi CTA yang jelas serta form interaktif untuk mempermudah koneksi profesional.

---

## 2. Peta Fitur & Karya Portofolio

Situs ini menampilkan 6 pilar karya spesialisasi dengan pembagian grid yang simetris:

### A. Homecareku.id (Web Development - Laravel)
*   **Deskripsi**: Portal web penyedia layanan medis & homecare profesional terintegrasi. Memiliki alur pendaftaran pasien, pencarian perawat terdekat, dan dashboard monitoring admin.
*   **Aset**: Menggunakan galeri interaktif berisi 13 screenshot aplikasi dari folder lokal OneDrive.
*   **Tautan**: Berhasil terhubung ke domain resmi: `https://homecareku.web.id/`.

### B. Portofolio Desain UI/UX (Product Design - Figma)
*   **Deskripsi**: Prototipe interaktif modern dengan fokus riset kemudahan penggunaan (user efficiency).
*   **Tautan Figma**:
    1.  *GoBelanja E-Commerce (Cart & Payment)*
    2.  *Barbershop Online Booking*
    3.  *Sejarah Pahlawan Minangkabau*
    4.  *Aplikasi Sistem Pengaduan*
    5.  *Supermarket Shopping Cart*

### C. Indonesian Text-to-Speech (AI / Python)
*   **Deskripsi**: Sintesis suara digital berbahasa Indonesia alami. Model pembelajaran mendalam dilatih menggunakan Coqui TTS/XTTS deep learning model hingga jutaan iterasi dengan dynamic range normalization.
*   **Aset**: Terintegrasi dengan galeri berisi 8 screenshot visualisasi pelatihan model dan diagram arsitektur model deep learning.

### D. Apl_GS (Mobile App - Flutter)
*   **Deskripsi**: Aplikasi mobile audit & penilaian outlet fisik untuk Mystery Shoppers. Memudahkan sinkronisasi skor audit, pengiriman bukti foto, kalkulasi kepatuhan, serta caching data offline SQLite.

### E. Camping Ground & Tenant Booking (Full-Stack Engine)
*   **Deskripsi**: Sistem reservasi dan manajemen sewa kavling camping / booth tenant pameran secara real-time. Mempermudah pembayaran deposit, visualisasi denah lokasi, dan konfirmasi otomatis.

### F. Editor & SEO Specialist (News Editorial)
*   **Deskripsi**: Pengelolaan redaksi konten berita online regional Sumatra Barat dan optimasi struktur SEO agar berita lokal tampil optimal di Google News, terverifikasi atas nama editor **Dhiwa**.
*   **Tautan Portal**:
    *   `http://kabasumbar.net/`
    *   `http://minangsatu.com/`

---

## 3. Sistem Interaktivitas (Vanilla JavaScript)

Situs ini mengutamakan performa tanpa pustaka JavaScript pihak ketiga yang berat. Seluruh interaksi ditangani oleh berkas kustom `js/app.js`:
*   **Sticky Header with Glassmorphism**: Secara otomatis berubah menjadi mode blur glassmorphism saat halaman digulirkan melewati batas 60px.
*   **Intersection Observer Entrance Animations**: Memberikan efek fade-in dan slide-up secara halus pada elemen bagian/section portofolio.
*   **Active Link Highlight Tracking**: Menyoroti menu navigasi aktif yang sesuai dengan posisi scroll pengguna di layar secara real-time.
*   **Stats Counter Animation**: Menganimasikan angka statistik secara dinamis menggunakan akselerasi `requestAnimationFrame` dengan metode pelambatan easing cubic-out.
*   **Interactive Contact Form**: Memvalidasi data masukan form secara real-time dan menyusun tautan mailto secara otomatis untuk pengiriman email cepat.
*   **Unified Lightbox Gallery Engine**:
    *   Mendukung kompilasi dinamis untuk galeri foto dengan banyak gambar.
    *   Mendukung navigasi tombol Next & Previous.
    *   Mendukung kontrol keyboard (Panah Kiri, Panah Kanan, dan tombol Escape untuk menutup galeri).
    *   Dilengkapi dengan thumbnail strip di bagian bawah modal untuk navigasi cepat.

---

## 4. Kebersihan Kode & Manajemen Aset

*   **Pembersihan File Sampah**: File screenshot lama `project_homecareku.png` dan `project_tts.png` yang sudah digantikan oleh galeri individual multi-screenshot telah dihapus sepenuhnya dari direktori `assets/screenshots/` untuk meminimalkan beban disk dan menjaga repository tetap bersih.
*   **Struktur CSS**: Kustom CSS dalam `css/style.css` memuat fondasi latar belakang ambient bloom, grid visual dekoratif di section hero, keyframes rotasi profil glow ring, animasi gradasi teks dinamis, dan efek timeline hover card.
*   **Optimasi SEO Google**:
    *   Mengintegrasikan metadata Open Graph (Facebook/LinkedIn preview) dan Twitter Card.
    *   Menanamkan skema data terstruktur JSON-LD bertipe `Person` untuk membantu bot Google memahami data diri, bidang keahlian, almamater, serta afiliasi organisasi Dhiwa.
