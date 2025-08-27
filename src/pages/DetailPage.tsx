import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, FileText, Image, Video, MapPin } from "lucide-react";
import Gallery from "../components/Gallery";
import { getPklDataById } from "../data";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const data = getPklDataById(id || "");

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8"
        >
          <div className="p-6 bg-destructive/10 rounded-full inline-block mb-4">
            <FileText className="w-12 h-12 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Data tidak ditemukan
          </h1>
          <p className="text-muted-foreground mb-6">
            Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  const imageCount = data.files.filter(f => f.type === "image").length;
  const videoCount = data.files.filter(f => f.type === "video").length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-12 px-4 bg-gradient-hero"
      >
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </motion.div>

          {/* Title & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 p-3 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">
                {new Date(data.tanggal).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {data.nama}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {data.deskripsi}
            </p>

            {/* Media Stats */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="flex items-center space-x-2 p-3 bg-card rounded-lg border border-card-border shadow-[var(--shadow-card)]">
                <Image className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{imageCount}</span>
                <span className="text-sm text-muted-foreground">Foto</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-card rounded-lg border border-card-border shadow-[var(--shadow-card)]">
                <Video className="w-5 h-5 text-secondary" />
                <span className="font-medium text-foreground">{videoCount}</span>
                <span className="text-sm text-muted-foreground">Video</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Dokumentasi Media
              </h2>
              <p className="text-muted-foreground">
                Foto dan video aktivitas selama {data.nama}
              </p>
            </div>

            {/* Gallery Component */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-card border border-card-border rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)]"
            >
              <Gallery files={data.files} title={data.nama} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-card border border-card-border rounded-[var(--radius-xl)] p-6 md:p-8 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Detail Aktivitas
              </h3>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed text-base">
                {data.deskripsi}
              </p>
            </div>

            {/* Metadata */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Tanggal:</span>
                  <span className="font-medium text-foreground">
                    {new Date(data.tanggal).toLocaleDateString('id-ID')}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Lokasi PKL:</span>
                  <span className="font-medium text-foreground">Kantor Praktik</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;