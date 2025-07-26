
import { useState } from 'react';
import RecordCollectionForm from '@/components/collection/RecordCollectionForm';
import PlasticTypeFilter from '@/components/collection/PlasticTypeFilter';
import StatsOverview from '@/components/collection/StatsOverview';
import CollectionViewToggle from '@/components/collection/CollectionViewToggle';
import PlasticTypeCards from '@/components/collection/PlasticTypeCards';
import CollectionRecordsTable from '@/components/collection/CollectionRecordsTable';
import CollectionPageHeader from '@/components/collection/CollectionPageHeader';

// Placeholder data for plastic collection records
const initialCollectionRecords = [
  {
    id: '1',
    date: '2023-10-15',
    plasticType: 'PET',
    amount: '5.2',
    location: 'Community Center',
    tokens: 52,
    impact: 'Saved 2.6kg CO₂'
  },
  {
    id: '2',
    date: '2023-10-12',
    plasticType: 'HDPE',
    amount: '3.4',
    location: 'School Recycling Event',
    tokens: 34,
    impact: 'Saved 1.7kg CO₂'
  },
  {
    id: '3',
    date: '2023-10-10',
    plasticType: 'PET',
    amount: '2.8',
    location: 'Basketball Court',
    tokens: 28,
    impact: 'Saved 1.4kg CO₂'
  },
  {
    id: '4',
    date: '2023-10-05',
    plasticType: 'LDPE',
    amount: '1.5',
    location: 'Park Cleanup',
    tokens: 15,
    impact: 'Saved 0.8kg CO₂'
  },
  {
    id: '5',
    date: '2023-10-01',
    plasticType: 'PP',
    amount: '4.0',
    location: 'Stadium Collection',
    tokens: 40,
    impact: 'Saved 2.0kg CO₂'
  },
  {
    id: '6',
    date: '2023-09-28',
    plasticType: 'PVC',
    amount: '0.8',
    location: 'Community Center',
    tokens: 8,
    impact: 'Saved 0.4kg CO₂'
  },
  {
    id: '7',
    date: '2023-09-25',
    plasticType: 'PS',
    amount: '1.2',
    location: 'Beach Cleanup',
    tokens: 12,
    impact: 'Saved 0.6kg CO₂'
  },
  {
    id: '8',
    date: '2023-09-20',
    plasticType: 'PET',
    amount: '3.5',
    location: 'School Recycling Event',
    tokens: 35,
    impact: 'Saved 1.8kg CO₂'
  }
];

// Information about plastic types for the cards
const plasticTypes = [
  {
    id: 'PET',
    name: 'PET',
    fullName: 'Polyethylene Terephthalate',
    color: 'bg-basketball/80',
    description: 'Common in beverage bottles and food containers',
    tokenRate: '10 tokens per kg',
    examples: 'Water bottles, soda bottles'
  },
  {
    id: 'HDPE',
    name: 'HDPE',
    fullName: 'High-Density Polyethylene',
    color: 'bg-eco/80',
    description: 'Used for milk jugs, detergent bottles',
    tokenRate: '10 tokens per kg',
    examples: 'Milk jugs, shampoo bottles'
  },
  {
    id: 'PVC',
    name: 'PVC',
    fullName: 'Polyvinyl Chloride',
    color: 'bg-blue-500/80',
    description: 'Used in plumbing, medical equipment',
    tokenRate: '10 tokens per kg',
    examples: 'Pipes, medical tubing'
  },
  {
    id: 'LDPE',
    name: 'LDPE',
    fullName: 'Low-Density Polyethylene',
    color: 'bg-yellow-500/80',
    description: 'Used in plastic bags, films',
    tokenRate: '10 tokens per kg',
    examples: 'Grocery bags, plastic wrap'
  },
  {
    id: 'PP',
    name: 'PP',
    fullName: 'Polypropylene',
    color: 'bg-purple-500/80',
    description: 'Used in food containers, bottle caps',
    tokenRate: '10 tokens per kg',
    examples: 'Yogurt containers, bottle caps'
  },
  {
    id: 'PS',
    name: 'PS',
    fullName: 'Polystyrene',
    color: 'bg-red-500/80',
    description: 'Used in foam packaging, disposable cups',
    tokenRate: '10 tokens per kg',
    examples: 'Foam cups, packing peanuts'
  }
];

const Collection = () => {
  const [collectionRecords, setCollectionRecords] = useState(initialCollectionRecords);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle adding a new collection record
  const handleNewCollection = (newRecord: any) => {
    setCollectionRecords(prevRecords => [newRecord, ...prevRecords]);
  };

  // Filter records based on selected plastic type and search query
  const filteredRecords = collectionRecords.filter(record => {
    const matchesType = selectedType ? record.plasticType === selectedType : true;
    const matchesSearch = searchQuery 
      ? record.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.plasticType.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesType && matchesSearch;
  });

  // Calculate total amount collected per plastic type
  const typeTotals = collectionRecords.reduce((acc, record) => {
    const type = record.plasticType;
    if (!acc[type]) acc[type] = 0;
    acc[type] += parseFloat(record.amount);
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="page-container max-w-5xl mx-auto">
      <CollectionPageHeader 
        title="Plastic Collection" 
        description="Record and track your plastic collection efforts"
      />

      {/* Add Collection Form */}
      <RecordCollectionForm onCollectionRecorded={handleNewCollection} />

      {/* Stats Overview */}
      <StatsOverview 
        typeTotals={typeTotals} 
        collectionRecords={collectionRecords} 
      />
      
      {/* View Toggle and Search */}
      <CollectionViewToggle 
        viewMode={viewMode}
        setViewMode={setViewMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Filter by plastic type */}
      <PlasticTypeFilter 
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        plasticTypes={plasticTypes}
      />

      {/* Plastic Types Cards View */}
      {viewMode === 'cards' && (
        <PlasticTypeCards 
          selectedType={selectedType}
          plasticTypes={plasticTypes}
          typeTotals={typeTotals}
          collectionRecords={collectionRecords}
        />
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <CollectionRecordsTable records={filteredRecords} />
      )}
    </div>
  );
};

export default Collection;
