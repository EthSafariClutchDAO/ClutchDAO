
import { Users } from 'lucide-react';
import TokenBalance from './TokenBalance';

interface CrowdfundCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  goal: number;
  current: number;
  backers: number;
  daysLeft: number;
}

const CrowdfundCard = ({ id, title, description, imageSrc, goal, current, backers, daysLeft }: CrowdfundCardProps) => {
  const progress = Math.min(100, (current / goal) * 100);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover-scale">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <div className="flex items-center">
              <TokenBalance balance={current} size="sm" showLabel={false} />
              <span className="text-gray-500 ml-1">of</span>
              <TokenBalance balance={goal} size="sm" showLabel={false} />
            </div>
            <span className="text-gray-600">{daysLeft} days left</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-basketball h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Users className="h-3.5 w-3.5 mr-1" />
            <span>{backers} backers</span>
          </div>
        </div>
        
        <button className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 bg-basketball text-white hover:bg-basketball-dark transition-colors text-sm font-medium">
          Support Project
        </button>
      </div>
    </div>
  );
};

export default CrowdfundCard;
