
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CollectionRecord {
  id: string;
  date: string;
  plasticType: string;
  amount: string;
  location: string;
  tokens: number;
  impact: string;
}

interface CollectionRecordsTableProps {
  records: CollectionRecord[];
}

const CollectionRecordsTable = ({ records }: CollectionRecordsTableProps) => {
  return (
    <div className="glass-card rounded-lg overflow-hidden mb-8">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-white/10">
            <TableHead className="text-gray-400">Date</TableHead>
            <TableHead className="text-gray-400">Type</TableHead>
            <TableHead className="text-gray-400">Amount (kg)</TableHead>
            <TableHead className="text-gray-400">Location</TableHead>
            <TableHead className="text-gray-400 text-right">Tokens</TableHead>
            <TableHead className="text-gray-400 text-right">Impact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record.id} className="border-b border-white/5 hover:bg-white/5">
              <TableCell>{record.date}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <span className={`w-3 h-3 rounded-full bg-${record.plasticType === 'PET' ? 'basketball' : record.plasticType === 'HDPE' ? 'eco' : 'blue-500'}/80 mr-2`}></span>
                  {record.plasticType}
                </div>
              </TableCell>
              <TableCell>{record.amount}</TableCell>
              <TableCell>{record.location}</TableCell>
              <TableCell className="text-right font-medium text-basketball-light">{record.tokens}</TableCell>
              <TableCell className="text-right text-eco">{record.impact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="p-4 border-t border-white/10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default CollectionRecordsTable;
