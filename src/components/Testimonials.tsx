const testimonials = [
  {
    quote: "This extension has completely transformed my trading discipline. The checklist ensures I never skip crucial steps.",
    author: "Sarah Chen",
    role: "Day Trader",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote: "The double confirmation feature has saved me from making impulsive trades multiple times. Highly recommended!",
    author: "Mark Thompson",
    role: "Forex Trader",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "Simple yet powerful. Being able to customize the checklist to match my strategy has been invaluable.",
    author: "Elena Rodriguez",
    role: "Swing Trader",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-neutral-900">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See What Our Customers Are Saying
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Join thousands of businesses that trust us with their payments.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 hover:border-accent/50 transition-all"
            >
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full border-2 border-neutral-700"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;