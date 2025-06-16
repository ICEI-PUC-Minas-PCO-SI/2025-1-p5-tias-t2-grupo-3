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
import { useState } from "react";
import { StatusLabel } from "@/components/StatusLabel";
import { formatDate } from "@/utils/fomatDate";
import ModalEditOperations from "@/components/modals/ModalEditOperations"

export type Operations = {
  id: number;
  rent_id: number;
  driver_name: string;
  operation_type: string;
  date: Date;
  location:string;
  destintion:string;
  comments:string;
  status_id:number;
  created_by_user:number;
  updated_by_user:number;
};


export const columns: ColumnDef<Operations>[] = [
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
    accessorKey: "rent_id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Codigo do Aluguel
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("rent_id")}</div>,
  },
  {
    accessorKey: "driver_name",
    header: () => <div className="text-center">Nome do Motorista</div>,
    cell: ({ row }) => row.getValue("driver_name")
  },
  {
    accessorKey: "operation_type",
    header: () => <div className="text-center">Tipo de Operação</div>,
    cell: ({ row }) => row.getValue("operation_type")
  },
  {
    accessorKey: "date",
    header: () => <div className="text-center">Data</div>,
    cell: ({ row }) => formatDate(row.getValue("date"))
  },
   {
    accessorKey: "location",
    header: () => <div className="text-center">Localização</div>,
    cell: ({ row }) => (row.getValue("location"))
  },
   {
    accessorKey: "destination",
    header: () => <div className="text-center">Destino</div>,
    cell: ({ row }) => (row.getValue("destination"))
  },
   {
    accessorKey: "comments",
    header: () => <div className="text-center">Comentarios</div>,
    cell: ({ row }) => (row.getValue("comments"))
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
          <ModalEditOperations
            open={open}
            setOpen={setOpen}
            data={row.original}
          /> 
        </>
      )
    },
  },
]