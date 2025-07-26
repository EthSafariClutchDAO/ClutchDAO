
import { Recycle } from 'lucide-react';

interface CollectionPageHeaderProps {
  title: string;
  description: string;
}

const CollectionPageHeader = ({ title, description }: CollectionPageHeaderProps) => {
  return (
    <div className="mb-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="rounded-full bg-basketball/20 p-3">
          <Recycle className="h-10 w-10 text-basketball" />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default CollectionPageHeader;
