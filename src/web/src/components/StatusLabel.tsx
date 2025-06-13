type StatusType = 'active' | 'inactive';

const statuses = {
  active: { label: "Ativo", color: "bg-green-500"},
  inactive: { label: "Inativo", color: "bg-red-500"},
}

export const StatusLabel = ({ status }: { status: StatusType }) => {
  return (
    <div className="flex items-center gap-2 justify-center ">
      <span className={`w-2 h-2 rounded-full ${statuses[status].color}`}></span>
      <span className="text-sm">{statuses[status].label}</span>
    </div>
  )
}