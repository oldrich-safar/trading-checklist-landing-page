import { Shield, Settings, ListCheck } from "lucide-react";

const features = [
  {
    title: "Automatic Trade Guard",
    description: "When you attempt to open a trade, our guard activates automatically - displaying your customized checklist that must be completed before the trade can be executed.",
    icon: Shield,
  },
  {
    title: "Customizable Checklist",
    description: "Create and customize up to 15 checklist items to match your trading strategy and requirements.",
    icon: ListCheck,
  },
  {
    title: "Easy Configuration",
    description: "Simple settings interface to enable/disable functionality and manage your checklist items.",
    icon: Settings,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Everything You Need for Disciplined Trading
        </h2>
        <p className="text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive features designed to help you maintain trading discipline and follow your strategy consistently.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-800/40 border border-neutral-700/50 p-8 rounded-xl hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl text-white">{feature.title}</h3>
              </div>
              <p className="text-neutral-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;