
// Plastic types mapping
export const plasticTypes = [
  { id: 'PET', name: 'PET', fullName: 'Polyethylene Terephthalate', ratePerKg: 10 },
  { id: 'HDPE', name: 'HDPE', fullName: 'High-Density Polyethylene', ratePerKg: 10 },
  { id: 'PVC', name: 'PVC', fullName: 'Polyvinyl Chloride', ratePerKg: 10 },
  { id: 'LDPE', name: 'LDPE', fullName: 'Low-Density Polyethylene', ratePerKg: 10 },
  { id: 'PP', name: 'PP', fullName: 'Polypropylene', ratePerKg: 10 },
  { id: 'PS', name: 'PS', fullName: 'Polystyrene', ratePerKg: 10 },
];

// Calculate tokens based on plastic type and amount
export const calculateTokens = (plasticType: string, amount: number): number => {
  const selectedType = plasticTypes.find(type => type.id === plasticType);
  if (selectedType && amount) {
    return Math.round(selectedType.ratePerKg * amount);
  }
  return 0;
};

// Create a new collection record
export const createCollectionRecord = (values: {
  plasticType: string;
  amount: number;
  location: string;
}) => {
  const tokens = calculateTokens(values.plasticType, values.amount);
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  
  return {
    id: Date.now().toString(),
    date: formattedDate,
    plasticType: values.plasticType,
    amount: values.amount.toString(),
    location: values.location,
    tokens: tokens,
    impact: `Saved ${(values.amount * 0.5).toFixed(1)}kg CO₂`
  };
};
