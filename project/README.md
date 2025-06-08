# Permuridhis Website

Situs web resmi Persaudaraan Mahasiswa/i UNRI Buddhis (Permuridhis) - sebuah organisasi mahasiswa yang berdedikasi untuk mengembangkan spiritualitas Buddha di lingkungan kampus Universitas Riau.

## 🌸 Fitur Utama

- **Splash Screen Animasi**: Loading screen dengan animasi lotus yang berputar dan gradient Buddhist
- **Hero Section**: Banner utama dengan efek parallax dan kutipan Buddha
- **Tentang Organisasi**: Informasi lengkap tentang misi dan nilai-nilai Permuridhis
- **Struktur Organisasi**: Grid interaktif pengurus dengan modal detail
- **Galeri Kegiatan**: Masonry gallery dengan filter kategori dan lightbox
- **Kutipan Harian**: Sistem rotasi kutipan Buddha dengan efek typewriter
- **Kegiatan Mendatang**: Timeline events dengan informasi lengkap
- **Mitra & Kerjasama**: Carousel partner dengan animasi hover
- **Formulir Kontak**: Form dengan validasi real-time dan Google Maps
- **Mode Gelap**: Toggle dark/light mode dengan animasi smooth
- **Tombol Donasi Mengambang**: Call-to-action untuk dukungan finansial

## 🎨 Desain & Estetika

