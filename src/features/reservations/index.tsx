import { useGetALlReservationsQuery } from '../apiSlice.ts';
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default function Reservations() {
    const { data, isLoading } = useGetALlReservationsQuery()

    if (isLoading) {
        return (<h1>loading...</h1>)
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data.reservations} />
        </div>
    )
}
