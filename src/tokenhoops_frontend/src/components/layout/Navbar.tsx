import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Wallet, Recycle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-clutch-DEFAULT/90 backdrop-blur-md shadow-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/b294704b-f288-4b55-8e52-f773346c4716.png" 
                alt="Clutch Logo" 
                className="h-9 w-9" 
              />
              <span className="text-xl font-semibold bg-gradient-to-r from-basketball-light via-white to-eco bg-clip-text text-transparent">Clutch</span>
            </NavLink>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/marketplace" 
              className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
            >
              Marketplace
            </NavLink>
            <NavLink 
              to="/tickets" 
              className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
            >
              Tickets
            </NavLink>
            <NavLink 
              to="/crowdfund" 
              className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
            >
              Crowdfund
            </NavLink>
            <NavLink 
              to="/collection" 
              className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
            >
              <Recycle className="h-4 w-4 inline mr-1" />
              Collection
            </NavLink>
            <NavLink 
              to="/wallet" 
              className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-basketball to-basketball-dark text-white hover:shadow-lg hover:shadow-basketball/20 transition-all duration-200"
            >
              <Wallet className="h-4 w-4" />
              <span>My Tokens</span>
            </NavLink>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-basketball hover:bg-clutch-light focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-clutch-surface pt-16 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className="block px-3 py-4 text-base font-medium text-center hover:bg-clutch-light/20 rounded-md text-gray-300"
              onClick={() => setIsOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/marketplace" 
              className="block px-3 py-4 text-base font-medium text-center hover:bg-clutch-light/20 rounded-md text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Marketplace
            </NavLink>
            <NavLink 
              to="/tickets" 
              className="block px-3 py-4 text-base font-medium text-center hover:bg-clutch-light/20 rounded-md text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Tickets
            </NavLink>
            <NavLink 
              to="/crowdfund" 
              className="block px-3 py-4 text-base font-medium text-center hover:bg-clutch-light/20 rounded-md text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Crowdfund
            </NavLink>
            <NavLink 
              to="/collection" 
              className="block px-3 py-4 text-base font-medium text-center hover:bg-clutch-light/20 rounded-md text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              <Recycle className="h-4 w-4 inline mr-1" />
              Collection
            </NavLink>
            <NavLink 
              to="/wallet" 
              className="block px-3 py-4 my-4 mx-auto max-w-xs text-base font-medium text-center text-white bg-gradient-to-r from-basketball to-basketball-dark rounded-md"
              onClick={() => setIsOpen(false)}
            >
              My Tokens
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
