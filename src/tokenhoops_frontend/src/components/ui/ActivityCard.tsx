
import { RecycleIcon } from 'lucide-react';
import TokenBalance from './TokenBalance';

interface ActivityCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  reward: number;
  impact: string;
}

const ActivityCard = ({ id, title, description, imageSrc, reward, impact }: ActivityCardProps) => {
  return (
    <div className="bg-clutch-light/20 rounded-xl overflow-hidden shadow-md hover-scale border border-white/10 futuristic-border">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <div className="eco-badge flex items-center space-x-1">
            <RecycleIcon className="h-3.5 w-3.5" />
            <span>{impact}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-gray-400">
            <span>Earn</span>
            <TokenBalance balance={reward} size="sm" showLabel={false} />
          </div>
          
          <button className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-gradient-to-r from-basketball to-basketball-dark text-white hover:shadow-lg hover:shadow-basketball/20 transition-all text-sm font-medium">
            Participate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
