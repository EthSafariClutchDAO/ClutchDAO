
import { ShoppingCart } from 'lucide-react';
import TokenBalance from './TokenBalance';
import { Card } from './card';
import { Button } from './button';
import { Badge } from './badge';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  price: number;
  plasticSaved: string;
}

const ProductCard = ({ id, name, description, imageSrc, price, plasticSaved }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-white/10 bg-clutch-light/20 transition-all hover:shadow-md hover:shadow-basketball/10 hover:border-basketball/30 group futuristic-border">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-eco/20 text-eco hover:bg-eco/30 text-xs font-medium">
            {plasticSaved}
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 truncate text-white">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <TokenBalance balance={price} size="sm" showLabel={false} />
          
          <Button size="icon" variant="outline" className="rounded-full border-basketball-light hover:bg-basketball hover:text-white transition-colors">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
