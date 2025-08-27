import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Folder, Calendar, FileText, Image, Video } from "lucide-react";

interface FolderCardProps {
  id: string;
  nama: string;
  tanggal: string;
  deskripsi: string;
  files: Array<{ type: string; src: string; caption?: string }>;
  index: number;
}

const FolderCard = ({ id, nama, tanggal, deskripsi, files, index }: FolderCardProps) => {
  const imageCount = files.filter(f => f.type === "image").length;
  const videoCount = files.filter(f => f.type === "video").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/hari/${id}`}>
        <div className="card-elegant p-6 h-full flex flex-col space-y-4 group-hover:border-primary/30">
          {/* Header with Icon */}
          <div className="flex items-center space-x-3">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-primary/10 rounded-xl border border-primary/20"
            >
              <Folder className="w-6 h-6 text-primary" />
            </motion.div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {nama}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{new Date(tanggal).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1">
            <div className="flex items-start space-x-2">
              <FileText className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {deskripsi}
              </p>
            </div>
          </div>

          {/* File Count Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Image className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{imageCount}</span>
                <span className="text-xs text-muted-foreground">foto</span>
              </div>
              <div className="flex items-center space-x-1">
                <Video className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">{videoCount}</span>
                <span className="text-xs text-muted-foreground">video</span>
              </div>
            </div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="text-primary text-sm font-medium"
            >
              Lihat Detail →
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FolderCard;