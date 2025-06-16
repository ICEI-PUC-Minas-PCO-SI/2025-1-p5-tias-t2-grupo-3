import type { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Rent from "..";
import { StatusLabel } from "@/components/StatusLabel";
import { useState } from "react";
import { formatDate } from "@/utils/fomatDate";
import ModalEditRent from "@/components/modals/ModalEditRent";

export type Rent = {
  id: number;
  client_id: number;
  dumpster_id: number;
  residue_id: number;
  rent_date: Date;
  delivery_date:Date;
  status_id:number;
  created_by_user:number;
  updated_by_user:number;
};


export const columns: ColumnDef<Rent>[] = [
  {
    accessorKey: "id",
    
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Código
          <ArrowUpDown />
        </Button>
      )
    },
  },
  {
    accessorKey: "client_id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Codigo do Cliente
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("client_id")}</div>,
  },
  {
    accessorKey: "dumpster_id",
    header: () => <div className="text-center">Codigo de Caçamba</div>,
    cell: ({ row }) => row.getValue("dumpster_id")
  },
  {
    accessorKey: "residue_id",
    header: () => <div className="text-center">Codigo de Residuo</div>,
    cell: ({ row }) => row.getValue("residue_id")
  },
  {
    accessorKey: "rent_date",
    header: () => <div className="text-center">Data de Locação</div>,
    cell: ({ row }) => formatDate(row.getValue("rent_date"))
  },
   {
    accessorKey: "delivery_date",
    header: () => <div className="text-center">Data da Entrega</div>,
    cell: ({ row }) => formatDate(row.getValue("delivery_date"))
  },
  {
    accessorKey: "status_id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("status_id") ? "active" : "inactive"
      return <StatusLabel status={status} />
    }
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setOpen(true)}>Editar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModalEditRent
            open={open}
            setOpen={setOpen}
            data={row.original}
          /> 
        </>
      )
    },
  },
]