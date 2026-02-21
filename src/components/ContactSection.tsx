import { MapPin, Clock, Phone, Navigation, Car, Truck, UtensilsCrossed } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Visit Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Find Us Here
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-80 lg:h-auto min-h-[320px]">
            <iframe
              title="Tridha Kitchen Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.6!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    112, Chengicherla Bus Depot Rd, VSSD Nagar,<br />
                    Chengicherla, Hyderabad, Telangana 500098
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Opening Hours</h3>
                  <p className="text-sm text-muted-foreground">Open Daily · Closes at 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <UtensilsCrossed size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Services</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="flex items-center gap-1 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                      <UtensilsCrossed size={12} /> Dine-in
                    </span>
                    <span className="flex items-center gap-1 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                      <Car size={12} /> Drive-through
                    </span>
                    <span className="flex items-center gap-1 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                      <Truck size={12} /> Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919999999999"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href="https://maps.google.com/?q=Tridha+Kitchen+Chengicherla+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-gold text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-colors"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
