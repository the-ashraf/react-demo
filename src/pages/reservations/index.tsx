import { Reservation, columns } from "./columns"
import { DataTable } from "./data-table"
import reservations from '@/assets/reservations.json'
function getData(): Reservation[] {
    return reservations
}

export default function Reservations() {
    const data = getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
