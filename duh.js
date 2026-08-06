// ============ TOGGLE MENU MOBILE ============
const navToggle = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
});

// ============ DROPDOWN "PROFIL" — TAP UNTUK BUKA DI MOBILE ============
const dropdownParent = document.querySelector('.has-dropdown');
const dropdownLink = dropdownParent.querySelector('a');

dropdownLink.addEventListener('click', (e) => {
    // cuma jalankan logic ini kalau di mobile (menu masih dalam mode hamburger)
    if (window.innerWidth < 768) {
        e.preventDefault(); // cegah langsung pindah ke profil.html, buka dropdown dulu
        dropdownParent.classList.toggle('is-open');
    }
});

// ============ TUTUP MENU MOBILE SETELAH KLIK LINK ============
const navLinks = navMenu.querySelectorAll('a:not(.has-dropdown > a)');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', false);
    });
});

// ============ HELPER MARKUP (dipakai bareng oleh beranda & halaman berita/galeri,
// biar nggak ada template HTML yang di-copy-paste di banyak tempat) ============
function beritaCardHTML(berita) {
    return `
        <article class="berita-card">
            <img src="${berita.gambar}" alt="${berita.judul}" class="berita-card__img">
            <div class="berita-card__body">
                <time class="berita-card__date" datetime="${berita.tanggal}">${berita.tanggalTampil}</time>
                <h3 class="berita-card__title">${berita.judul}</h3>
                <p class="berita-card__excerpt">${berita.ringkasan}</p>
                <a href="${berita.link}" class="link-more">Baca selengkapnya &rarr;</a>
            </div>
        </article>
    `;
}

function galeriItemHTML(item) {
    return `
        <figure class="galeri-item">
            <img src="${item.gambar}" alt="${item.deskripsi}">
        </figure>
    `;
}

// ============ RENDER BERITA (PREVIEW DI HOMEPAGE) ============
function renderBerita() {
    const container = document.getElementById('berita-container');
    if (!container) return; // kalau container nggak ada di halaman ini, skip

    // Di homepage cukup tampilkan 6 berita TERBARU aja.
    // Urutkan dulu berdasarkan tanggal (terbaru duluan), baru ambil 6 teratas.
    const beritaTerbaru = [...beritaData]
        .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
        .slice(0, 6);

    container.innerHTML = beritaTerbaru.map(beritaCardHTML).join('');
}


// ============ RENDER GALERI ============
function renderGaleri() {
    const container = document.getElementById('galeri-container');
    if (!container) return;

    // Data digandakan 2x biar animasi marquee-nya nyambung mulus (seamless loop)
    const items = [...galeriData, ...galeriData];

    container.innerHTML = items.map(galeriItemHTML).join('');
}


// ============ JALANKAN SAAT HALAMAN SELESAI DIMUAT ============
renderBerita();
renderGaleri();

