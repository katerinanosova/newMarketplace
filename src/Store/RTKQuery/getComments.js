
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "Commets", id: "LIST" };
export const comments = createApi({
    reducerPath: 'comments',
    tagTypes: ['dataComments'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/ads/'}),
    endpoints: (build) => ({
        getComments: build.query({
          query: (idProduct) => ({
            url: `${idProduct}/comments`,
            method: 'GET',
            headers: {
              'content-type': 'application/json',
            },
          }),
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
    })
})

export const {useGetCommentsQuery} = comments