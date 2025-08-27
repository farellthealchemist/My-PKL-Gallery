# 🚀 Deployment Guide untuk GitHub Pages

## Setup Awal

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd my-pkl-journal
   npm install
   ```

2. **Update package.json**
   Tambahkan konfigurasi berikut di `package.json`:
   ```json
   {
     "homepage": "https://username.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

## Deploy ke GitHub Pages

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Deploy ke GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Aktifkan GitHub Pages**
   - Buka repository di GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

## Menambah Dokumentasi Baru

### 1. Tambah Media Files
Buat folder baru di `public/` dengan format `hariX/`:
```
public/
├── hari1/
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── video1.mp4
├── hari2/
│   ├── training.jpg
│   └── demo.mp4
└── ...
```

### 2. Update Data
Edit `src/data.js` dan tambahkan entry baru:
```javascript
export const pklData = [
  // ... existing data
  {
    id: "hari6",
    nama: "Hari 6",
    tanggal: "2025-01-22",
    deskripsi: "Deskripsi aktivitas hari ke-6...",
    files: [
      { type: "image", src: "/hari6/foto1.jpg", caption: "Caption foto" },
      { type: "video", src: "/hari6/video1.mp4", caption: "Caption video" }
    ]
  }
];
```

### 3. Commit & Push
```bash
git add .
git commit -m "Add documentation for Day 6"
git push origin main
npm run deploy
```

## Struktur File Media

- **Images**: `.jpg`, `.png`, `.jpeg`
- **Videos**: `.mp4`, `.webm`, `.mov`
- **Naming**: Gunakan nama deskriptif tanpa spasi (gunakan underscore atau dash)

## Tips Optimasi

1. **Kompres Media**: Gunakan tools untuk mengompres gambar/video sebelum upload
2. **Alt Text**: Selalu sertakan caption yang deskriptif
3. **Lazy Loading**: Gambar akan dimuat secara lazy loading otomatis
4. **Responsive**: Semua media otomatis responsive di berbagai device

## Custom Domain (Opsional)

1. Tambahkan file `public/CNAME` dengan domain Anda:
   ```
   yourdomain.com
   ```

2. Update `package.json` homepage:
   ```json
   "homepage": "https://yourdomain.com"
   ```

3. Konfigurasi DNS domain mengarah ke GitHub Pages

## Environment Variables

Untuk konfigurasi khusus, buat file `.env.local`:
```
# GitHub Pages base path
VITE_BASE_URL=/repository-name
```

## Troubleshooting

**404 Error di GitHub Pages:**
- Pastikan `homepage` di package.json sesuai dengan URL GitHub Pages
- Cek apakah gh-pages branch terbuat dengan benar
- Tunggu beberapa menit setelah deploy pertama

**Media tidak muncul:**
- Pastikan path media menggunakan forward slash (/)
- Cek case-sensitive pada nama file
- Verifikasi file benar-benar ter-upload di folder public/

**Build Error:**
- Pastikan semua dependencies ter-install
- Check console error untuk debugging
- Coba hapus node_modules dan npm install ulang

## Commands Lengkap

```bash
# Development
npm run dev

# Build untuk production
npm run build

# Deploy ke GitHub Pages  
npm run deploy

# Preview build local
npm run preview
```
