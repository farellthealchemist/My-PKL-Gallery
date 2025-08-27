import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun, User, Home, FolderOpen } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 navbar-blur"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="text-3xl"
            >
              📂
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gradient">
                Dokumentasi PKL
              </h1>
              <p className="text-sm text-muted-foreground">
                Jurnal Praktik Kerja Lapangan
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === "/"
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-hover"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Beranda</span>
            </Link>
            <Link
              to="/admin"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname.startsWith("/admin")
                  ? "bg-secondary text-secondary-foreground shadow-[var(--shadow-card)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-hover"
              }`}
            >
              <User className="w-4 h-4" />
              <span>Admin</span>
            </Link>
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-3 rounded-lg bg-card border border-card-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] focus-ring transition-all duration-300"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center space-x-4 mt-4">
          <Link
            to="/"
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              location.pathname === "/"
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                : "text-muted-foreground hover:text-foreground hover:bg-hover"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Beranda</span>
          </Link>
          <Link
            to="/admin"
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              location.pathname.startsWith("/admin")
                ? "bg-secondary text-secondary-foreground shadow-[var(--shadow-card)]"
                : "text-muted-foreground hover:text-foreground hover:bg-hover"
            }`}
          >
            <User className="w-4 h-4" />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;