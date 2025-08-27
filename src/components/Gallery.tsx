import { motion } from "framer-motion";
import { useState } from "react";
import { Image as ImageIcon, Video, Play, X, Download } from "lucide-react";

interface MediaFile {
  type: string;
  src: string;
  caption?: string;
}

interface GalleryProps {
  files: MediaFile[];
  title: string;
}

const Gallery = ({ files, title }: GalleryProps) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaFile | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const openLightbox = (media: MediaFile, index: number) => {
    setSelectedMedia(media);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setLightboxIndex(-1);
  };

  const nextMedia = () => {
    const nextIndex = (lightboxIndex + 1) % files.length;
    setSelectedMedia(files[nextIndex]);
    setLightboxIndex(nextIndex);
  };

  const prevMedia = () => {
    const prevIndex = lightboxIndex === 0 ? files.length - 1 : lightboxIndex - 1;
    setSelectedMedia(files[prevIndex]);
    setLightboxIndex(prevIndex);
  };

  if (!files || files.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center p-12 text-center"
      >
        <div className="p-6 bg-muted/50 rounded-full mb-4">
          <ImageIcon className="w-12 h-12 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">
          Belum ada media
        </h3>
        <p className="text-muted-foreground">
          Belum ada foto atau video untuk {title}
        </p>
      </motion.div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        {/* Gallery Grid */}
        <div className="gallery-grid">
          {files.map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="gallery-item group cursor-pointer"
              onClick={() => openLightbox(file, index)}
            >
              <div className="relative aspect-square overflow-hidden">
                {file.type === "image" ? (
                  <>
                    <img
                      src={file.src}
                      alt={file.caption || `Media ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </>
                ) : (
                  <>
                    <video
                      src={file.src}
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <div className="p-3 bg-black/50 rounded-full">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 p-1 bg-black/70 rounded">
                      <Video className="w-4 h-4 text-white" />
                    </div>
                  </>
                )}
              </div>
              {file.caption && (
                <div className="p-3">
                  <p className="text-sm text-foreground font-medium line-clamp-2">
                    {file.caption}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media Content */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.caption || "Media"}
                  className="w-full max-h-[70vh] object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full max-h-[70vh]"
                />
              )}
              
              {selectedMedia.caption && (
                <div className="p-4 bg-white border-t">
                  <p className="text-foreground font-medium">
                    {selectedMedia.caption}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-muted-foreground">
                      {lightboxIndex + 1} dari {files.length}
                    </span>
                    <button 
                      onClick={() => window.open(selectedMedia.src, '_blank')}
                      className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Navigation */}
            {files.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  →
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;