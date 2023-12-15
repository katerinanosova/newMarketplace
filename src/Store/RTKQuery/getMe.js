
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "dataMe", id: "LIST" };
export const host = "http://127.0.0.1:8090";

export const me = createApi({
    reducerPath: 'me',
    tagTypes: ['dataMe'],
    baseQuery: fetchBaseQuery({baseUrl: `${host}`}),
    endpoints: (build) => ({
        getMe: build.query({
            query: (access) => ({
                url: `user`,
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    Authorization: `bearer ${access}`,
                  },
            }),
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
        changeMe: build.mutation({
            query: (access) => ({
                url: `user`,
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    Authorization: `bearer ${access}`,
                  },
            }),
            invalidatesTags: [DATA_TAG]
        }),
    })
})
export const { useGetMeQuery } = me