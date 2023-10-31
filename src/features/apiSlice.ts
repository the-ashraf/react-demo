import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const reservationsApi = createApi({
    reducerPath: "reservationsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gist.githubusercontent.com/Shaker-Hamdi/ea1712b0a71b3b62b8ee07227607a5d3/raw/6530e16c5aa203c1a1c41e5fb73595870407cb56/'
    }),
    endpoints: (builder) => ({
        getALlReservations: builder.query<any,void>({
            query: () => 'serverResponse.json'
        })
    })
});

export const { useGetALlReservationsQuery } = reservationsApi