import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Delete,
  DeleteIcon,
  GrabIcon,
  LucideDelete,
  NotebookPen,
} from "lucide-react";

const TransactionTable = ({ searchTerm, filters }) => {
  // TODO: Implement filtering logic based on searchTerm and filters
  // For now, we'll just pass the props through
  console.log("Search term:", searchTerm, "Filters:", filters);

  return (
    <div className="p-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Account</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {/* Custom Data */}
            <TableCell className="font-medium">Dosa</TableCell>
            <TableCell>40.00</TableCell>
            <TableCell>Expense</TableCell>
            <TableCell>Food</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>10-04-25</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2 text-muted-foreground">
                <NotebookPen />
                <LucideDelete />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
