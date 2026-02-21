import { Utensils, Heart, IndianRupee } from "lucide-react";
import interiorImg from "@/assets/restaurant-interior.jpg";

const features = [
  {
    icon: Utensils,
    title: "Authentic Flavors",
    desc: "Traditional Hyderabadi recipes passed down through generations, crafted with the finest spices.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Dining",
    desc: "Enjoy full meals starting at just ₹1–200 per person. Great taste doesn't have to break the bank.",
  },
  {
    icon: Heart,
    title: "Family First",
    desc: "A warm, welcoming atmosphere where families, friends, and neighbors come together over food.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={interiorImg}
              alt="Tridha Kitchen restaurant interior"
              className="w-full h-80 lg:h-[28rem] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-deep-brown/80 backdrop-blur text-primary-foreground px-5 py-3 rounded-xl">
              <p className="font-heading text-lg font-semibold">Since Day One</p>
              <p className="text-xs text-primary-foreground/70">Serving Chengicherla with pride</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Our Story</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              A Kitchen Built on Love & Flavor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tridha Kitchen was born out of a simple belief — that every family deserves a meal that tastes like home, at a price that feels right. Located in the heart of Chengicherla, Hyderabad, we serve authentic South Indian and Hyderabadi cuisine that brings people together.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether it's our signature Fry Piece Biryani, a comforting South Indian thali, or a sizzling tandoori platter — every dish is cooked fresh with hand-ground spices and served with warmth.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                    <f.icon size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
