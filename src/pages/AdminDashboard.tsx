import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Upload, 
  LogOut, 
  Calendar, 
  Image, 
  Video, 
  FolderPlus, 
  Github,
  AlertCircle,
  FileText,
  Settings
} from "lucide-react";
import { pklData } from "../data";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [newEntry, setNewEntry] = useState({
    nama: "",
    tanggal: "",
    deskripsi: "",
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("pkl-admin-logged-in");
    if (!isLoggedIn) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("pkl-admin-logged-in");
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a demo - in real app this would update the data
    alert("Demo Mode: Perubahan tidak tersimpan secara permanen. Untuk upload asli, tambahkan file ke folder /public dan update src/data.js");
    setNewEntry({ nama: "", tanggal: "", deskripsi: "" });
  };

  const totalImages = pklData.reduce((acc, item) => acc + item.files.filter(f => f.type === "image").length, 0);
  const totalVideos = pklData.reduce((acc, item) => acc + item.files.filter(f => f.type === "video").length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border-b border-card-border shadow-[var(--shadow-card)]"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Kelola dokumentasi PKL
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn-ghost flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Stats Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Statistik Dokumentasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card-elegant p-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {pklData.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Hari</div>
                </div>
              </div>
            </div>
            <div className="card-elegant p-6">
              <div className="flex items-center space-x-3">
                <Image className="w-8 h-8 text-secondary" />
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {totalImages}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Foto</div>
                </div>
              </div>
            </div>
            <div className="card-elegant p-6">
              <div className="flex items-center space-x-3">
                <Video className="w-8 h-8 text-warning" />
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {totalVideos}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Video</div>
                </div>
              </div>
            </div>
            <div className="card-elegant p-6">
              <div className="flex items-center space-x-3">
                <FileText className="w-8 h-8 text-success" />
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {totalImages + totalVideos}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Media</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Upload Instructions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary mb-2">
                  Cara Upload File ke GitHub Pages
                </h3>
                <div className="text-sm text-primary/80 space-y-2">
                  <p>Untuk menambahkan dokumentasi baru:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Buat folder baru di <code className="bg-primary/10 px-1 py-0.5 rounded">/public/hariX/</code></li>
                    <li>Upload foto (.jpg, .png) dan video (.mp4) ke folder tersebut</li>
                    <li>Edit file <code className="bg-primary/10 px-1 py-0.5 rounded">src/data.js</code> untuk menambahkan entry baru</li>
                    <li>Commit dan push perubahan ke GitHub</li>
                    <li>GitHub Pages akan otomatis update dengan konten baru</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Demo Upload Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="card-elegant p-6">
            <div className="flex items-center space-x-3 mb-6">
              <FolderPlus className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                Tambah Dokumentasi Baru (Demo)
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Hari
                  </label>
                  <input
                    type="text"
                    value={newEntry.nama}
                    onChange={(e) => setNewEntry({ ...newEntry, nama: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="contoh: Hari 6"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    value={newEntry.tanggal}
                    onChange={(e) => setNewEntry({ ...newEntry, tanggal: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:outline-none transition-all text-foreground"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Deskripsi Aktivitas
                </label>
                <textarea
                  value={newEntry.deskripsi}
                  onChange={(e) => setNewEntry({ ...newEntry, deskripsi: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-card-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Jelaskan aktivitas yang dilakukan pada hari tersebut..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload Media (Demo - Tidak Fungsional)
                </label>
                <div className="border-2 border-dashed border-card-border rounded-lg p-8 text-center bg-muted/20">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Drag & drop files atau klik untuk browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Demo Mode: Upload file secara manual ke GitHub
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full md:w-auto flex items-center space-x-2"
              >
                <FolderPlus className="w-5 h-5" />
                <span>Simpan Dokumentasi (Demo)</span>
              </button>
            </form>
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => window.open("https://github.com", "_blank")}
              className="card-elegant p-6 text-left hover:shadow-[var(--shadow-hover)] transition-all"
            >
              <div className="flex items-center space-x-3">
                <Github className="w-8 h-8 text-foreground" />
                <div>
                  <h4 className="font-medium text-foreground">
                    Buka GitHub Repository
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Kelola file dan deploy ke GitHub Pages
                  </p>
                </div>
              </div>
            </button>
            <button
              onClick={() => navigate("/")}
              className="card-elegant p-6 text-left hover:shadow-[var(--shadow-hover)] transition-all"
            >
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">
                    Lihat Dokumentasi
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Preview tampilan user dari beranda
                  </p>
                </div>
              </div>
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AdminDashboard;