import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: 'Adv', id: 'LIST'}


export const advId = createApi({
    reducerPath: 'adv',
    tagTypes: ['AdvId'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/'}),
    endpoints: (build) => ({
        getAdvID: build.query({
            query: (id_adv) => `ads/${id_adv}`,
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
    })
})
export const {useGetAdvIDQuery} = advId