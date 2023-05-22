"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Mail, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export type Payment = {
  id: string;
  harga: string;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "status",
    cell: ({ row }) => {
      // const statu = status.find(
      //   (status) => status.value === row.getValue("status")
      // );

      // if (!status) {
      //   return null;
      // }

      const { status } = row.original;
      const bgColor =
        status == "pending"
          ? "bg-yellow-500 hover:bg-yellow-600"
          : status == "success"
          ? "bg-green-500  hover:bg-green-600"
          : "bg-red-500  hover:bg-red-600";

      return <Badge className={bgColor}>{status}</Badge>;
    },
    header: ({ column }) => (
      <Button
        variant={"ghost"}
        onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
      >
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => (
  //     <Button
  //       variant={"ghost"}
  //       onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
  //     >
  //       Email
  //       <ArrowUpDown className="ml-2 h-4 w-4" />
  //     </Button>
  //   ),
  //   cell: ({ row }) => {
  //     const pembayaran = row.original;
  //     return (
  //       <div className="flex gap-x-2">
  //         <Mail className="w-5" />
  //         {pembayaran.email}
  //       </div>
  //     );
  //   },
  // },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },

  {
    accessorKey: "harga",
    header: ({ column }) => (
      <Button
        variant={"ghost"}
        onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
      >
        Harga
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const jumlah = parseFloat(row.getValue("harga"));
      const format = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(jumlah);
      return <div className="text-right font-medium">{format}</div>;
    },
  },
  {
    id: "action",
    cell: ({ row }) => {
      return <DataTableRowActions row={row} />;
      // const pembayaran = row.original;
      // const payment = row.original;
      // return (
      //   <DropdownMenu>
      //     <DropdownMenuTrigger asChild>
      //       <Button variant="ghost" className="h-8 w-8 p-0">
      //         <span className="sr-only">Open menu</span>
      //         <MoreHorizontal className="h-4 w-4" />
      //       </Button>
      //     </DropdownMenuTrigger>
      //     <DropdownMenuContent align="end">
      //       <DropdownMenuLabel>Actions</DropdownMenuLabel>
      //       <DropdownMenuItem
      //         onClick={() => navigator.clipboard.writeText(pembayaran.id)}
      //       >
      //         Copy Payment ID
      //       </DropdownMenuItem>
      //       <DropdownMenuItem
      //         onClick={() => navigator.clipboard.writeText(pembayaran.status)}
      //       >
      //         Copy Status
      //       </DropdownMenuItem>
      //       <DropdownMenuItem
      //         onClick={() => navigator.clipboard.writeText(payment.harga)}
      //       >
      //         Copy Amount
      //       </DropdownMenuItem>
      //       <DropdownMenuItem
      //         onClick={() => navigator.clipboard.writeText(pembayaran.email)}
      //       >
      //         Copy Email
      //       </DropdownMenuItem>

      //       <DropdownMenuSeparator />
      //       <DropdownMenuItem>View customer</DropdownMenuItem>
      //       <DropdownMenuItem>View payment details</DropdownMenuItem>
      //     </DropdownMenuContent>
      //   </DropdownMenu>
      // );
    },
  },
];
