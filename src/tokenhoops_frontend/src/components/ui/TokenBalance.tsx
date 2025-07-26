
import { Coins } from 'lucide-react';
import { Badge } from './badge';
import { cn } from '@/lib/utils';

interface TokenBalanceProps {
  balance: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const TokenBalance = ({ balance, size = 'md', showLabel = true }: TokenBalanceProps) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "gap-1.5 font-medium border-basketball/30 py-1.5 px-3 bg-basketball/10 hover:bg-basketball/20 transition-colors",
        showLabel ? "pr-4" : ""
      )}
    >
      <Coins className={`text-basketball-light ${iconSizes[size]}`} />
      <span className={`${sizeClasses[size]} tabular-nums text-basketball-light`}>{balance}</span>
      {showLabel && <span className="text-muted-foreground text-xs">tokens</span>}
    </Badge>
  );
};

export default TokenBalance;
