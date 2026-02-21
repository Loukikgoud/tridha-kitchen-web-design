import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919999999999?text=Hi%20Tridha%20Kitchen!%20I%20would%20like%20to%20place%20an%20order."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-xl hover:bg-green-700 transition-colors hover:scale-110 transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="tel:+919999999999"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:bg-primary/90 transition-colors hover:scale-110 transform duration-200"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
