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
import type { IRent } from "@/interfaces/IRent";



const ModalEditRent = ({
  open,
  setOpen,
  data: rent
}: {
  open: boolean;
  data: IRent;
  setOpen: (open: boolean) => void;
}) => {
 
  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      delivery_date: rent.delivery_date,
      status_id: rent.status_id
     
    }
  });

  const handleSubmitForm = async (data: Partial<IRent>) => {
    try {
      const response = await api.put(`/rents/${rent.id}`, {
       status_id: data.status_id,
         delivery_date: data.delivery_date,
      });
      queryClient.setQueryData(["rents"], (old: any[] = []) => {
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
              <Label htmlFor="delivery_date">Data de Entrega</Label>
              <Input
                id="delivery_date"
                placeholder="Digite uma nova data."
                required
                {...register("delivery_date")}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="status_id">Status</Label>
              <Controller
                name="status_id"
                control={control}
                render={({ field }) => (
                  <Select
                    defaultValue={String(field.value)}
                    onValueChange={field.onChange}
                    required
                  >
                    <SelectTrigger className="w-full" id="status_id">
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

export default ModalEditRent;