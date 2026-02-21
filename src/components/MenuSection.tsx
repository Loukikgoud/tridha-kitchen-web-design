import { useState } from "react";
import { Star, Flame } from "lucide-react";

type Category = "all" | "biryani" | "starters" | "curries" | "breads" | "thali" | "beverages";

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  veg: boolean;
  popular?: boolean;
  category: Category;
}

const menuItems: MenuItem[] = [
  { name: "Fry Piece Biryani", price: "₹180", desc: "Our signature! Crispy fried chicken pieces atop fragrant basmati rice", veg: false, popular: true, category: "biryani" },
  { name: "Chicken Dum Biryani", price: "₹160", desc: "Slow-cooked Hyderabadi-style dum biryani with tender chicken", veg: false, popular: true, category: "biryani" },
  { name: "Mutton Biryani", price: "₹200", desc: "Rich and aromatic biryani with succulent mutton pieces", veg: false, category: "biryani" },
  { name: "Veg Biryani", price: "₹120", desc: "Fragrant rice with seasonal vegetables and aromatic spices", veg: true, category: "biryani" },
  { name: "Egg Biryani", price: "₹130", desc: "Flavorful biryani with boiled eggs and masala", veg: false, category: "biryani" },
  { name: "Chicken 65", price: "₹150", desc: "Spicy, deep-fried chicken bites tossed with curry leaves", veg: false, popular: true, category: "starters" },
  { name: "Paneer 65", price: "₹140", desc: "Crispy paneer cubes in a spicy, tangy coating", veg: true, category: "starters" },
  { name: "Tandoori Chicken", price: "₹180", desc: "Charcoal-grilled chicken marinated in yogurt and spices", veg: false, category: "starters" },
  { name: "Gobi Manchurian", price: "₹100", desc: "Indo-Chinese style cauliflower in tangy sauce", veg: true, category: "starters" },
  { name: "Butter Chicken", price: "₹160", desc: "Creamy tomato-based gravy with tender chicken pieces", veg: false, popular: true, category: "curries" },
  { name: "Mutton Curry", price: "₹180", desc: "Traditional slow-cooked mutton in rich masala gravy", veg: false, category: "curries" },
  { name: "Paneer Butter Masala", price: "₹140", desc: "Soft paneer in creamy, mildly spiced tomato gravy", veg: true, category: "curries" },
  { name: "Dal Tadka", price: "₹80", desc: "Yellow lentils tempered with ghee, cumin, and garlic", veg: true, category: "curries" },
  { name: "Butter Naan", price: "₹30", desc: "Soft, fluffy naan brushed with butter", veg: true, category: "breads" },
  { name: "Garlic Naan", price: "₹40", desc: "Naan topped with fresh garlic and coriander", veg: true, category: "breads" },
  { name: "Tandoori Roti", price: "₹20", desc: "Whole wheat roti baked in tandoor", veg: true, category: "breads" },
  { name: "South Indian Thali", price: "₹100", desc: "Complete meal with rice, sambar, rasam, curd, pickle & papad", veg: true, popular: true, category: "thali" },
  { name: "Non-Veg Thali", price: "₹150", desc: "Full meal with rice, chicken curry, dal, and accompaniments", veg: false, category: "thali" },
  { name: "Masala Chai", price: "₹20", desc: "Traditional Indian tea brewed with spices", veg: true, category: "beverages" },
  { name: "Lassi", price: "₹40", desc: "Refreshing sweet or salted yogurt drink", veg: true, category: "beverages" },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "biryani", label: "Biryani" },
  { key: "starters", label: "Starters" },
  { key: "curries", label: "Curries" },
  { key: "breads", label: "Breads" },
  { key: "thali", label: "Thali" },
  { key: "beverages", label: "Beverages" },
];

const MenuSection = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Our Menu</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Taste the Tradition
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From our legendary Fry Piece Biryani to comforting South Indian thalis — every dish is a celebration of flavor.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === c.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="relative bg-card rounded-xl p-5 border border-border hover:shadow-lg transition-shadow group"
            >
              {item.popular && (
                <span className="absolute top-3 right-3 flex items-center gap-1 bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  <Flame size={12} /> Popular
                </span>
              )}
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1 w-4 h-4 rounded-sm border-2 flex-shrink-0 ${
                    item.veg ? "border-green-600" : "border-red-600"
                  }`}
                >
                  <span
                    className={`block w-2 h-2 rounded-full m-auto mt-[3px] ${
                      item.veg ? "bg-green-600" : "bg-red-600"
                    }`}
                  />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold text-foreground">{item.name}</h3>
                    <span className="text-primary font-bold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          <Star size={14} className="inline text-gold fill-gold mr-1" />
          Prices range from ₹1–200 per person · Dine-in, Drive-through & Delivery available
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
