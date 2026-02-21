import { Star, MapPin, Clock, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-biryani.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="Delicious Hyderabadi Biryani"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <p
          className="text-gold font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Family Restaurant · Chengicherla, Hyderabad
        </p>
        <h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-2 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Tridha Kitchen
        </h1>
        <p
          className="font-heading text-2xl sm:text-3xl text-gold/90 italic mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          త్రిధా కిచెన్
        </p>
        <p
          className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Authentic Hyderabadi flavors served with love. Where every meal is a family celebration.
        </p>

        {/* Badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.75s" }}
        >
          <span className="flex items-center gap-1.5 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            <Star size={16} className="text-gold fill-gold" /> 4.3 · 84 Reviews
          </span>
          <span className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur text-primary-foreground px-4 py-2 rounded-full text-sm">
            <Clock size={14} /> Open till 11 PM
          </span>
          <span className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur text-primary-foreground px-4 py-2 rounded-full text-sm">
            <MapPin size={14} /> Chengicherla
          </span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="#menu"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-base transition-colors shadow-lg"
          >
            View Menu
          </a>
          <a
            href="https://maps.google.com/?q=Tridha+Kitchen+Chengicherla+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur text-primary-foreground border border-primary-foreground/20 px-8 py-3 rounded-lg font-semibold text-base transition-colors"
          >
            Get Directions
          </a>
          <a
            href="tel:+919999999999"
            className="bg-gold hover:bg-gold/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold text-base transition-colors shadow-lg"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
