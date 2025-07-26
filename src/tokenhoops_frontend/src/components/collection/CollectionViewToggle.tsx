
import { Grid, Table, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CollectionViewToggleProps {
  viewMode: 'cards' | 'table';
  setViewMode: (mode: 'cards' | 'table') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CollectionViewToggle = ({ 
  viewMode, 
  setViewMode, 
  searchQuery, 
  setSearchQuery 
}: CollectionViewToggleProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      <div className="flex items-center gap-2 bg-clutch-light/10 p-1 rounded-md border border-clutch-light/20">
        <Button 
          variant="ghost"
          size="sm"
          onClick={() => setViewMode('cards')} 
          className={`${viewMode === 'cards' ? 'bg-clutch-light/30 text-white' : 'text-gray-400'}`}
        >
          <Grid className="h-4 w-4 mr-1" />
          Cards
        </Button>
        <Button 
          variant="ghost"
          size="sm"
          onClick={() => setViewMode('table')} 
          className={`${viewMode === 'table' ? 'bg-clutch-light/30 text-white' : 'text-gray-400'}`}
        >
          <Table className="h-4 w-4 mr-1" />
          Table
        </Button>
      </div>

      <div className="relative w-full sm:w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search records..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-clutch-light/10 border border-clutch-light/30 rounded-md focus:outline-none focus:ring-1 focus:ring-basketball"
        />
      </div>
    </div>
  );
};

export default CollectionViewToggle;
