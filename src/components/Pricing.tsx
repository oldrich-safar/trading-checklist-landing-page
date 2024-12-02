import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Pricing = () => {
  return (
    <section className="py-24 bg-neutral-900" id="pricing">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Get lifetime access to Trading Checklist Guard with a one-time payment
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="bg-neutral-800/40 border border-neutral-700/50 hover:border-accent/50 transition-all">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Lifetime Access</CardTitle>
              <CardDescription className="text-neutral-300">One-time payment, forever yours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white">$14.99</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Customizable checklist (up to 15 items)",
                  "Double confirmation option",
                  "Enable/disable functionality",
                  "Animated UI",
                  "Cross-device sync",
                  "Lifetime updates"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-neutral-300">
                    <Check className="h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-white transition-colors" size="lg">
                Get Started Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
