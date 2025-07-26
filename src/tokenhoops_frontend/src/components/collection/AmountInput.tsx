
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { CollectionFormValues } from "./CollectionFormSchema";

interface AmountInputProps {
  form: UseFormReturn<CollectionFormValues>;
}

const AmountInput = ({ form }: AmountInputProps) => {
  return (
    <FormField
      control={form.control}
      name="amount"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Amount (kg)</FormLabel>
          <FormControl>
            <Input
              type="number"
              step="0.1"
              placeholder="Enter amount in kg"
              {...field}
            />
          </FormControl>
          <FormDescription>
            Enter the weight of plastic collected
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AmountInput;
