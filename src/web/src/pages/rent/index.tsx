import Container from "@/components/Container"
import { DataTable } from "./table/dataTable"
import { columns } from "./table/columns"
import { useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import  api  from "@/api"
import { Loading } from "@/components/Loading"
import ModalCreateRents from "@/components/modals/ModalCreateRents"

const getRents = async () => {
  const response = await api.get("/rents")
  return response.data
}

const Rent = () => {  
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rents"],
    queryFn: getRents,
  })

  if (isLoading) return <Loading />
  if (isError) {
    toast.error("Erro ao buscar os aluguéis")
    return null
  }

  return (
    <Container>
      <div className="flex flex-col gap-5">
        <section className="page-header">
          <h1 className="text-lg font-semibold text-gray-600 flex items-center gap-1">
            Alugueis <span className="text-sm">({data.length})</span>
          </h1>

          <ModalCreateRents />
        </section>

        <DataTable columns={columns} data={data} />
      </div>
    </Container>
  )
}
export default Rent;
