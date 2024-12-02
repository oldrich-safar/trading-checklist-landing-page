import { ArrowRight, ListChecks } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 container-padding bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <ListChecks className="w-16 h-16 text-accent animate-float" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Active Trading Checklist with Protection
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          A Chrome extension that helps traders maintain discipline by requiring a checklist review before executing trades.
        </p>
        <div className="flex justify-center">
          <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
            Download Extension
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="mt-16 glass-card rounded-xl p-4 max-w-4xl mx-auto animate-float">
        <img 
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
          alt="Trading Checklist Interface"
          className="rounded-lg w-full"
        />
      </div>
    </section>
  );
};

export default Hero;