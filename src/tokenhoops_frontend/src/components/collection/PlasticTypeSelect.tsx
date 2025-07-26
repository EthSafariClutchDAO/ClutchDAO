
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { plasticTypes } from "@/utils/plasticCollection";
import { UseFormReturn } from "react-hook-form";
import { CollectionFormValues } from "./CollectionFormSchema";

interface PlasticTypeSelectProps {
  form: UseFormReturn<CollectionFormValues>;
}

const PlasticTypeSelect = ({ form }: PlasticTypeSelectProps) => {
  return (
    <FormField
      control={form.control}
      name="plasticType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Plastic Type</FormLabel>
          <Select 
            onValueChange={field.onChange} 
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select plastic type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {plasticTypes.map(type => (
                <SelectItem key={type.id} value={type.id}>
                  {type.name} - {type.fullName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>
            Select the type of plastic you collected
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PlasticTypeSelect;
