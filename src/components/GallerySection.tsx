import fryPiece from "@/assets/fry-piece-biryani.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import thali from "@/assets/south-indian-thali.jpg";
import butterChicken from "@/assets/butter-chicken.jpg";
import tandoori from "@/assets/tandoori-chicken.jpg";
import heroBiryani from "@/assets/hero-biryani.jpg";

const images = [
  { src: fryPiece, alt: "Fry Piece Biryani - Our Signature Dish", label: "Fry Piece Biryani" },
  { src: heroBiryani, alt: "Hyderabadi Dum Biryani", label: "Dum Biryani" },
  { src: butterChicken, alt: "Butter Chicken with Naan", label: "Butter Chicken" },
  { src: thali, alt: "South Indian Thali", label: "South Indian Thali" },
  { src: tandoori, alt: "Tandoori Chicken", label: "Tandoori Chicken" },
  { src: interior, alt: "Restaurant Interior & Ambiance", label: "Our Space" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Gallery</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            A Feast for the Eyes
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Take a peek at our dishes and the warm ambiance that makes Tridha Kitchen special.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-xl ${
                i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 ? "h-64 sm:h-full" : "h-48 sm:h-56"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-deep-brown/0 group-hover:bg-deep-brown/50 transition-colors duration-300 flex items-end">
                <span className="text-primary-foreground font-heading text-sm font-semibold px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
