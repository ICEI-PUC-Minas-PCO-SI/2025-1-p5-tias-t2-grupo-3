import Container from "@/components/Container"
import { DataTable } from "./table/dataTable"
import { columns } from "./table/columns"
import { useQuery } from "@tanstack/react-query"
import { Loading } from "@/components/Loading"
import { toast } from "sonner"
import  api  from "@/api"

const getOperations = async () => {
  const response = await api.get("/operations")
  return response.data
}

const Operations = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["operations"],
    queryFn: getOperations,
  })

  if (isLoading) return <Loading />
  if (isError) {
    toast.error("Erro ao buscar operações")
    return null
  }

  return (
    <Container>
      <div className="flex flex-col gap-5">
        <section className="page-header">
          <h1 className="text-lg font-semibold text-gray-600 flex items-center gap-1">
            Operações <span className="text-sm">({data.length})</span>
          </h1>

    
        </section>

        <DataTable columns={columns} data={data} />
      </div>
    </Container>
  )
};


export default Operations;
