import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/#how" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="SeaCap Logo"
              className="w-10 h-10 rounded-lg object-contain shadow-gold"
            />
            <div>
              <div
                className={`font-heading text-xl font-bold ${
                  isScrolled || location.pathname !== "/" ? "text-foreground" : "text-white"
                }`}
              >
                SeaCap AI
              </div>
              <div
                className={`text-xs ${
                  isScrolled || location.pathname !== "/" ? "text-muted-foreground" : "text-gray-200"
                }`}
              >
                Sikap AI
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled || location.pathname !== "/"
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled || location.pathname !== "/"
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="hidden md:inline-flex bg-gradient-gold text-white font-semibold shadow-gold hover:opacity-90">
              Connect Wallet
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <nav className="flex flex-col px-4 py-4 space-y-3">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button className="bg-gradient-gold text-white font-semibold shadow-gold hover:opacity-90 mt-2">
                Connect Wallet
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
