// PKL Journal Data - Documentation of daily activities
export const pklData = [
  {
    id: "hari1",
    nama: "Hari 1",
    tanggal: "2025-08-28",
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
    tanggal: "2025-08-29",
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
    tanggal: "2025-08-30",
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
    tanggal: "2025-09-01", 
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
    tanggal: "2025-09-02",
    deskripsi: "Review minggu pertama dan planning untuk minggu berikutnya. Evaluasi progress dan feedback dari mentor.",
    files: [
      { type: "image", src: "/hari5/review.jpg", caption: "Sesi review dengan mentor" },
      { type: "image", src: "/hari5/planning.jpg", caption: "Planning aktivitas minggu depan" },
      { type: "video", src: "/hari5/feedback.mp4", caption: "Feedback dan saran pengembangan" }
    ]
  },
  {
    id: "hari6",
    nama: "Hari 6", 
    tanggal: "2025-09-03",
    deskripsi: "Minggu kedua PKL - Mulai mengerjakan project nyata. Ditugaskan untuk membuat fitur baru dalam sistem.",
    files: [
      { type: "image", src: "/hari6/project.jpg", caption: "Briefing project baru" },
      { type: "image", src: "/hari6/analysis.jpg", caption: "Analisis requirements" },
      { type: "video", src: "/hari6/discussion.mp4", caption: "Diskusi teknis dengan tim" }
    ]
  },
  {
    id: "hari7",
    nama: "Hari 7", 
    tanggal: "2025-09-04",
    deskripsi: "Implementasi database design dan membuat struktur backend. Belajar best practices dalam development.",
    files: [
      { type: "image", src: "/hari7/database.jpg", caption: "Design database schema" },
      { type: "image", src: "/hari7/backend.jpg", caption: "Coding backend API" },
      { type: "video", src: "/hari7/testing.mp4", caption: "Testing API endpoints" }
    ]
  },
  {
    id: "hari8",
    nama: "Hari 8", 
    tanggal: "2025-09-05",
    deskripsi: "Development frontend interface dan integrasi dengan backend. Learning responsive design principles.",
    files: [
      { type: "image", src: "/hari8/frontend.jpg", caption: "Coding frontend components" },
      { type: "image", src: "/hari8/ui.jpg", caption: "Design UI/UX interface" },
      { type: "video", src: "/hari8/integration.mp4", caption: "Frontend-Backend integration" }
    ]
  },
  {
    id: "hari9",
    nama: "Hari 9", 
    tanggal: "2025-09-06",
    deskripsi: "Bug fixing dan optimisasi performa aplikasi. Code review dengan senior developer.",
    files: [
      { type: "image", src: "/hari9/debugging.jpg", caption: "Session debugging" },
      { type: "image", src: "/hari9/optimization.jpg", caption: "Performance optimization" },
      { type: "video", src: "/hari9/codereview.mp4", caption: "Code review dengan mentor" }
    ]
  },
  {
    id: "hari10",
    nama: "Hari 10", 
    tanggal: "2025-09-07",
    deskripsi: "Presentasi hasil project minggu kedua. Evaluasi dan feedback untuk improvement selanjutnya.",
    files: [
      { type: "image", src: "/hari10/presentation.jpg", caption: "Presentasi project" },
      { type: "image", src: "/hari10/demo.jpg", caption: "Demo aplikasi yang dibuat" },
      { type: "video", src: "/hari10/evaluation.mp4", caption: "Evaluasi dan feedback" }
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
