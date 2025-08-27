import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Cari hari, tanggal, atau aktivitas..." }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-md mx-auto"
    >
      <div className={`relative flex items-center transition-all duration-300 ${
        isFocused ? 'transform scale-105' : ''
      }`}>
        <Search className="absolute left-4 w-5 h-5 text-muted-foreground z-10" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full pl-12 pr-12 py-4 bg-card border border-card-border rounded-[var(--radius-lg)] 
            shadow-[var(--shadow-card)] focus:shadow-[var(--shadow-hover)] focus:border-primary/30 
            focus:outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground
            ${isFocused ? 'ring-2 ring-primary/20' : ''}
          `}
        />
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onChange("")}
            className="absolute right-4 p-1 rounded-full hover:bg-muted transition-colors z-10"
            aria-label="Clear search"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </motion.button>
        )}
      </div>
      
      {/* Search suggestions or helper text */}
      {isFocused && !value && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 p-3 bg-card border border-card-border rounded-lg shadow-[var(--shadow-card)] z-20"
        >
          <p className="text-xs text-muted-foreground">
            💡 Tips: Coba cari "Hari 1", "orientasi", atau tanggal tertentu
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchBar;