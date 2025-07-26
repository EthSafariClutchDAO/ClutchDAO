
import { z } from 'zod';

// Form schema validation
export const formSchema = z.object({
  plasticType: z.string({
    required_error: "Please select the type of plastic",
  }),
  amount: z.coerce
    .number()
    .positive("Amount must be greater than 0")
    .max(100, "Amount must be less than 100kg"),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters",
  }),
});

export type CollectionFormValues = z.infer<typeof formSchema>;
