import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { useState } from "react";
import api from "@/api";
import { queryClient } from "@/lib/react-query";
import type { IDumpsters } from "@/interfaces/IDumpsters";
import { toast } from "sonner";

const ModalCreateDumpsters = () => {
  const { handleSubmit, register, control, reset } = useForm({
    defaultValues: {
      status: true,
      identifier_number: "",
      current_location: "",
      created_by_user: 2,
      updated_by_user: 2,
    },
  });
  const [open, setOpen] = useState(false);

  const handleSubmitForm = async (data: Partial<IDumpsters>) => {
    try {
      const response = await api.post("/dumpsters", {
        status: data.status == "1" ? true : false,
        identifier_number: data.identifier_number,
        current_location: data.current_location,
        created_by_user: data.created_by_user,
        updated_by_user: data.updated_by_user,
      });

      queryClient.setQueryData(["dumpsters"], (old: any[] = []) => {
        return [...old, response.data];
      });
      reset();
      toast.success("Caçamba criada com sucesso"); 
      setOpen(false);
    } catch (error) {
      toast.error("Erro ao criar a caçamba");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-green-600 hover:bg-green-800 text-white hover:text-white"
          variant="outline"
          onClick={() => setOpen(true)}
        >
          Criar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <DialogHeader>
            <DialogTitle>Criar Caçamba</DialogTitle>
            <DialogDescription>
              Clique em salvar quando você terminar.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-3">
            <div className="grid gap-3">
              <Label htmlFor="identifier_number">Identificador</Label>
              <Input
                id="identifier_number"
                placeholder="Digite o identificador da caçamba..."
                required
                {...register("identifier_number")}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="current_location">Localização</Label>
              <Input
                id="current_location"
                placeholder="Digite a localização atual da caçamba..."
                required
                {...register("current_location")}
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

export default ModalCreateDumpsters;
