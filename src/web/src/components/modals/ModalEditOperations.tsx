import api from "@/api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
import { queryClient } from "@/lib/react-query";
import type {IOperation} from "@/interfaces/IOperation";

const ModalEditOperations = ({
  open,
  setOpen,
  data: operation
}: {
  open: boolean;
  data: IOperation;
  setOpen: (open: boolean) => void;
}) => {
 
  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      date: operation.date,
      location: operation.location,
      destination: operation.destination,
     comments: operation.comments,
     status_id: operation.status
    }
  });

  const handleSubmitForm = async (data: Partial<IOperation>) => {
    try {
      const response = await api.put(`/operations/${operation.id}`, {
        status: data.status == "1" ? true : false,
        date: operation.Date,
        location: operation.location,
        destination: operation.destination,
        comments: operation.comments,
        status_id: operation.status
      });
      queryClient.setQueryData(["operations"], (old: any[] = []) => {
        return old.map((item) => {
          if (item.id === response.data.id) {
            return response.data;
          }
          return item;
        });
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <DialogHeader>
            <DialogTitle>Editar Operação</DialogTitle>
            <DialogDescription>
              Clique em salvar quando você terminar.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-3">
            <div className="grid gap-3">
              <Label htmlFor="date">Data</Label>
              <Input
                id="date"
                placeholder="Digite uma nova data."
                required
                {...register("date")}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="location">Localização</Label>
              <Input
                id="location"
                placeholder="Digite a localização atual da caçamba..."
                required
                {...register("location")}
              />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="destination">Destino</Label>
              <Input
                id="destination"
                placeholder="Digite o novo destino."
                required
                {...register("destination")}
              />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="comments">Comentario</Label>
              <Input
                id="comments"
                placeholder="Digite a nova localização"
                required
                {...register("comments")}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="status">Status</Label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select
                    defaultValue={field.value == true ? "1" : "0"}
                    onValueChange={field.onChange}
                    required
                  >
                    <SelectTrigger className="w-full" id="status">
                      <SelectValue placeholder="Selecione o Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1">Ativo</SelectItem>
                        <SelectItem value="0">Inativo</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditOperations;