// PKL Journal Data - Documentation of daily activities
export const pklData = [
  {
    id: "hari1",
    nama: "Hari 1",
    tanggal: "2025-01-15",
    deskripsi: "Hari pertama PKL - Orientasi dan pengenalan lingkungan kerja. Perkenalan dengan mentor dan tim, tour fasilitas kantor.",
    files: [
      { type: "image", src: "/hari1/orientasi.jpg", caption: "Sesi orientasi dengan mentor" },
      { type: "image", src: "/hari1/kantor.jpg", caption: "Suasana kantor tempat PKL" },
      { type: "video", src: "/hari1/perkenalan.mp4", caption: "Video perkenalan tim" }
    ]
  },
  {
    id: "hari2", 
    nama: "Hari 2",
    tanggal: "2025-01-16",
    deskripsi: "Mulai mempelajari sistem dan workflow perusahaan. Training dasar penggunaan tools dan software yang digunakan.",
    files: [
      { type: "image", src: "/hari2/training.jpg", caption: "Sesi training software" },
      { type: "image", src: "/hari2/workspace.jpg", caption: "Setup workspace pribadi" },
      { type: "video", src: "/hari2/demo.mp4", caption: "Demo penggunaan sistem" }
    ]
  },
  {
    id: "hari3",
    nama: "Hari 3", 
    tanggal: "2025-01-17",
    deskripsi: "Observasi proses bisnis dan mengikuti meeting harian. Mulai diberi tugas kecil untuk memahami alur kerja.",
    files: [
      { type: "image", src: "/hari3/meeting.jpg", caption: "Mengikuti daily standup meeting" },
      { type: "image", src: "/hari3/tugas1.jpg", caption: "Mengerjakan tugas pertama" },
      { type: "video", src: "/hari3/presentasi.mp4", caption: "Presentasi hasil observasi" }
    ]
  },
  {
    id: "hari4",
    nama: "Hari 4",
    tanggal: "2025-01-18", 
    deskripsi: "Praktek langsung menggunakan tools development. Belajar Git workflow dan kolaborasi tim.",
    files: [
      { type: "image", src: "/hari4/coding.jpg", caption: "Sesi coding bersama mentor" },
      { type: "image", src: "/hari4/git.jpg", caption: "Belajar Git dan version control" },
      { type: "video", src: "/hari4/workflow.mp4", caption: "Penjelasan development workflow" }
    ]
  },
  {
    id: "hari5",
    nama: "Hari 5", 
    tanggal: "2025-01-19",
    deskripsi: "Review minggu pertama dan planning untuk minggu berikutnya. Evaluasi progress dan feedback dari mentor.",
    files: [
      { type: "image", src: "/hari5/review.jpg", caption: "Sesi review dengan mentor" },
      { type: "image", src: "/hari5/planning.jpg", caption: "Planning aktivitas minggu depan" },
      { type: "video", src: "/hari5/feedback.mp4", caption: "Feedback dan saran pengembangan" }
    ]
  }
];

// Search function untuk filter data
export const searchPklData = (query) => {
  if (!query) return pklData;
  
  const searchTerm = query.toLowerCase();
  return pklData.filter(item => 
    item.nama.toLowerCase().includes(searchTerm) ||
    item.tanggal.includes(searchTerm) ||
    item.deskripsi.toLowerCase().includes(searchTerm)
  );
};

// Get single item by ID
export const getPklDataById = (id) => {
  return pklData.find(item => item.id === id);
};