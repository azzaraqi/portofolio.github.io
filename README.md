# Portofolio Dhiwa Thatsbih Azzaraqi 🚀

Selamat datang di repositori portofolio personal branding **Dhiwa Thatsbih Azzaraqi**. Portofolio ini dirancang secara premium menggunakan **Tailwind CSS** dan **Vanilla JavaScript** dengan fokus utama pada kecepatan akses (performance), desain modern (Glassmorphism), dan optimasi mesin pencari kelas atas (SEO Engine Optimization).

---

## 👨‍💻 Tentang Developer
*   **Nama**: Dhiwa Thatsbih Azzaraqi
*   **Peran**: Fresh Graduate Software Engineer
*   **Pendidikan**: D4 - Rekayasa Perangkat Lunak, Politeknik Negeri Padang
*   **Fokus Keahlian**: Full-stack Web Development (Laravel), Mobile Development (Flutter), AI Integration (Indonesian Text-to-Speech), dan Local News SEO Engine Optimization.

---

## 🛠️ Tech Stack & Fitur Unggulan
1.  **Struktur (HTML5)**: Kode semantik terstruktur (`<header>`, `<main>`, `<section>`, `<footer>`) dengan aksesibilitas ARIA yang lengkap.
2.  **Gaya & Tata Letak (Tailwind CSS)**: Tampilan visual modern dengan nuansa violet-indigo, tata letak grid responsif, serta efek glassmorphism terapung yang memukau.
3.  **Logika & Interaktivitas (Vanilla JavaScript)**: Navigasi scroll mulus, detektor posisi menu otomatis (active-link tracking), serta efek animasi transisi scroll tanpa dependensi pihak ketiga.
4.  **Optimasi SEO Engine Profesional**: 
    *   Satu heading `<h1>` utama yang optimal.
    *   Skema data terstruktur **JSON-LD (Structured Data)** untuk pengindeksan Google yang sempurna.
    *   Pengaturan meta tag lengkap (termasuk Open Graph & Twitter Cards).

---

## 📂 Struktur Repositori
```
portofolioDhiwa/
├── assets/
│   ├── logos/              # Logo media berita lokal & organisasi mitra
│   ├── screenshots/        # Tangkapan layar proyek beresolusi tinggi
│   └── icons/              # Ikon SVG sosial media & instrumen teknologi
├── css/
│   └── style.css           # Tambahan CSS custom (ekstensi Tailwind)
├── insight/
│   ├── architecture.rules  # Aturan arsitektur, panduan coding, & standar SEO
│   ├── aboutme.md          # Sumber data tulisan, kredensial, & deskripsi proyek
│   └── context_project.md  # Konteks proyek, pilar branding, & interaktivitas
├── js/
│   └── app.js              # Interaksi fungsional utama (Vanilla JS)
├── index.html              # Halaman beranda SEO-optimized utama
├── README.md               # Dokumentasi petunjuk proyek ini
├── requirements.txt        # Dependensi server pengembang lokal (Python)
```

---

## 💻 Cara Menjalankan Proyek Secara Lokal

### Prasyarat
Pastikan Anda telah menginstal **Python** pada sistem operasi Anda.

### Langkah-langkah
1.  **Instalasi Server Lokal**:
    Buka terminal/command prompt pada direktori proyek ini dan jalankan perintah berikut untuk menginstal modul server lokal otomatis:
    ```bash
    pip install -r requirements.txt
    ```

2.  **Menjalankan Server dengan Auto-Reload**:
    Untuk memantau perubahan kode secara real-time pada browser saat Anda melakukan pengeditan, buat file script server sederhana atau jalankan server live-reload menggunakan Python di terminal:
    ```bash
    python -c "from livereload import Server; server = Server(); server.watch('index.html'); server.watch('css/*'); server.watch('js/*'); server.serve(port=8000, host='127.0.0.1')"
    ```
    Setelah server berjalan, buka browser dan akses alamat `http://127.0.0.1:8000`.

3.  **Alternatif Server Bawaan Python**:
    Jika Anda hanya ingin menyajikan file statis secara instan tanpa live hot-reloading:
    ```bash
    python -m http.server 8000
    ```
    Buka `http://localhost:8000` pada web browser Anda.
