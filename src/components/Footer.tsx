import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-brown text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-1">Tridha Kitchen</h3>
            <p className="text-gold text-sm mb-3">త్రిధా కిచెన్</p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Authentic Hyderabadi flavors served with love in Chengicherla.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Reviews", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-base font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>112, Chengicherla Bus Depot Rd</p>
              <p>VSSD Nagar, Chengicherla</p>
              <p>Hyderabad, Telangana 500098</p>
              <p className="text-gold mt-2">Open Daily · Closes at 11 PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40 flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-primary fill-primary" /> Tridha Kitchen © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
