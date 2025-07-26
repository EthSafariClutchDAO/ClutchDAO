
import { Recycle, Trophy, ListChecks, Coins } from 'lucide-react';

interface StatsOverviewProps {
  typeTotals: Record<string, number>;
  collectionRecords: Array<{
    id: string;
    tokens: number;
    plasticType: string;
  }>;
}

const StatsOverview = ({ typeTotals, collectionRecords }: StatsOverviewProps) => {
  return (
    <div className="glass-card mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 flex flex-col items-center">
          <div className="bg-basketball/20 p-2 rounded-full mb-2">
            <Recycle className="h-6 w-6 text-basketball" />
          </div>
          <p className="text-sm text-gray-400 mb-1">Total Collected</p>
          <p className="text-2xl font-bold text-white">
            {Object.values(typeTotals).reduce((sum, val) => sum + val, 0).toFixed(1)} kg
          </p>
        </div>
        
        <div className="p-4 flex flex-col items-center">
          <div className="bg-eco/20 p-2 rounded-full mb-2">
            <Trophy className="h-6 w-6 text-eco" />
          </div>
          <p className="text-sm text-gray-400 mb-1">Most Common</p>
          <p className="text-2xl font-bold text-white">
            {Object.entries(typeTotals).length > 0 
              ? Object.entries(typeTotals).sort((a, b) => b[1] - a[1])[0][0]
              : '-'}
          </p>
        </div>
        
        <div className="p-4 flex flex-col items-center">
          <div className="bg-blue-500/20 p-2 rounded-full mb-2">
            <ListChecks className="h-6 w-6 text-blue-500" />
          </div>
          <p className="text-sm text-gray-400 mb-1">Records</p>
          <p className="text-2xl font-bold text-white">{collectionRecords.length}</p>
        </div>
        
        <div className="p-4 flex flex-col items-center">
          <div className="bg-basketball-light/20 p-2 rounded-full mb-2">
            <Coins className="h-6 w-6 text-basketball-light" />
          </div>
          <p className="text-sm text-gray-400 mb-1">Tokens Earned</p>
          <p className="text-2xl font-bold text-white">
            {collectionRecords.reduce((sum, record) => sum + record.tokens, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
