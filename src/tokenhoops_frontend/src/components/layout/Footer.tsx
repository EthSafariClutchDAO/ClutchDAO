
import { ExternalLink, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-clutch-DEFAULT border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/b294704b-f288-4b55-8e52-f773346c4716.png" 
                alt="Clutch Logo" 
                className="h-8 w-8" 
              />
              <span className="text-lg font-semibold bg-gradient-to-r from-basketball-light via-white to-eco bg-clip-text text-transparent">Clutch</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Turning plastic segregation into basketball opportunities, one token at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-basketball-light">Home</a></li>
              <li><a href="/marketplace" className="text-gray-400 hover:text-basketball-light">Marketplace</a></li>
              <li><a href="/tickets" className="text-gray-400 hover:text-basketball-light">Tickets</a></li>
              <li><a href="/crowdfund" className="text-gray-400 hover:text-basketball-light">Crowdfund</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-basketball-light">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-basketball-light">Token Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-basketball-light">Recycling Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-basketball-light">Community Rules</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@clutch.com" className="text-gray-400 hover:text-basketball-light flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@clutch.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-basketball-light flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Partner With Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Clutch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
