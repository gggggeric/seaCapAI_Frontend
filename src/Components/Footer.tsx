import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="SeaCap Logo"
                className="w-10 h-10 rounded-lg object-contain shadow-gold"
              />
              <div>
                <div className="font-heading text-xl font-bold">SeaCap AI</div>
                <div className="text-xs text-secondary-foreground/70">Sikap AI</div>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 max-w-md mb-4">
              Empowering Overseas Filipino Workers with AI-powered crypto wealth management. 
              Your trusted partner in building financial freedom.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {currentYear} SeaCap AI. All rights reserved.
            </p>
            <p className="text-sm text-secondary-foreground/70">
              Made with ❤️ for OFWs worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