// ============ LIGHTBOX — kontrol universal (tombol close, klik luar, Escape) ============
function initLightboxControls() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');

    if (!lightbox) return; // cukup cek lightbox-nya doang, nggak perlu galeriContainer

    function closeLightbox() {
        lightbox.classList.remove('is-open');
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

initLightboxControls();

// ============ GALERI BERANDA: BUKA LIGHTBOX (trigger klik) ============
function initGaleriMarqueeLightbox() {
    const galeriContainer = document.getElementById('galeri-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    if (!galeriContainer || !lightbox) return;

    galeriContainer.addEventListener('click', (e) => {
        const img = e.target.closest('.galeri-item img');
        if (!img) return;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('is-open');
    });
}

initGaleriMarqueeLightbox();

// ============ GALERI: PAUSE SAAT CURSOR DI ATAS GAMBAR ============
function initGaleriMarqueeHover() {
    const galeriContainer = document.getElementById('galeri-container');
    if (!galeriContainer) return;

    galeriContainer.addEventListener('mouseover', (e) => {
        if (e.target.closest('.galeri-item')) {
            galeriContainer.classList.add('is-paused');
        }
    });

    galeriContainer.addEventListener('mouseout', (e) => {
        // Kalau cursor pindah ke elemen lain di luar galeri-item, lanjutkan animasi
        const stillInsideItem = e.relatedTarget && e.relatedTarget.closest('.galeri-item');
        if (!stillInsideItem) {
            galeriContainer.classList.remove('is-paused');
        }
    });
}

initGaleriMarqueeHover();

// ============ EKSKUL: PREVIEW GAMBAR IKUT CURSOR ============
function initEkskulPreview() {
    const items = document.querySelectorAll('.ekskul-item a');
    const preview = document.getElementById('ekskulPreview');
    const previewImg = document.getElementById('ekskulPreviewImg');
    const previewLabel = document.getElementById('ekskulPreviewLabel');

    if (!items.length || !preview) return;

    items.forEach((item, index) => {
        // Ambil nama ekskul dari <span>, dan foto preview dari atribut data-preview
        // (kosongkan data-preview di HTML kalau belum ada foto -> otomatis pakai placeholder gradient)
        const label = item.querySelector('span')?.textContent.trim() || '';
        const previewSrc = item.getAttribute('data-preview');

        // Ambil username Instagram langsung dari href, misal:
        // https://www.instagram.com/osissmansabiau?igsh=... -> @osissmansabiau
        const href = item.getAttribute('href') || '';
        const match = href.match(/instagram\.com\/([^/?]+)/i);
        const igHandle = match ? '@' + match[1] : '';

        item.addEventListener('mouseenter', () => {
            preview.setAttribute('data-color', (index % 4) + 1); // gonta-ganti 4 warna placeholder

            previewLabel.innerHTML = `
                <i class="fa-brands fa-instagram"></i>
                <span>${label}</span>
                <span class="ekskul-preview__handle">${igHandle}</span>
            `;

            if (previewSrc) {
                previewImg.src = previewSrc;
                preview.classList.add('has-image');
            } else {
                previewImg.removeAttribute('src');
                preview.classList.remove('has-image');
            }

            preview.classList.add('is-visible');
        });

        item.addEventListener('mousemove', movePreview);

        item.addEventListener('mouseleave', () => {
            preview.classList.remove('is-visible');
        });
    });

    function movePreview(e) {
        const offset = 15; // jarak preview dari ujung cursor

        // Diukur ULANG tiap gerakan mouse (bukan sekali di awal pas initEkskulPreview jalan),
        // biar nggak kejebak angka 0/salah kalau elemen belum sempat ke-render sempurna duluan.
        const previewWidth = preview.offsetWidth;
        const previewHeight = preview.offsetHeight;

        let x = e.clientX + offset;
        let y = e.clientY + offset;

        // Biar preview nggak kepotong kalau cursor deket tepi kanan/bawah layar
        const maxX = window.innerWidth - previewWidth - 12;
        const maxY = window.innerHeight - previewHeight - 12;

        if (x > maxX) x = e.clientX - previewWidth - offset;
        if (y > maxY) y = e.clientY - previewHeight - offset;

        preview.style.transform = `translate(${x}px, ${y}px)`;
    }
}

initEkskulPreview();

// ============ ANIMASI COUNTER STATISTIK ============
function animateCounter(el, target, duration = 1500) {
    let start = 0;
    const stepTime = 16; // ~60fps
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            el.textContent = target.toLocaleString('id-ID') + '+';
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(start).toLocaleString('id-ID');
        }
    }, stepTime);
}

// Jalankan animasi HANYA saat elemen masuk ke viewport (biar nggak jalan pas halaman baru dibuka & user belum scroll ke situ)
function initCounterObserver() {
    const counters = document.querySelectorAll('.stat-item__number[data-count]');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'), 10);
                animateCounter(el, target);
                observer.unobserve(el); // cukup sekali jalan per elemen
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

initCounterObserver();

// ============ TOMBOL SCROLL HORIZONTAL (BERITA) ============
function initScrollButtons() {
    const buttons = document.querySelectorAll('.scroll-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const container = document.getElementById(targetId);
            if (!container) return;

            const scrollAmount = container.clientWidth * 0.8; // geser ~80% lebar container tiap klik
            const direction = btn.classList.contains('scroll-btn--left') ? -1 : 1;

            container.scrollBy({
                left: scrollAmount * direction,
                behavior: 'smooth'
            });
        });
    });
}

initScrollButtons();

document.getElementById('tahun').textContent = new Date().getFullYear();

