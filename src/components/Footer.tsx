import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-neutral-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#installation" className="text-neutral-300 hover:text-white transition-colors">Installation</a></li>
              <li><a href="#usage" className="text-neutral-300 hover:text-white transition-colors">Usage Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">License</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-800 flex justify-between items-center">
          <p className="text-neutral-400">
            © 2024 Trading Checklist Guard. All rights reserved.
          </p>
          <a href="#" className="text-neutral-300 hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;