import { Star, Quote } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Ravi Kumar",
    rating: 5,
    text: "Best biryani in Chengicherla! The Fry Piece Biryani is absolutely phenomenal. The crispy chicken with the flavored rice is addictive. Highly recommended for families.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Reddy",
    rating: 4,
    text: "Very affordable and tasty food. We come here every weekend with family. The South Indian thali is value for money and the service is always friendly.",
    date: "1 month ago",
  },
  {
    name: "Mohammed Irfan",
    rating: 5,
    text: "Authentic Hyderabadi taste! The mutton biryani reminds me of homemade food. Clean restaurant and the staff is very welcoming. A must-visit spot.",
    date: "3 weeks ago",
  },
  {
    name: "Lakshmi Devi",
    rating: 4,
    text: "We celebrated my daughter's birthday here. The food was delicious and very reasonably priced. The butter chicken and naan combo is a family favorite!",
    date: "2 months ago",
  },
  {
    name: "Suresh Babu",
    rating: 5,
    text: "As a student, I love the affordability. The meals thali at ₹100 is unbeatable. Quality food at student-friendly prices. Tridha Kitchen is my go-to place.",
    date: "1 week ago",
  },
  {
    name: "Anitha Sharma",
    rating: 4,
    text: "Nice family atmosphere. Kids enjoyed the paneer dishes. The restaurant is well-maintained and open late which is convenient. Will definitely come again!",
    date: "1 month ago",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < 4 ? "text-gold fill-gold" : "text-gold/50 fill-gold/50"}
              />
            ))}
            <span className="font-heading text-xl font-bold text-foreground ml-2">4.3</span>
            <span className="text-muted-foreground text-sm">/ 5 · 84 reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow relative"
            >
              <Quote size={28} className="text-primary/10 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < r.rating ? "text-gold fill-gold" : "text-muted"}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">{r.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