### Palet Warna
- **Deep Purple** (#6A0DAD): Warna utama, background, highlight navbar
- **Saffron Yellow** (#FFB300): Tombol, highlight, panel aksen
- **Lotus Pink** (#EAC5C5): Aksen glow, outline hover, motif dekoratif
- **Off-White** (#F7F4EF): Background teks utama atau kartu
- **Charcoal** (#333333): Teks body, ikon

### Tipografi
- **Body Text**: Poppins (sans-serif yang bersih)
- **Headings**: Playfair Display (serif yang elegan)

### Animasi
- **GSAP ScrollTrigger**: Animasi reveal berdasarkan scroll
- **Framer Motion**: Animasi komponen (hover, modal, card flip)
- **GSAP ScrollToPlugin**: Smooth scrolling untuk anchor links
- **Splash Screen**: Rotasi kontinyu lotus/Dharma wheel

## 🛠️ Teknologi

- **React 18** dengan TypeScript
- **Vite** untuk build tool dan dev server
- **Tailwind CSS** untuk styling
- **GSAP** untuk animasi advanced
- **Framer Motion** untuk animasi komponen
- **Swiper.js** untuk carousel
- **Lucide React** untuk ikon

## 📦 Instalasi

1. Clone repository:
```bash
git clone https://github.com/permuridhis/website.git
cd permuridhis-website
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## 🚀 Build & Deploy

1. Build untuk production:
```bash
npm run build
```

2. Preview build:
```bash
npm run preview
```

3. Deploy ke Netlify/Vercel:
   - Upload folder `dist` hasil build
   - Atau gunakan GitHub integration untuk auto-deploy

## 📁 Struktur Proyek

```
src/
├── components/           # Komponen React
│   ├── SplashScreen.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TeamSection.tsx
│   ├── Gallery.tsx
│   ├── DailyQuote.tsx
│   ├── Events.tsx
│   ├── Partnerships.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── FloatingDonateButton.tsx
├── data/                 # Data statis
│   ├── quotes.ts         # Kutipan Buddha
│   ├── team.ts          # Data pengurus
│   ├── events.ts        # Data kegiatan
│   └── partners.ts      # Data mitra
├── App.tsx              # Komponen utama
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Panduan Kustomisasi Lengkap

### 📝 Mengedit Kutipan Harian

**File**: `src/data/quotes.ts`

Untuk menambah kutipan baru:
```typescript
export const buddhistQuotes = [
  {
    text: "Kutipan baru Anda di sini...",
    author: "Nama Penulis"
  },
  // ... kutipan lainnya
];
```

**Tips**:
- Kutipan harian dipilih berdasarkan hari dalam tahun (deterministik)
- Untuk kutipan acak, gunakan tombol "Kutipan Lainnya"
- Maksimal panjang teks: 200 karakter untuk tampilan optimal

### 👥 Mengedit Struktur Organisasi

**File**: `src/data/team.ts`

Untuk menambah/edit anggota tim:
```typescript
export const teamMembers: TeamMember[] = [
  {
    id: "unique-id",           // ID unik (gunakan format: "nama-jabatan")
    name: "Nama Lengkap",      // Nama lengkap anggota
    role: "Jabatan",           // Jabatan dalam organisasi
    image: "URL_foto",         // URL foto profil (gunakan Pexels atau upload)
    bio: "Deskripsi singkat...", // Bio singkat (max 150 kata)
    email: "email@domain.com", // Email kontak (opsional)
    department: "Jurusan"      // Jurusan kuliah
  },
  // ... anggota lainnya
];
```

**Rekomendasi Foto**:
- Ukuran: 300x300px minimum
- Format: JPG/PNG
- Gunakan foto formal/semi-formal
- Background netral lebih baik

### 📅 Mengedit Kegiatan Mendatang

**File**: `src/data/events.ts`

Untuk menambah/edit kegiatan:
```typescript
export const upcomingEvents: Event[] = [
  {
    id: "unique-event-id",
    title: "Nama Kegiatan",
    date: "2025-MM-DD",        // Format: YYYY-MM-DD
    time: "HH:MM - HH:MM",     // Format: 24 jam
    location: "Lokasi Lengkap",
    description: "Deskripsi kegiatan (max 200 karakter)",
    category: 'dharma',        // Pilihan: 'dharma', 'retreat', 'social', 'ceremony'
    image: "URL_gambar"        // Gambar kegiatan (16:9 ratio)
  },
  // ... kegiatan lainnya
];
```

**Kategori Kegiatan**:
- `dharma`: Dharma Talk, diskusi ajaran
- `retreat`: Retreat meditasi, spiritual
- `social`: Bakti sosial, kegiatan kemasyarakatan
- `ceremony`: Upacara keagamaan, perayaan

### 🔗 Menghubungkan "Daftar Kegiatan" ke Google Form

**File**: `src/components/Events.tsx`

Cari bagian tombol "Daftar Kegiatan" (sekitar baris 150):
```typescript
<motion.button
  className="w-full px-4 py-2 bg-gradient-to-r from-deep-purple to-saffron-yellow text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => {
    // Ganti URL ini dengan link Google Form Anda
    window.open('https://forms.google.com/your-form-id', '_blank');
  }}
>
  Daftar Kegiatan
</motion.button>
```

**Cara membuat Google Form**:
1. Buka [Google Forms](https://forms.google.com)
2. Buat form baru dengan field: Nama, Email, No. HP, Kegiatan yang dipilih
3. Copy link form dari tombol "Send"
4. Paste link tersebut menggantikan URL di atas

### 📧 Menghubungkan Form Kontak ke Google Sheets

**File**: `src/components/Contact.tsx`

Ganti fungsi `handleSubmit` (sekitar baris 80):
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Validate all fields
  const newErrors: Record<string, string> = {};
  Object.entries(formData).forEach(([key, value]) => {
    const error = validateField(key, value);
    if (error) newErrors[key] = error;
  });

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      // Kirim ke Google Sheets menggunakan Google Apps Script
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  } else {
    setSubmitStatus('error');
  }

  setIsSubmitting(false);
};
```

**Setup Google Apps Script**:
1. Buka [Google Apps Script](https://script.google.com)
2. Buat project baru dengan kode berikut:
```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.subject,
    data.message
  ]);
  
  return ContentService.createTextOutput('Success');
}
```
3. Deploy sebagai web app dengan akses "Anyone"
4. Copy URL deployment dan ganti `YOUR_GOOGLE_APPS_SCRIPT_URL`

### 🤝 Mengedit Mitra & Partner

**File**: `src/data/partners.ts`

Untuk menambah/edit mitra:
```typescript
export const partners: Partner[] = [
  {
    id: "unique-partner-id",
    name: "Nama Organisasi",
    logo: "URL_logo",           // Logo partner (200x100px)
    website: "https://website.com",
    description: "Deskripsi kerjasama singkat",
    category: 'university'      // 'university', 'temple', 'organization', 'sponsor'
  },
  // ... mitra lainnya
];
```

### 🖼️ Mengedit Galeri Kegiatan

**File**: `src/components/Gallery.tsx`

Cari array `images` (sekitar baris 20) dan edit:
```typescript
const images: GalleryImage[] = [
  {
    id: 'unique-id',
    src: 'URL_gambar',         // URL gambar (800x600px recommended)
    alt: 'Deskripsi gambar',
    category: 'dharma',        // Kategori untuk filter
    description: 'Deskripsi detail kegiatan'
  },
  // ... gambar lainnya
];
```

### 🎨 Mengedit Warna & Tema

**File**: `tailwind.config.js`

Untuk mengubah palet warna:
```javascript
colors: {
  'deep-purple': '#6A0DAD',    // Warna utama
  'saffron-yellow': '#FFB300', // Warna aksen
  'lotus-pink': '#EAC5C5',     // Warna highlight
  'off-white': '#F7F4EF',      // Background terang
  'charcoal': '#333333',       // Teks gelap
}
```

### 📱 Mengedit Informasi Kontak

**File**: `src/components/Contact.tsx`

Cari bagian informasi kontak (sekitar baris 200) dan edit:
```typescript
// Email
<p className="text-charcoal/70 dark:text-off-white/70">info@permuridhis.org</p>

// Telepon
<p className="text-charcoal/70 dark:text-off-white/70">+62 812-3456-7890</p>

// Alamat
<p className="text-charcoal/70 dark:text-off-white/70">
  Kampus Universitas Riau<br />
  Jl. HR. Soebrantas KM 12.5<br />
  Simpang Baru, Pekanbaru 28293<br />
  Riau, Indonesia
</p>
```

### 🗺️ Mengedit Google Maps

**File**: `src/components/Contact.tsx`

Cari iframe Google Maps (sekitar baris 350) dan ganti `src`:
```typescript
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6623089!2d101.3431!3d0.4637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a8b6b6b6b6b6%3A0x1234567890abcdef!2sUniversitas%20Riau!5e0!3m2!1sen!2sid!4v1234567890123"
  // Ganti dengan embed URL lokasi yang benar
/>
```

**Cara mendapat embed URL**:
1. Buka Google Maps
2. Cari lokasi yang diinginkan
3. Klik "Share" > "Embed a map"
4. Copy HTML code dan ambil URL dari atribut `src`

### 🔗 Mengedit Link Media Sosial

**File**: `src/components/Contact.tsx`

Cari array `socialLinks` (sekitar baris 100):
```typescript
const socialLinks = [
  {
    icon: Facebook,
    name: 'Facebook',
    url: 'https://facebook.com/permuridhis', // Ganti dengan URL asli
    color: 'hover:text-blue-600'
  },
  // ... link lainnya
];
```

### 💝 Tombol Donasi Mengambang (Floating Donate Button)

**File**: `src/components/FloatingDonateButton.tsx`

**Fungsi**: Tombol ini adalah call-to-action untuk mendukung Permuridhis secara finansial. Ketika di-hover menampilkan "Dukung Permuridhis" yang berarti mengajak pengunjung untuk memberikan donasi/sumbangan.

**Mengedit link donasi**:
```typescript
onClick={() => {
  // Ganti dengan link donasi/rekening bank/payment gateway
  window.open('https://link-donasi-anda.com', '_blank');
}}
```

**Opsi link donasi**:
- Link ke halaman donasi khusus
- Link ke payment gateway (GoPay, OVO, DANA)
- Link ke informasi rekening bank
- Link ke platform crowdfunding

### 🎪 Easter Eggs & Fitur Tersembunyi

Berikut beberapa easter egg yang bisa Anda tambahkan:

#### 1. Konami Code Easter Egg
**File**: `src/App.tsx`

Tambahkan di dalam useEffect:
```typescript
useEffect(() => {
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];
  let userInput: string[] = [];

  const handleKeyPress = (e: KeyboardEvent) => {
    userInput.push(e.code);
    if (userInput.length > konamiCode.length) {
      userInput.shift();
    }
    
    if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
      // Easter egg: Tampilkan animasi lotus berputar di seluruh layar
      const lotusElements = document.querySelectorAll('.lotus-easter-egg');
      gsap.to(lotusElements, {
        rotation: 360,
        scale: 2,
        duration: 2,
        ease: "power2.out"
      });
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

#### 2. Click Counter pada Logo
**File**: `src/components/Navbar.tsx`

Tambahkan state dan handler:
```typescript
const [logoClicks, setLogoClicks] = useState(0);

const handleLogoClick = () => {
  setLogoClicks(prev => prev + 1);
  
  if (logoClicks === 7) {
    // Easter egg: Tampilkan pesan rahasia
    alert('🪷 Anda telah menemukan kebijaksanaan tersembunyi! 🪷');
    setLogoClicks(0);
  }
};
```

#### 3. Dharma Wheel Interaktif
**File**: `src/components/About.tsx`

Pada SVG Dharma Wheel, tambahkan:
```typescript
<motion.div 
  className="inline-block cursor-pointer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    // Easter egg: Tampilkan tooltip dengan ajaran Buddha
    setShowDharmaTooltip(true);
    setTimeout(() => setShowDharmaTooltip(false), 3000);
  }}
>
```

#### 4. Secret Quote Mode
**File**: `src/components/DailyQuote.tsx`

Tambahkan mode rahasia dengan quotes khusus:
```typescript
const secretQuotes = [
  {
    text: "Rahasia kebahagian adalah menemukan keindahan dalam hal-hal sederhana.",
    author: "Secret Buddha Wisdom"
  }
];

// Aktifkan dengan triple-click pada quote
const handleTripleClick = () => {
  setSecretMode(!secretMode);
};
```

### 🔧 Konfigurasi SEO

**File**: `index.html`

Edit meta tags:
```html
<title>Permuridhis - Persaudaraan Mahasiswa/i UNRI Buddhis</title>
<meta name="description" content="Deskripsi organisasi Anda" />
<meta name="keywords" content="keyword1, keyword2, keyword3" />

<!-- Open Graph -->
<meta property="og:title" content="Judul untuk social media" />
<meta property="og:description" content="Deskripsi untuk social media" />
<meta property="og:image" content="URL_gambar_preview" />
```

### 📊 Analytics & Tracking

Untuk menambahkan Google Analytics, edit `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 🚀 Tips Optimasi Performance

1. **Lazy Loading Images**: Sudah diimplementasi dengan `loading="lazy"`
2. **Image Optimization**: Gunakan format WebP untuk gambar
3. **Bundle Size**: Jalankan `npm run build` dan cek ukuran bundle
4. **Lighthouse Score**: Test dengan Chrome DevTools > Lighthouse

### 🐛 Troubleshooting

**Masalah umum dan solusi**:

1. **Animasi tidak berjalan**: Pastikan GSAP dan Framer Motion terinstall
2. **Images tidak muncul**: Periksa URL gambar dan CORS policy
3. **Form tidak submit**: Periksa konfigurasi Google Apps Script
4. **Dark mode tidak berfungsi**: Periksa localStorage dan class 'dark'

### 📞 Support & Kontribusi

Jika Anda mengalami masalah atau ingin berkontribusi:

1. **Bug Reports**: Buat issue di GitHub repository
2. **Feature Requests**: Diskusikan di GitHub Discussions
3. **Pull Requests**: Fork repository dan submit PR
4. **Documentation**: Bantu improve dokumentasi ini

### 🔄 Update & Maintenance

**Rutinitas maintenance**:
- Update dependencies bulanan: `npm update`
- Backup data files sebelum edit besar
- Test di berbagai browser dan device
- Monitor performance dengan Lighthouse
- Update content secara berkala

---

## ✏️ Kustomisasi Konten

### Menambah Kutipan Baru
Edit file `src/data/quotes.ts`:
```typescript
export const buddhistQuotes = [
  {
    text: "Kutipan baru...",
    author: "Nama Penulis"
  },
  // ... kutipan lainnya
];
```

### Menambah Anggota Tim
Edit file `src/data/team.ts`:
```typescript
export const teamMembers: TeamMember[] = [
  {
    id: "new-id",
    name: "Nama Lengkap",
    role: "Jabatan",
    image: "URL_foto",
    bio: "Deskripsi singkat...",
    email: "email@domain.com",
    department: "Jurusan"
  },
  // ... anggota lainnya
];
```

### Menambah Kegiatan
Edit file `src/data/events.ts`:
```typescript
export const upcomingEvents: Event[] = [
  {
    id: "new-event",
    title: "Nama Kegiatan",
    date: "2025-MM-DD",
    time: "HH:MM - HH:MM",
    location: "Lokasi",
    description: "Deskripsi kegiatan...",
    category: 'dharma' | 'retreat' | 'social' | 'ceremony',
    image: "URL_gambar"
  },
  // ... kegiatan lainnya
];
```

### Menambah Mitra
Edit file `src/data/partners.ts`:
```typescript
export const partners: Partner[] = [
  {
    id: "new-partner",
    name: "Nama Organisasi",
    logo: "URL_logo",
    website: "https://website.com",
    description: "Deskripsi kerjasama...",
    category: 'university' | 'temple' | 'organization' | 'sponsor'
  },
  // ... mitra lainnya
];
```

## 🎯 Optimisasi SEO

- Meta tags lengkap untuk social media sharing
- Semantic HTML dengan heading structure yang proper
- Alt text untuk semua gambar
- Sitemap.xml otomatis
- Loading lazy untuk gambar offscreen
- Optimisasi bundle size dengan tree-shaking

## ♿ Aksesibilitas

- ARIA labels untuk screen readers
- Keyboard navigation support
- Color contrast ratio yang memadai
- Focus indicators yang jelas
- Responsive design untuk semua device

## 📱 Responsive Design

- **Mobile** (<768px): Layout vertikal, hamburger menu
- **Tablet** (768-1024px): Layout hybrid, grid 2 kolom
- **Desktop** (>1024px): Layout penuh, grid 4 kolom

## 🤝 Kontribusi

1. Fork repository
2. Buat branch fitur: `git checkout -b fitur-baru`
3. Commit perubahan: `git commit -m 'Menambah fitur baru'`
4. Push ke branch: `git push origin fitur-baru`
5. Buat Pull Request

## 📄 Lisensi

© 2025 Permuridhis - Persaudaraan Mahasiswa/i UNRI Buddhis. Semua hak dilindungi undang-undang.

## 📞 Kontak

- **Email**: info@permuridhis.org
- **Website**: https://permuridhis.org
- **Alamat**: Kampus Universitas Riau, Jl. HR. Soebrantas KM 12.5, Pekanbaru, Riau 28293

---

*"Semoga semua makhluk berbahagia dan bebas dari penderitaan"* - Metta Bhavana