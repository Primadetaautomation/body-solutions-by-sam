import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-pilates.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logo in top right corner */}
      <div className="absolute top-8 right-8 z-20 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full">
        <img 
          src={logo} 
          alt="Body Solutions by Sam Logo" 
          className="w-full h-full object-cover scale-110"
          style={{ objectPosition: 'center 45%' }}
        />
      </div>

      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>
      
      <div className="relative z-10 container px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="inline-block">
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-medium animate-pulse">
                <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" className="fill-primary" />
                    <path d="M50 20 L50 80 M30 50 L70 50" className="stroke-background stroke-[4]" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
              </div>
            </div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Body Solutions <span className="text-primary">by Sam</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            Discover the power of movement through STOTT Pilates, MELT Method, Neural Reset Therapy, and Rossiter Stretching
          </p>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            De Zilk & Leiden, Netherlands
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-gradient-primary hover:shadow-medium transition-all duration-300 text-lg px-8 py-6"
            >
              Book a Free Consultation
            </Button>
            
            <div className="flex gap-4">
              <a href="tel:+31627141022" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+31 (0) 6 27 14 1022</span>
              </a>
            </div>
          </div>

          <div className="flex gap-6 justify-center items-center pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Group Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Private Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Duet Training</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
