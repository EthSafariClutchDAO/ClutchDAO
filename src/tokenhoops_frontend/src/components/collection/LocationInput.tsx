
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { CollectionFormValues } from "./CollectionFormSchema";

interface LocationInputProps {
  form: UseFormReturn<CollectionFormValues>;
}

const LocationInput = ({ form }: LocationInputProps) => {
  return (
    <FormField
      control={form.control}
      name="location"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Collection Location</FormLabel>
          <FormControl>
            <Input 
              placeholder="Enter location"
              {...field}
            />
          </FormControl>
          <FormDescription>
            Where did you collect the plastic?
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default LocationInput;
