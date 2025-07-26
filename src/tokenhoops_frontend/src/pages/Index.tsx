
import { ArrowRight, CircleDollarSign, RecycleIcon, ShoppingBag, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import TokenBalance from '../components/ui/TokenBalance';
import ActivityCard from '../components/ui/ActivityCard';
import ProductCard from '../components/ui/ProductCard';
import CrowdfundCard from '../components/ui/CrowdfundCard';
import TicketCard from '../components/ui/TicketCard';

const Index = () => {
  // Placeholder data
  const activities = [
    {
      id: '1',
      title: 'Community Recycling Drive',
      description: 'Join our weekly plastic collection and sorting session at the community center',
      imageSrc: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reward: 50,
      impact: 'Reduce 20kg plastic waste'
    },
    {
      id: '2',
      title: 'Basketball Court Cleanup',
      description: 'Help clean up plastic waste around local basketball courts',
      imageSrc: 'https://images.unsplash.com/photo-1636355998264-ef2b94f00b80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reward: 35,
      impact: 'Clean 3 courts'
    },
    {
      id: '3',
      title: 'Plastic Upcycling Workshop',
      description: 'Learn how to transform plastic waste into useful products',
      imageSrc: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reward: 65,
      impact: 'Create from waste'
    }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Recycled Basketball',
      description: 'Made from 70% recycled plastics, this basketball offers professional performance with eco-conscious materials',
      imageSrc: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 150,
      plasticSaved: '3kg plastic saved'
    },
    {
      id: '2',
      name: 'Eco-Friendly Water Bottle',
      description: 'Stay hydrated during games with this bottle made from recycled plastics',
      imageSrc: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 75,
      plasticSaved: '1.2kg plastic saved'
    }
  ];

  const crowdfundProjects = [
    {
      id: '1',
      title: 'New Recycled Court Surface',
      description: 'Help fund a new basketball court made entirely from recycled plastic materials',
      imageSrc: 'https://images.unsplash.com/photo-1626253788573-27921aa76059?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      goal: 2500,
      current: 1200,
      backers: 78,
      daysLeft: 14
    }
  ];

  const upcomingGame = {
    id: '1',
    teamHome: 'Green Ballers',
    teamAway: 'Eco Warriors',
    date: 'Oct 15, 2023',
    time: '7:00 PM',
    venue: 'Community Center Court',
    price: 120,
    imageSrc: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 basketball-pattern opacity-10"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Turn Plastic into Basketball Opportunities
          </h1>
          <p className="hero-subtitle">
            Earn tokens by participating in plastic segregation activities and redeem them for sustainable products, game tickets, or support community initiatives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#activities" className="hero-cta">
              Start Earning Tokens
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors animate-fade-in">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* User Balance Section */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm animate-slide-in">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0 text-center sm:text-left">
                <h2 className="text-xl font-semibold mb-1">Your Token Balance</h2>
                <p className="text-gray-600 text-sm">Earn more by participating in activities</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <TokenBalance balance={350} size="lg" showLabel={true} />
                
                <Link 
                  to="/wallet" 
                  className="inline-flex items-center justify-center rounded-md bg-basketball px-4 py-2 font-medium text-white shadow-sm hover:bg-basketball-dark transition-colors"
                >
                  <span>View History</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How EcoHoops Works</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Simple steps to turn plastic segregation into basketball opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-basketball/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <RecycleIcon className="h-8 w-8 text-basketball" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Participate</h3>
              <p className="text-gray-600">
                Join plastic segregation activities in your community and earn tokens for your contribution
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-basketball/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CircleDollarSign className="h-8 w-8 text-basketball" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Earn Tokens</h3>
              <p className="text-gray-600">
                Collect tokens based on your contribution levels, tracked in your secure digital wallet
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-basketball/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-8 w-8 text-basketball" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Redeem Rewards</h3>
              <p className="text-gray-600">
                Use your tokens for eco-friendly products, game tickets, or support community projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold">Earn Tokens</h2>
              <p className="mt-2 text-gray-600">Participate in these activities to earn tokens</p>
            </div>
            <Link to="/activities" className="text-basketball hover:text-basketball-dark font-medium flex items-center">
              <span>View All</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map(activity => (
              <ActivityCard 
                key={activity.id}
                id={activity.id}
                title={activity.title}
                description={activity.description}
                imageSrc={activity.imageSrc}
                reward={activity.reward}
                impact={activity.impact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold">Sustainable Products</h2>
              <p className="mt-2 text-gray-600">Redeem your tokens for eco-friendly basketball gear</p>
            </div>
            <Link to="/marketplace" className="text-basketball hover:text-basketball-dark font-medium flex items-center">
              <span>Browse Marketplace</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                imageSrc={product.imageSrc}
                price={product.price}
                plasticSaved={product.plasticSaved}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Split Section - Crowdfund & Tickets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Crowdfund */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Community Projects</h2>
                  <p className="mt-1 text-gray-600">Support initiatives with your tokens</p>
                </div>
                <Link to="/crowdfund" className="text-basketball hover:text-basketball-dark font-medium flex items-center text-sm">
                  <span>View All</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div>
                {crowdfundProjects.map(project => (
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
            
            {/* Tickets */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Upcoming Games</h2>
                  <p className="mt-1 text-gray-600">Redeem tickets with your tokens</p>
                </div>
                <Link to="/tickets" className="text-basketball hover:text-basketball-dark font-medium flex items-center text-sm">
                  <span>View All</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <TicketCard 
                id={upcomingGame.id}
                teamHome={upcomingGame.teamHome}
                teamAway={upcomingGame.teamAway}
                date={upcomingGame.date}
                time={upcomingGame.time}
                venue={upcomingGame.venue}
                price={upcomingGame.price}
                imageSrc={upcomingGame.imageSrc}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-basketball">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join our community today and start turning plastic segregation into basketball opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#activities" 
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-medium text-basketball shadow-md hover:bg-gray-100 transition-colors"
            >
              <RecycleIcon className="mr-2 h-5 w-5" />
              <span>Start Earning</span>
            </a>
            <a 
              href="/marketplace" 
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              <span>Browse Products</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
