// ============ DATA BERITA ============
const beritaData = [
    {
        judul: "Pembukaan Tahun Ajaran Baru 2026/2027",
        tanggal: "2026-07-01",
        tanggalTampil: "1 Juli 2026",
        kategori: "akademik",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Siswa Raih Juara 1 Olimpiade Matematika Tingkat Provinsi",
        tanggal: "2026-07-02",
        tanggalTampil: "2 Juli 2026",
        kategori: "prestasi",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Kegiatan Bakti Sosial di Panti Asuhan",
        tanggal: "2026-07-03",
        tanggalTampil: "3 Juli 2026",
        kategori: "kegiatan",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Jadwal Ujian Tengah Semester Ganjil Telah Terbit",
        tanggal: "2026-07-04",
        tanggalTampil: "4 Juli 2026",
        kategori: "pengumuman",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Tim Basket Sekolah Juarai Turnamen Antar Sekolah",
        tanggal: "2026-07-05",
        tanggalTampil: "5 Juli 2026",
        kategori: "prestasi",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Workshop Penulisan Karya Ilmiah untuk Siswa Kelas XI",
        tanggal: "2026-07-06",
        tanggalTampil: "6 Juli 2026",
        kategori: "akademik",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Pendaftaran Ekstrakurikuler Semester Baru Dibuka",
        tanggal: "2026-07-07",
        tanggalTampil: "7 Juli 2026",
        kategori: "pengumuman",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Kunjungan Edukatif ke Museum Nasional",
        tanggal: "2026-07-08",
        tanggalTampil: "8 Juli 2026",
        kategori: "kegiatan",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Pelatihan Guru dalam Penerapan Kurikulum Merdeka",
        tanggal: "2026-07-09",
        tanggalTampil: "9 Juli 2026",
        kategori: "akademik",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Siswa Wakili Sekolah di Lomba Debat Bahasa Inggris Nasional",
        tanggal: "2026-07-10",
        tanggalTampil: "10 Juli 2026",
        kategori: "prestasi",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Perayaan Hari Kemerdekaan RI ke-81 di Sekolah",
        tanggal: "2026-07-12",
        tanggalTampil: "12 Juli 2026",
        kategori: "kegiatan",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Pengumuman Libur Semester Ganjil",
        tanggal: "2026-07-13",
        tanggalTampil: "13 Juli 2026",
        kategori: "pengumuman",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Seminar Motivasi Belajar Bersama Alumni",
        tanggal: "2026-07-14",
        tanggalTampil: "14 Juli 2026",
        kategori: "akademik",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Tim Robotik Sekolah Raih Medali Emas",
        tanggal: "2026-07-15",
        tanggalTampil: "15 Juli 2026",
        kategori: "prestasi",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Kegiatan Class Meeting Akhir Semester",
        tanggal: "2026-07-16",
        tanggalTampil: "16 Juli 2026",
        kategori: "kegiatan",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Perubahan Jadwal Pelajaran Mulai Pekan Depan",
        tanggal: "2026-07-17",
        tanggalTampil: "17 Juli 2026",
        kategori: "pengumuman",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Program Literasi Membaca 15 Menit Setiap Pagi",
        tanggal: "2026-07-18",
        tanggalTampil: "18 Juli 2026",
        kategori: "akademik",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Siswa Terbaik Bulan Ini Diumumkan",
        tanggal: "2026-07-19",
        tanggalTampil: "19 Juli 2026",
        kategori: "prestasi",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Kunjungan Studi Banding dari Sekolah Mitra",
        tanggal: "2026-07-20",
        tanggalTampil: "20 Juli 2026",
        kategori: "kegiatan",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Pengumuman Penerimaan Peserta Didik Baru",
        tanggal: "2026-07-21",
        tanggalTampil: "21 Juli 2026",
        kategori: "pengumuman",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Try Out Ujian Nasional Gelombang Pertama",
        tanggal: "2026-07-22",
        tanggalTampil: "22 Juli 2026",
        kategori: "akademik",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Juara Umum Lomba Cerdas Cermat Tingkat Kota",
        tanggal: "2026-07-23",
        tanggalTampil: "23 Juli 2026",
        kategori: "prestasi",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Kegiatan Pramuka Perkemahan Akhir Tahun",
        tanggal: "2026-07-24",
        tanggalTampil: "24 Juli 2026",
        kategori: "kegiatan",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Informasi Pembayaran SPP Bulan Agustus",
        tanggal: "2026-07-25",
        tanggalTampil: "25 Juli 2026",
        kategori: "pengumuman",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Kelas Tambahan Persiapan Olimpiade Sains",
        tanggal: "2026-07-27",
        tanggalTampil: "27 Juli 2026",
        kategori: "akademik",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Prestasi Gemilang di Kompetisi Sains Nasional",
        tanggal: "2026-07-28",
        tanggalTampil: "28 Juli 2026",
        kategori: "prestasi",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Kegiatan Gotong Royong Membersihkan Lingkungan Sekolah",
        tanggal: "2026-07-29",
        tanggalTampil: "29 Juli 2026",
        kategori: "kegiatan",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Pengumuman Hasil Seleksi Beasiswa Prestasi",
        tanggal: "2026-07-30",
        tanggalTampil: "30 Juli 2026",
        kategori: "pengumuman",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Pelatihan Public Speaking untuk Pengurus OSIS",
        tanggal: "2026-08-01",
        tanggalTampil: "1 Agustus 2026",
        kategori: "akademik",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    },
    {
        judul: "Tim Futsal Sekolah Melaju ke Babak Final",
        tanggal: "2026-08-02",
        tanggalTampil: "2 Agustus 2026",
        kategori: "prestasi",
        gambar: "pic/WhatsApp Image 2026-08-03 at 09.28.17.jpeg",
        ringkasan: "Ringkasan singkat berita di sini, ganti dengan isi berita yang sebenarnya...",
        link: "#"
    }
];

