import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Search } from "lucide-react";
import FolderCard from "../components/FolderCard";
import SearchBar from "../components/SearchBar";
import { pklData, searchPklData } from "../data";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = searchPklData(searchQuery);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-16 px-4 text-center"
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="relative container mx-auto max-w-4xl">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-3 p-3 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">PKL Journal 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Dokumentasi <span className="text-gradient">PKL Saya</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Catatan harian dan dokumentasi visual selama menjalani Praktik Kerja Lapangan. 
              Klik folder untuk melihat aktivitas dan pembelajaran setiap hari.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            <div className="bg-card border border-card-border rounded-lg p-4 shadow-[var(--shadow-card)]">
              <div className="text-2xl font-bold text-primary">
                {pklData.length}
              </div>
              <div className="text-sm text-muted-foreground">Hari PKL</div>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-4 shadow-[var(--shadow-card)]">
              <div className="text-2xl font-bold text-secondary">
                {pklData.reduce((acc, item) => acc + item.files.filter(f => f.type === "image").length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Foto</div>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-4 shadow-[var(--shadow-card)] col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-warning">
                {pklData.reduce((acc, item) => acc + item.files.filter(f => f.type === "video").length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Video</div>
            </div>
          </motion.div>

          {/* Search Bar */}
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Cari hari, tanggal, atau aktivitas..."
          />
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {searchQuery ? `Hasil Pencarian "${searchQuery}"` : "Dokumentasi Harian"}
              </h2>
            </div>
            <p className="text-muted-foreground">
              {searchQuery 
                ? `Ditemukan ${filteredData.length} hasil`
                : "Jelajahi dokumentasi PKL berdasarkan hari dan aktivitas"
              }
            </p>
          </motion.div>

          {/* Folder Grid */}
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item, index) => (
                <FolderCard
                  key={item.id}
                  {...item}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="p-6 bg-muted/50 rounded-full inline-block mb-4">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                Tidak ada hasil ditemukan
              </h3>
              <p className="text-muted-foreground mb-6">
                Coba ubah kata kunci pencarian atau hapus filter yang ada
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Tampilkan Semua</span>
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;