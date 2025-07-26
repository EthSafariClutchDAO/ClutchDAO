
import { Calendar, MapPin, Ticket } from 'lucide-react';
import TokenBalance from './TokenBalance';

interface TicketCardProps {
  id: string;
  teamHome: string;
  teamAway: string;
  date: string;
  time: string;
  venue: string;
  price: number;
  imageSrc: string;
}

const TicketCard = ({ id, teamHome, teamAway, date, time, venue, price, imageSrc }: TicketCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover-scale">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={`${teamHome} vs ${teamAway}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="font-bold text-xl text-white">{teamHome} vs {teamAway}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex-1 space-y-1">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-1.5" />
              <span>{date} • {time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1.5" />
              <span>{venue}</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <TokenBalance balance={price} size="md" showLabel={false} />
          </div>
        </div>
        
        <button className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 bg-basketball text-white hover:bg-basketball-dark transition-colors font-medium">
          <Ticket className="h-4 w-4 mr-2" />
          <span>Redeem Ticket</span>
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
