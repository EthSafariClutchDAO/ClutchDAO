
import { Activity, BarChart, Calendar, CircleDollarSign, Clock, Coins, Download, Filter, Search } from 'lucide-react';
import { useState } from 'react';
import TokenBalance from '../components/ui/TokenBalance';

const Wallet = () => {
  const [selectedView, setSelectedView] = useState('history'); // 'history', 'stats'

  // Placeholder data
  const transactions = [
    {
      id: '1',
      type: 'earned',
      amount: 50,
      description: 'Community Recycling Drive',
      date: 'Oct 12, 2023',
      time: '2:30 PM'
    },
    {
      id: '2',
      type: 'spent',
      amount: 120,
      description: 'Eco-Friendly Water Bottle',
      date: 'Oct 10, 2023',
      time: '11:15 AM'
    },
    {
      id: '3',
      type: 'earned',
      amount: 35,
      description: 'Basketball Court Cleanup',
      date: 'Oct 05, 2023',
      time: '4:45 PM'
    },
    {
      id: '4',
      type: 'spent',
      amount: 150,
      description: 'Game Ticket: Green Ballers vs Eco Warriors',
      date: 'Sep 28, 2023',
      time: '9:20 AM'
    },
    {
      id: '5',
      type: 'contributed',
      amount: 75,
      description: 'Crowdfunding: New Recycled Court Surface',
      date: 'Sep 25, 2023',
      time: '3:10 PM'
    },
    {
      id: '6',
      type: 'earned',
      amount: 65,
      description: 'Plastic Upcycling Workshop',
      date: 'Sep 20, 2023',
      time: '5:30 PM'
    },
    {
      id: '7',
      type: 'spent',
      amount: 90,
      description: 'Recycled Sports Bag',
      date: 'Sep 18, 2023',
      time: '10:45 AM'
    },
    {
      id: '8',
      type: 'earned',
      amount: 40,
      description: 'Weekly Recycling Bonus',
      date: 'Sep 15, 2023',
      time: '12:00 PM'
    }
  ];

  const stats = {
    totalEarned: 190,
    totalSpent: 360,
    totalContributed: 75,
    plasticCollected: '45kg',
    activitiesJoined: 4,
    purchasesMade: 3,
    ticketsRedeemed: 1,
    projectsSupported: 1
  };

  // Calculate current balance
  const currentBalance = transactions.reduce((total, transaction) => {
    if (transaction.type === 'earned') {
      return total + transaction.amount;
    } else {
      return total - transaction.amount;
    }
  }, 0);

  return (
    <div className="page-container min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Token Wallet</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your token earnings, spending, and impact on plastic reduction.
        </p>
      </div>

      {/* Balance Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-basketball to-basketball-dark text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold mb-1">Current Balance</h2>
              <div className="flex items-center">
                <Coins className="h-6 w-6 mr-2" />
                <span className="text-3xl font-bold">{350}</span>
                <span className="ml-2 opacity-90">tokens</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="inline-flex items-center justify-center rounded-md bg-white/20 backdrop-blur-sm px-4 py-2 font-medium text-white hover:bg-white/30 transition-colors">
                <Download className="mr-1.5 h-4 w-4" />
                <span>Download History</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center py-3">
            <div className="text-gray-600 text-sm mb-1">Earned</div>
            <div className="flex items-center justify-center">
              <CircleDollarSign className="h-4 w-4 text-eco mr-1" />
              <span className="text-xl font-semibold">{stats.totalEarned}</span>
            </div>
          </div>
          
          <div className="text-center py-3">
            <div className="text-gray-600 text-sm mb-1">Spent</div>
            <div className="flex items-center justify-center">
              <CircleDollarSign className="h-4 w-4 text-basketball mr-1" />
              <span className="text-xl font-semibold">{stats.totalSpent}</span>
            </div>
          </div>
          
          <div className="text-center py-3">
            <div className="text-gray-600 text-sm mb-1">Contributed</div>
            <div className="flex items-center justify-center">
              <CircleDollarSign className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-xl font-semibold">{stats.totalContributed}</span>
            </div>
          </div>
          
          <div className="text-center py-3">
            <div className="text-gray-600 text-sm mb-1">Plastic Saved</div>
            <div className="flex items-center justify-center">
              <CircleDollarSign className="h-4 w-4 text-eco-dark mr-1" />
              <span className="text-xl font-semibold">{stats.plasticCollected}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-8">
        <button
          className={`px-6 py-3 font-medium text-sm flex items-center ${
            selectedView === 'history'
              ? 'text-basketball border-b-2 border-basketball'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setSelectedView('history')}
        >
          <Activity className="mr-2 h-4 w-4" />
          Transaction History
        </button>
        <button
          className={`px-6 py-3 font-medium text-sm flex items-center ${
            selectedView === 'stats'
              ? 'text-basketball border-b-2 border-basketball'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setSelectedView('stats')}
        >
          <BarChart className="mr-2 h-4 w-4" />
          Activity Statistics
        </button>
      </div>

      {selectedView === 'history' ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-basketball"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex space-x-3">
                <div className="relative">
                  <select className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-basketball">
                    <option>All Types</option>
                    <option>Earned</option>
                    <option>Spent</option>
                    <option>Contributed</option>
                  </select>
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                
                <div className="relative">
                  <select className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-basketball">
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Last Year</option>
                    <option>All Time</option>
                  </select>
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{transaction.date}</div>
                          <div className="text-xs text-gray-500">{transaction.time}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{transaction.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          transaction.type === 'earned' 
                            ? 'bg-eco/10 text-eco' 
                            : transaction.type === 'spent'
                            ? 'bg-basketball/10 text-basketball'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div 
                        className={`text-sm font-medium ${
                          transaction.type === 'earned' 
                            ? 'text-eco' 
                            : 'text-basketball'
                        }`}
                      >
                        {transaction.type === 'earned' ? '+' : '-'}{transaction.amount}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">8</span> of <span className="font-medium">32</span> transactions
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Activity Summary</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Activities Joined</p>
                  <p className="text-2xl font-semibold">{stats.activitiesJoined}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Purchases Made</p>
                  <p className="text-2xl font-semibold">{stats.purchasesMade}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Tickets Redeemed</p>
                  <p className="text-2xl font-semibold">{stats.ticketsRedeemed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Projects Supported</p>
                  <p className="text-2xl font-semibold">{stats.projectsSupported}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Token Distribution</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Earned</span>
                      <span className="text-sm font-medium">{stats.totalEarned} tokens</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-eco h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Spent on Products</span>
                      <span className="text-sm font-medium">210 tokens</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-basketball h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Spent on Tickets</span>
                      <span className="text-sm font-medium">150 tokens</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-basketball-light h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Contributed to Projects</span>
                      <span className="text-sm font-medium">{stats.totalContributed} tokens</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Environmental Impact</h3>
            </div>
            <div className="p-6">
              <div className="text-center py-6">
                <div className="text-sm text-gray-600 mb-1">Total Plastic Collected</div>
                <div className="text-4xl font-bold text-eco-dark">{stats.plasticCollected}</div>
                <div className="text-sm text-gray-600 mt-1">through your activities</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">CO₂ Saved</p>
                  <p className="text-xl font-semibold">12kg</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">Water Saved</p>
                  <p className="text-xl font-semibold">250L</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">Energy Saved</p>
                  <p className="text-xl font-semibold">85kWh</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">Trees Equivalent</p>
                  <p className="text-xl font-semibold">2 trees</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Recent Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-eco/10 flex items-center justify-center">
                        <Coins className="h-4 w-4 text-eco" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Community Recycling Drive</p>
                      <p className="text-xs text-gray-600">Collected 5kg of plastic</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-eco/10 flex items-center justify-center">
                        <Coins className="h-4 w-4 text-eco" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Basketball Court Cleanup</p>
                      <p className="text-xs text-gray-600">Collected 3kg of plastic</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-eco/10 flex items-center justify-center">
                        <Coins className="h-4 w-4 text-eco" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Plastic Upcycling Workshop</p>
                      <p className="text-xs text-gray-600">Transformed 2kg of plastic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
