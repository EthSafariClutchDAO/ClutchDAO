
import { Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PlasticTypeFilterProps {
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
  plasticTypes: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}

const PlasticTypeFilter = ({ selectedType, setSelectedType, plasticTypes }: PlasticTypeFilterProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Filter className="h-5 w-5 text-basketball" />
        <h2 className="text-sm font-medium text-gray-300">Filter by Plastic Type</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className={`px-3 py-1 cursor-pointer ${
            selectedType === null 
              ? 'bg-basketball text-white hover:bg-basketball-light' 
              : 'bg-transparent hover:bg-clutch-light/20'
          }`}
          onClick={() => setSelectedType(null)}
        >
          All Types
        </Badge>
        
        {plasticTypes.map(type => (
          <Badge
            key={type.id}
            variant="outline"
            className={`px-3 py-1 cursor-pointer flex items-center ${
              selectedType === type.id 
                ? 'bg-basketball text-white hover:bg-basketball-light' 
                : 'bg-transparent hover:bg-clutch-light/20'
            }`}
            onClick={() => setSelectedType(type.id)}
          >
            <span className={`w-2 h-2 rounded-full ${type.color} mr-1.5`}></span>
            {type.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default PlasticTypeFilter;
