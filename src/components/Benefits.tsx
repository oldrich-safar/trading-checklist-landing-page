import { CheckCircle2, TrendingUp, Shield, Brain } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <CheckCircle2 className="w-12 h-12 text-accent mb-4" />,
      title: "Consistent Trading",
      description: "Develop and maintain a disciplined approach to trading by following your pre-defined checklist every time."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent mb-4" />,
      title: "Improved Performance",
      description: "Reduce emotional trading decisions and increase your success rate by following proven strategies."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent mb-4" />,
      title: "Risk Management",
      description: "Protect your capital by ensuring you've checked all risk parameters before entering any trade."
    },
    {
      icon: <Brain className="w-12 h-12 text-accent mb-4" />,
      title: "Better Decision Making",
      description: "Make more informed trading decisions by systematically reviewing all crucial factors."
    }
  ];

  return (
    <section className="py-24 bg-neutral-900">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Benefits for Traders</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Enhance your trading journey with our powerful checklist tool designed to improve your trading discipline and success rate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center hover:border-accent/50 transition-all">
              <div className="flex justify-center items-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-neutral-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;