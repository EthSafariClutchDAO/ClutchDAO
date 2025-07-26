
import { FormItem, FormLabel, FormDescription } from "@/components/ui/form";
import TokenBalance from "@/components/ui/TokenBalance";

interface TokensDisplayProps {
  calculatedTokens: number;
}

const TokensDisplay = ({ calculatedTokens }: TokensDisplayProps) => {
  return (
    <FormItem>
      <FormLabel>Tokens to Earn</FormLabel>
      <div className="flex items-center gap-4 h-10">
        <TokenBalance 
          balance={calculatedTokens} 
          size="lg" 
          showLabel={true}
        />
      </div>
      <FormDescription>
        Estimated tokens based on plastic type and amount
      </FormDescription>
    </FormItem>
  );
};

export default TokensDisplay;
