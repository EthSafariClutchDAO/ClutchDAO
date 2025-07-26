
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Recycle, Coins } from "lucide-react";

interface PlasticType {
  id: string;
  name: string;
  fullName: string;
  color: string;
  description: string;
  tokenRate: string;
  examples: string;
}

interface CollectionRecord {
  id: string;
  plasticType: string;
  tokens: number;
}

interface PlasticTypeCardsProps {
  selectedType: string | null;
  plasticTypes: PlasticType[];
  typeTotals: Record<string, number>;
  collectionRecords: CollectionRecord[];
}

const PlasticTypeCards = ({ 
  selectedType, 
  plasticTypes, 
  typeTotals, 
  collectionRecords 
}: PlasticTypeCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {(selectedType ? plasticTypes.filter(t => t.id === selectedType) : plasticTypes).map(type => {
        const totalAmount = typeTotals[type.id] || 0;
        const typeRecords = collectionRecords.filter(r => r.plasticType === type.id);
        
        return (
          <Card key={type.id} className="glass-card hover-scale shadow-lg overflow-hidden">
            <div className={`h-2 ${type.color} w-full`}></div>
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                <span>{type.name}</span>
                <span className="text-sm font-normal px-2 py-1 bg-clutch-light/20 rounded-full flex items-center gap-1">
                  <Recycle className="h-3 w-3" />
                  {totalAmount.toFixed(1)} kg
                </span>
              </CardTitle>
              <CardDescription>{type.fullName}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-gray-400 mb-4">{type.description}</p>
              <div className="text-xs text-gray-400 space-y-3">
                <div className="flex justify-between">
                  <span>Token Rate:</span>
                  <span className="text-basketball-light">{type.tokenRate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Common Examples:</span>
                  <span>{type.examples}</span>
                </div>
                <div className="flex justify-between">
                  <span>Collection Count:</span>
                  <span>{typeRecords.length} records</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-4 flex justify-between">
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Coins className="h-4 w-4 text-basketball-light" />
                Total Tokens:
              </span>
              <span className="text-basketball-light font-medium">
                {typeRecords.reduce((sum, record) => sum + record.tokens, 0)} tokens
              </span>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default PlasticTypeCards;
