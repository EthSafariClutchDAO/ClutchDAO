
import { useState } from 'react';
import { Calendar, CalendarDays, Filter, MapPin, Search } from 'lucide-react';
import TicketCard from '../components/ui/TicketCard';

const Tickets = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Placeholder data
  const tickets = [
    {
      id: '1',
      teamHome: 'Green Ballers',
      teamAway: 'Eco Warriors',
      date: 'Oct 15, 2023',
      time: '7:00 PM',
      venue: 'Community Center Court',
      price: 120,
      imageSrc: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      teamHome: 'Recyclers',
      teamAway: 'Ocean Defenders',
      date: 'Oct 22, 2023',
      time: '6:30 PM',
      venue: 'Downtown Arena',
      price: 150,
      imageSrc: 'https://images.unsplash.com/photo-1618986613055-a6110462ed48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      teamHome: 'Green Ballers',
      teamAway: 'Recyclers',
      date: 'Nov 05, 2023',
      time: '7:30 PM',
      venue: 'Community Center Court',
      price: 120,
      imageSrc: 'https://images.unsplash.com/photo-1518407613690-d9fc990e795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      teamHome: 'Ocean Defenders',
      teamAway: 'Eco Warriors',
      date: 'Nov 12, 2023',
      time: '8:00 PM',
      venue: 'Downtown Arena',
      price: 180,
      imageSrc: 'https://images.unsplash.com/photo-1535469420027-517674dad7a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      teamHome: 'Recyclers',
      teamAway: 'Green Ballers',
      date: 'Nov 19, 2023',
      time: '7:00 PM',
      venue: 'Downtown Arena',
      price: 150,
      imageSrc: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '6',
      teamHome: 'Eco Warriors',
      teamAway: 'Ocean Defenders',
      date: 'Dec 03, 2023',
      time: '6:30 PM',
      venue: 'Community Center Court',
      price: 120,
      imageSrc: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const teams = ['All Teams', 'Green Ballers', 'Eco Warriors', 'Recyclers', 'Ocean Defenders'];
  const venues = ['All Venues', 'Community Center Court', 'Downtown Arena'];

  const filteredTickets = tickets.filter(ticket => 
    ticket.teamHome.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ticket.teamAway.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.venue.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Basketball Game Tickets</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Use your tokens to redeem tickets for upcoming basketball games in your community.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search games, teams, or venues..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-basketball"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <select className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-basketball">
                <option>Upcoming Games</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Next Month</option>
              </select>
              <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="relative">
              <select className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-basketball">
                {teams.map(team => (
                  <option key={team}>{team}</option>
                ))}
              </select>
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="relative">
              <select className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-basketball">
                {venues.map(venue => (
                  <option key={venue}>{venue}</option>
                ))}
              </select>
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Games Calendar */}
      <div className="mb-10">
        <div className="flex items-center mb-6">
          <Calendar className="mr-2 h-5 w-5 text-basketball" />
          <h2 className="text-2xl font-bold">Upcoming Games</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTickets.map(ticket => (
            <TicketCard 
              key={ticket.id}
              id={ticket.id}
              teamHome={ticket.teamHome}
              teamAway={ticket.teamAway}
              date={ticket.date}
              time={ticket.time}
              venue={ticket.venue}
              price={ticket.price}
              imageSrc={ticket.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-gray-50 rounded-xl p-8 mt-12">
        <h3 className="text-xl font-bold mb-4">Token Redemption Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">How to Redeem Tickets</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Select the game you want to attend</li>
              <li>Click the "Redeem Ticket" button</li>
              <li>Confirm your token payment</li>
              <li>Receive your digital ticket via email</li>
              <li>Show your ticket at the venue entrance</li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Important Notes</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Tickets are non-refundable once redeemed</li>
              <li>Tickets can be transferred to other platform users</li>
              <li>Arrive 15 minutes before game time</li>
              <li>Special seating is subject to availability</li>
              <li>One ticket per person per game</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
