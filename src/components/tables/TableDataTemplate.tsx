import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "../ui/CheckBox";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            <Checkbox />
          </TableHead>
          <TableHead className="text-center text-black font-normal text-[13px] capitalize after:absolute relative  after:left-0  after:h-7 after:w-[1px] after:bg-[#D8D8D8]">
            Status
          </TableHead>
          <TableHead className="text-center text-black font-normal text-[13px] capitalize after:absolute relative  after:left-0  after:h-7 after:w-[1px] after:bg-[#D8D8D8]">
            Date inscription
          </TableHead>
          <TableHead className="text-center text-black font-normal text-[13px] capitalize after:absolute relative  after:left-0  after:h-7 after:w-[1px] after:bg-[#D8D8D8]">
            Nom et Prénom
          </TableHead>
          <TableHead className="text-center text-black font-normal text-[13px] capitalize after:absolute relative  after:left-0  after:h-7 after:w-[1px] after:bg-[#D8D8D8]">
            Adresse e-mail
          </TableHead>
          <TableHead className="text-center text-black font-normal text-[13px] capitalize after:absolute relative  after:left-0  after:h-7 after:w-[1px] after:bg-[#D8D8D8]">
            Nombre de commandes
          </TableHead>
          <TableHead className="text-center text-black font-normal text-[13px] capitalize after:absolute relative  after:left-0  after:h-7 after:w-[1px] after:bg-[#D8D8D8]">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableHead className="w-[100px]">
              <Checkbox />
            </TableHead>
            <TableCell className="text-center text-black font-normal text-[13px]">
              {invoice.invoice}
            </TableCell>
            <TableCell className="text-center text-black font-normal text-[13px]">
              {invoice.paymentStatus}
            </TableCell>
            <TableCell className="text-center text-black font-normal text-[13px]">
              {invoice.paymentMethod}
            </TableCell>
            <TableCell className="text-center text-black font-normal text-[13px]">
              {invoice.paymentMethod}
            </TableCell>
            <TableCell className="text-center text-black font-normal text-[13px]">
              {invoice.paymentMethod}
            </TableCell>
            <TableCell className="text-center text-black font-normal text-[13px]">
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
