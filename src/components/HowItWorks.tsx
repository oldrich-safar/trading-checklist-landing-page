import { CheckCircle2, Download, ListChecks } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Download className="w-12 h-12 text-accent" />,
      title: "Install Extension",
      description: "Download and install our Chrome extension from the Chrome Web Store in just a few clicks."
    },
    {
      icon: <ListChecks className="w-12 h-12 text-accent" />,
      title: "Set Your Checklist",
      description: "Customize your pre-trade checklist with important criteria that match your trading strategy."
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-accent" />,
      title: "Trade with Protection",
      description: "Before executing any trade, complete your checklist to ensure you're following your trading plan."
    }
  ];

  return (
    <section className="py-24 bg-neutral-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Get started with our trading protection system in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;