const galeriData = [
    { gambar: "pic/1.jpeg", deskripsi: "Upacara Perdana Tahun Ajaran Baru", kategori: "kegiatan" },
    { gambar: "pic/5.jpeg", deskripsi: "MPLS Hari Kedua", kategori: "kegiatan" },
    { gambar: "pic/2.jpeg", deskripsi: "Lomba Cerdas Cermat", kategori: "akademik" },
    { gambar: "pic/6.jpeg", deskripsi: "Latihan Pramuka", kategori: "ekstrakurikuler" },
    { gambar: "pic/3.jpeg", deskripsi: "Juara Taekwondo Tingkat Provinsi", kategori: "prestasi" },
    { gambar: "pic/7.jpeg", deskripsi: "Juara OSN Tingkat Nasional", kategori: "prestasi" },
    { gambar: "pic/4.jpeg", deskripsi: "Juara Taekwondo Tingkat Provinsi", kategori: "prestasi" },
    { gambar: "pic/6.jpeg", deskripsi: "Latihan Pramuka", kategori: "ekstrakurikuler" },
    { gambar: "pic/1.jpeg", deskripsi: "Upacara Perdana Tahun Ajaran Baru", kategori: "kegiatan" },
    { gambar: "pic/5.jpeg", deskripsi: "MPLS Hari Kedua", kategori: "kegiatan" },
    { gambar: "pic/2.jpeg", deskripsi: "Lomba Cerdas Cermat", kategori: "akademik" },
    { gambar: "pic/6.jpeg", deskripsi: "Latihan Pramuka", kategori: "ekstrakurikuler" },
    { gambar: "pic/3.jpeg", deskripsi: "Juara Taekwondo Tingkat Provinsi", kategori: "prestasi" },
    { gambar: "pic/7.jpeg", deskripsi: "Juara OSN Tingkat Nasional", kategori: "prestasi" },
    { gambar: "pic/4.jpeg", deskripsi: "Juara Taekwondo Tingkat Provinsi", kategori: "prestasi" },
    { gambar: "pic/6.jpeg", deskripsi: "Latihan Pramuka", kategori: "ekstrakurikuler" },
    { gambar: "pic/1.jpeg", deskripsi: "Upacara Perdana Tahun Ajaran Baru", kategori: "kegiatan" },
    { gambar: "pic/5.jpeg", deskripsi: "MPLS Hari Kedua", kategori: "kegiatan" },
    { gambar: "pic/2.jpeg", deskripsi: "Lomba Cerdas Cermat", kategori: "akademik" },
    { gambar: "pic/6.jpeg", deskripsi: "Latihan Pramuka", kategori: "ekstrakurikuler" },
    { gambar: "pic/3.jpeg", deskripsi: "Juara Taekwondo Tingkat Provinsi", kategori: "prestasi" },
    { gambar: "pic/7.jpeg", deskripsi: "Juara OSN Tingkat Nasional", kategori: "prestasi" },
    { gambar: "pic/4.jpeg", deskripsi: "Juara Taekwondo Tingkat Provinsi", kategori: "prestasi" },
    { gambar: "pic/6.jpeg", deskripsi: "Latihan Pramuka", kategori: "ekstrakurikuler" },
];