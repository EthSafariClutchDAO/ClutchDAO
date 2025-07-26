
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Recycle, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { formSchema, CollectionFormValues } from './CollectionFormSchema';
import PlasticTypeSelect from './PlasticTypeSelect';
import AmountInput from './AmountInput';
import LocationInput from './LocationInput';
import TokensDisplay from './TokensDisplay';
import { calculateTokens, createCollectionRecord } from '@/utils/plasticCollection';

interface RecordCollectionFormProps {
  onCollectionRecorded: (newRecord: any) => void;
}

const RecordCollectionForm = ({ onCollectionRecorded }: RecordCollectionFormProps) => {
  const { toast } = useToast();
  const [calculatedTokens, setCalculatedTokens] = useState(0);
  
  const form = useForm<CollectionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plasticType: "",
      amount: undefined,
      location: "",
    },
  });

  // Watch for changes to update token calculation
  const watchAmount = form.watch("amount");
  const watchPlasticType = form.watch("plasticType");
  
  // Update tokens when values change
  useEffect(() => {
    if (watchAmount && watchPlasticType) {
      const tokens = calculateTokens(watchPlasticType, watchAmount);
      setCalculatedTokens(tokens);
    }
  }, [watchAmount, watchPlasticType]);

  const onSubmit = (values: CollectionFormValues) => {
    // Make sure values are valid and complete before creating record
    if (values.plasticType && values.amount && values.location) {
      // Create a new record
      const newRecord = createCollectionRecord({
        plasticType: values.plasticType,
        amount: values.amount,
        location: values.location
      });
      
      // Call the callback function with the new record
      onCollectionRecorded(newRecord);
      
      // Show success toast
      toast({
        title: "Collection Recorded",
        description: `You earned ${newRecord.tokens} tokens for ${values.amount}kg of ${values.plasticType} plastic.`,
        duration: 5000,
      });
      
      // Reset the form
      form.reset();
      setCalculatedTokens(0);
    }
  };

  return (
    <div className="glass-card p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Recycle className="text-basketball" />
        Record Plastic Collection
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlasticTypeSelect form={form} />
            <AmountInput form={form} />
            <LocationInput form={form} />
            <TokensDisplay calculatedTokens={calculatedTokens} />
          </div>
          
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-basketball hover:bg-basketball/90"
          >
            <Check className="mr-2" />
            Submit Collection
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RecordCollectionForm;
