import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-primary-100 py-8 border-t border-primary-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="font-display text-xl font-semibold mb-4">Italy at the Crossroads</h2>
            <p className="text-sm max-w-md">
              An investigative report on human smuggling networks, routes, and realities.
              Based on interviews with migrants and traffickers.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Report Sections</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#introduction" className="hover:text-accent-300 transition-colors">Introduction</a></li>
              <li><a href="#perilous-passage" className="hover:text-accent-300 transition-colors">The Perilous Passage</a></li>
              <li><a href="#traffickers" className="hover:text-accent-300 transition-colors">Trafficker Profiles</a></li>
              <li><a href="#network-analysis" className="hover:text-accent-300 transition-colors">Network Analysis</a></li>
              <li><a href="#experiences" className="hover:text-accent-300 transition-colors">Migrant Experiences</a></li>
              <li><a href="#conclusion" className="hover:text-accent-300 transition-colors">Conclusion</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-800 text-sm text-center text-primary-300">
          <p>&copy; {new Date().getFullYear()} - Research report on human smuggling networks</p>
          <p className="mt-1">This report is based on investigative research and interviews.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;