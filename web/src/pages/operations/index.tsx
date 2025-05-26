import Container from "@/components/Container";
import { DataTable } from "../operations/table/dataTable";
import { columns, data } from "../operations/table/columns";
import { Button } from "@/components/ui/button";

const Operations = () => {
  return (
    <Container>
      <div className="flex flex-col gap-5">
       <section className="page-header">
          <h1 className="text-lg font-semibold text-gray-600 flex items-center gap-1">
            Operações <span className="text-sm">(0)</span>
          </h1>

          <Button className="bg-green-600 hover:bg-green-800 px-5 h-8 rounded-md">
            Criar
          </Button>
       </section>
        
        <DataTable columns={columns} data={data} />
      </div>
    </Container>
  );
};

export default Operations;
