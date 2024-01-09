import { Transactions } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button";
import { formatDate } from "@/lib/utils";

export const columns: ColumnDef<Transactions>[] = [
    {
        accessorKey: "orderId",
        header: "Order ID",
        cell: ({ row }) => {
            return(
                <h1 className="text-[#146EB4] font-semibold">{row.original.orderId}</h1>
            )
        }
    },
    {
        accessorKey: "orderDate",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                className="font-bold"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Order date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell: ({ row }) => {
            return(
                <h1 className="ml-5">{formatDate(row.original.orderDate)}</h1>
            )
        }
    },
    {
        accessorKey: "orderAmt",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                className="font-bold"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Order amount
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell: ({ row }) => {
            return(
                <h1 className="ml-10">₹{row.original.orderAmt}</h1>
            )
        }
    },
    {
        accessorKey: "transactionFees",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                className="font-bold"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Transaction Fees
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell: ({ row }) => {
            return(
                <h1 className="ml-16">₹{row.original.transactionFees}</h1>
            )
        }
    }
]