import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" className="fill-background" />
                  <path d="M50 20 L50 80 M30 50 L70 50" className="stroke-primary stroke-[4]" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Body Solutions</h3>
                <p className="text-sm opacity-80">by Sam</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Professional STOTT Pilates instruction and wellness services in De Zilk and Leiden, Netherlands.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:Pilatesbysam@hotmail.com" 
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Pilatesbysam@hotmail.com</span>
              </a>
              <a 
                href="tel:+31627141022" 
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+31 (0) 6 27 14 1022</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>De Zilk, Zuid-Holland, Netherlands</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>• STOTT Pilates</li>
              <li>• MELT Method</li>
              <li>• Neural Reset Therapy</li>
              <li>• Rossiter Stretching</li>
              <li>• Group Classes</li>
              <li>• Private Sessions</li>
              <li>• Duet Training</li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Body Solutions by Sam. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/pilatesbysam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