// ============ HALAMAN BERITA: SEARCH + FILTER KATEGORI + PAGINATION ============
function initBeritaPage() {
    const grid = document.getElementById('beritaPageGrid');
    if (!grid) return; // kalau bukan di berita.html, skip semua logic di bawah ini

    const searchInput = document.getElementById('beritaSearch');
    const filterButtons = document.querySelectorAll('#beritaFilter .filter-btn');
    const emptyMsg = document.getElementById('beritaEmpty');
    const paginationWrap = document.getElementById('pagination');
    const paginationPages = document.getElementById('paginationPages');
    const prevBtn = document.getElementById('paginationPrev');
    const nextBtn = document.getElementById('paginationNext');

    const ITEMS_PER_PAGE = 6; // ganti sesuai kebutuhan (misal 9 kalau grid 3 kolom)

    let currentPage = 1;
    let currentCategory = 'all';
    let currentSearch = '';

    function getFilteredData() {
        return beritaData.filter(berita => {
            const matchCategory = currentCategory === 'all' || berita.kategori === currentCategory;
            const keyword = currentSearch.trim().toLowerCase();
            const matchSearch = !keyword ||
                berita.judul.toLowerCase().includes(keyword) ||
                berita.ringkasan.toLowerCase().includes(keyword);
            return matchCategory && matchSearch;
        });
    }

    function renderCards(items) {
        grid.innerHTML = items.map(beritaCardHTML).join('');
    }

    function renderPagination(totalPages) {
        paginationPages.innerHTML = '';

        function getPageNumbers() {
            if (totalPages <= 7) {
                return Array.from({ length: totalPages }, (_, i) => i + 1);
            }
            const pages = new Set([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
            return [...pages].filter(p => p >= 1 && p <= totalPages).sort((a, b) => a - b);
        }

        const pages = getPageNumbers();
        let prevPageNum = 0;

        pages.forEach(page => {
            if (page - prevPageNum > 1) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'page-ellipsis';
                ellipsis.innerHTML = '&hellip;';
                paginationPages.appendChild(ellipsis);
            }

            const pageBtn = document.createElement('button');
            pageBtn.className = 'page-number' + (page === currentPage ? ' is-active' : '');
            pageBtn.textContent = page;
            pageBtn.addEventListener('click', () => {
                currentPage = page;
                render();
                scrollToTopOfPage();
            });
            paginationPages.appendChild(pageBtn);

            prevPageNum = page;
        });

        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        paginationWrap.hidden = totalPages <= 1;
    }

    function scrollToTopOfPage() {
        document.getElementById('berita-page')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function render() {
        const filtered = getFilteredData();
        const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

        if (currentPage > totalPages) currentPage = totalPages;

        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);

        if (pageItems.length === 0) {
            grid.innerHTML = '';
            emptyMsg.hidden = false;
        } else {
            emptyMsg.hidden = true;
            renderCards(pageItems);
        }

        renderPagination(totalPages);
    }

    searchInput?.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        currentPage = 1;
        render();
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            currentCategory = btn.getAttribute('data-category');
            currentPage = 1;
            render();
        });
    });

    prevBtn?.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            render();
            scrollToTopOfPage();
        }
    });

    nextBtn?.addEventListener('click', () => {
        const totalPages = Math.max(1, Math.ceil(getFilteredData().length / ITEMS_PER_PAGE));
        if (currentPage < totalPages) {
            currentPage++;
            render();
            scrollToTopOfPage();
        }
    });

    render();
}

// ============ HALAMAN GALERI: FILTER KATEGORI + LIGHTBOX ============
function initGaleriPage() {
    const grid = document.getElementById('galeriPageGrid');
    if (!grid) return; // skip kalau bukan di galeri.html

    const filterButtons = document.querySelectorAll('#galeriFilter .filter-btn');
    const emptyMsg = document.getElementById('galeriEmpty');

    let currentCategory = 'all';

    function render() {
        const filtered = currentCategory === 'all'
            ? galeriData
            : galeriData.filter(item => item.kategori === currentCategory);

        if (filtered.length === 0) {
            grid.innerHTML = '';
            emptyMsg.hidden = false;
            return;
        }

        emptyMsg.hidden = true;
        grid.innerHTML = filtered.map(galeriItemHTML).join('');
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            currentCategory = btn.getAttribute('data-category');
            render();
        });
    });

    // Lightbox khusus buat grid ini (event delegation, sama pola kayak index.html)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    grid.addEventListener('click', (e) => {
        const img = e.target.closest('.galeri-item img');
        if (!img || !lightbox) return;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('is-open');
    });

    render();
}

initGaleriPage();

initBeritaPage();

// ============ HALAMAN KONTAK: VALIDASI + PESAN SUKSES FORM ============
// Catatan: situs ini belum ada backend, jadi form belum benar-benar
// mengirim email ke mana pun. Ini cuma nampilin pesan sukses di layar.
// Kalau nanti mau beneran ngirim, ganti bagian fetch(...) di bawah
// dengan endpoint backend/email service kamu (mis. Formspree, EmailJS, dll).
// ============ HALAMAN KONTAK: KIRIM VIA WHATSAPP ============
// ============ HALAMAN KONTAK: KIRIM VIA WHATSAPP ============
function initKontakForm() {
    const form = document.getElementById('kontakForm');
    if (!form) return;

    const msg = document.getElementById('kontakFormMsg');

    // Ganti dengan nomor WA sekolah, format: kode negara + nomor tanpa 0 di depan, tanpa spasi/strip/plus
    // Contoh: 0812-3456-7890 -> jadi 6281234567890
    const NOMOR_WA_SEKOLAH = '6282194691750';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = form.nama.value.trim();
        const subjek = form.subjek.value.trim();
        const pesan = form.pesan.value.trim();

        if (!nama || !subjek || !pesan) {
            showMsg('Semua kolom wajib diisi ya.', 'error');
            return;
        }

        // Susun teks pesan buat WhatsApp
        const teksWA =
            `Halo, saya ingin menghubungi SMAN 1 Biau.\n\n` +
            `Nama: ${nama}\n` +
            `Subjek: ${subjek}\n` +
            `Pesan: ${pesan}`;

        const waLink = `https://wa.me/${NOMOR_WA_SEKOLAH}?text=${encodeURIComponent(teksWA)}`;

        window.open(waLink, '_blank');

        form.reset();
    });

    function showMsg(text, type) {
        msg.textContent = text;
        msg.className = 'kontak-form__msg is-' + type;
        msg.hidden = false;
    }
}

initKontakForm();