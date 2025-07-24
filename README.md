# Al-Qur'an Digital App

Aplikasi Al-Qur'an digital modern berbasis React, yang menyediakan fitur membaca surah, mendengarkan audio murattal, dan kumpulan doa harian dengan tampilan minimalis dan responsive.

---

## Deskripsi Proyek

Aplikasi ini memudahkan pengguna untuk:
- Membaca ayat Al-Qur'an beserta terjemahannya
- Mendengarkan audio murattal surah pilihan
- Mengakses kumpulan doa harian
- Menyimpan audio favorit untuk diputar ulang

---

##  API yang Digunakan

- **[AlQuran Cloud API](https://alquran.cloud/api)**  
  Menampilkan daftar surah dan ayat beserta terjemahan dalam berbagai bahasa.

- **[Islamic Network Audio API](https://cdn.islamic.network/quran/audio/64/ar.alafasy/)**  
  Menyediakan audio murattal surah per nomor surah dengan qari Mishary Rashid Alafasy.

---

## Fitur-fitur Utama

- Membaca surah Al-Qur'an per ayat beserta terjemahan  
- Mendengarkan audio murattal setiap surah  
- Menyimpan audio favorit  
- Melihat kumpulan doa harian  
- Register dan login user untuk personalisasi  
- Responsive design dan UI premium dengan animasi halus (Framer Motion)

---

## Struktur Halaman & Routing

| Route        | Halaman                        |
|--------------|--------------------------------|
| `/login`     | Halaman login user            |
| `/register`  | Halaman registrasi user       |
| `/beranda`   | Halaman daftar surah (membaca)|
| `/audio`     | Halaman audio murattal        |
| `/doa`       | Halaman doa harian            |
| `/profile`   | Halaman profil user           |

---

## Cara Menjalankan Secara Lokal

1. Clone repository:
    ```bash
    git clone https://github.com/username/project-quran.git
    cd project-quran
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Jalankan aplikasi:
    ```bash
    npm start
    ```

4. Buka di browser:
    ```
    http://localhost:3000
    ```

---

## Link Live Demo

> **[Demo Aplikasi](https://alquran.vercel.app)**

---

## Lisensi

MIT License © 2025

---

> Dibuat dengan ❤️ untuk latihan dan ibadah bersama oleh [Firmas Habibi].
