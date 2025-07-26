
import { ArrowUpRight, Info, Users } from 'lucide-react';
import CrowdfundCard from '../components/ui/CrowdfundCard';
import TokenBalance from '../components/ui/TokenBalance';

const Crowdfund = () => {
  // Placeholder data
  const projects = [
    {
      id: '1',
      title: 'New Recycled Court Surface',
      description: 'Help fund a new basketball court made entirely from recycled plastic materials for our community center.',
      imageSrc: 'https://images.unsplash.com/photo-1626253788573-27921aa76059?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      goal: 2500,
      current: 1200,
      backers: 78,
      daysLeft: 14,
      category: 'Infrastructure'
    },
    {
      id: '2',
      title: 'Youth Basketball Eco-Program',
      description: 'Support our program teaching youth about environmental sustainability through basketball.',
      imageSrc: 'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      goal: 1500,
      current: 980,
      backers: 64,
      daysLeft: 21,
      category: 'Education'
    },
    {
      id: '3',
      title: 'Plastic Collection Equipment',
      description: 'Purchase specialized equipment to collect and sort plastic waste more efficiently.',
      imageSrc: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      goal: 800,
      current: 520,
      backers: 42,
      daysLeft: 10,
      category: 'Equipment'
    },
    {
      id: '4',
      title: 'Tournament for Sustainability',
      description: 'Fund a basketball tournament with proceeds going to local environmental initiatives.',
      imageSrc: 'https://images.unsplash.com/photo-1628153792464-5328860769e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      goal: 1200,
      current: 300,
      backers: 24,
      daysLeft: 30,
      category: 'Events'
    },
    {
      id: '5',
      title: 'Mobile Recycling Station',
      description: 'Create a mobile station to collect plastic at basketball games and events.',
      imageSrc: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      goal: 1800,
      current: 650,
      backers: 38,
      daysLeft: 25,
      category: 'Infrastructure'
    },
    {
      id: '6',
      title: 'Educational Materials',
      description: 'Develop educational resources about plastic waste for basketball clubs and schools.',
      imageSrc: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      goal: 600,
      current: 420,
      backers: 36,
      daysLeft: 18,
      category: 'Education'
    }
  ];

  const featuredProject = projects[0]; // Using the first project as featured
  const categories = ['All Projects', 'Infrastructure', 'Education', 'Equipment', 'Events'];

  return (
    <div className="page-container min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Community Crowdfunding</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Support plastic reduction and sustainability initiatives within our basketball community.
        </p>
      </div>

      {/* Featured Project */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-full">
            <img 
              src={featuredProject.imageSrc} 
              alt={featuredProject.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center p-6 lg:p-10">
              <div className="max-w-md">
                <span className="text-xs uppercase tracking-wide text-white/80 bg-basketball px-2 py-1 rounded mb-4 inline-block">
                  Featured Project
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {featuredProject.title}
                </h2>
                <p className="text-white/90 mb-6 line-clamp-3 lg:line-clamp-4">
                  {featuredProject.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="inline-flex items-center px-4 py-2 bg-white text-basketball rounded-md font-medium hover:bg-gray-100 transition-colors">
                    <span>View Project</span>
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </button>
                  <div className="flex items-center text-white">
                    <Users className="h-4 w-4 mr-1.5" />
                    <span>{featuredProject.backers} backers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 lg:p-10 flex flex-col justify-center lg:border-l">
            <h3 className="text-xl font-semibold mb-6">Project Progress</h3>
            <div className="mb-8">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Collected</p>
                  <div className="flex items-end space-x-2">
                    <TokenBalance balance={featuredProject.current} size="lg" showLabel={false} />
                    <span className="text-gray-600 text-sm">of</span>
                    <TokenBalance balance={featuredProject.goal} size="md" showLabel={false} />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Time Left</p>
                  <p className="text-lg font-semibold">{featuredProject.daysLeft} days</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div 
                  className="bg-basketball h-3 rounded-full" 
                  style={{ width: `${(featuredProject.current / featuredProject.goal) * 100}%` }}
                ></div>
              </div>
              
              <div className="text-sm text-gray-600">
                {Math.round((featuredProject.current / featuredProject.goal) * 100)}% funded
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Your tokens:</span>
                <TokenBalance balance={350} size="md" showLabel={true} />
              </div>
              
              <div>
                <label htmlFor="donation" className="block text-sm font-medium text-gray-700 mb-1">
                  Support this project with tokens:
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    id="donation"
                    min="10"
                    placeholder="50"
                    className="flex-1 border-gray-300 rounded-md shadow-sm focus:border-basketball focus:ring-basketball"
                  />
                  <button className="bg-basketball text-white px-4 py-2 rounded-md font-medium hover:bg-basketball-dark transition-colors">
                    Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Categories */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Crowdfunding Projects</h2>
          <div className="flex overflow-x-auto space-x-2 py-1">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
                  category === 'All Projects'
                    ? 'bg-basketball text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map(project => (
            <CrowdfundCard 
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              goal={project.goal}
              current={project.current}
              backers={project.backers}
              daysLeft={project.daysLeft}
            />
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <Info className="mr-2 h-5 w-5 text-basketball" />
          <h2 className="text-xl font-bold">How Crowdfunding Works</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <span className="text-xl font-bold text-basketball">1</span>
            </div>
            <h3 className="font-semibold mb-2">Browse Projects</h3>
            <p className="text-gray-600 text-sm">
              Explore community initiatives focused on plastic reduction and sustainability in basketball.
            </p>
          </div>
          
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <span className="text-xl font-bold text-basketball">2</span>
            </div>
            <h3 className="font-semibold mb-2">Support with Tokens</h3>
            <p className="text-gray-600 text-sm">
              Contribute your earned tokens to projects you believe in to help them reach their funding goals.
            </p>
          </div>
          
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <span className="text-xl font-bold text-basketball">3</span>
            </div>
            <h3 className="font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600 text-sm">
              Follow updates on projects you've supported and see the real-world impact of your contributions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowdfund;
