import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "ads", id: "LIST" };



export const getAllAds = async () => {
    const response = await fetch('http://localhost:8090/ads')
    const data = await response.json();
    console.log(data);
}

export const ads = createApi({
    reducerPath: 'ads',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/'}),
    endpoints: (build) => ({
        getAllAds: build.query({
            query: () => 'ads',
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
        postLike: build.mutation({
            query: (access) => ({
                url: `${access[1].id}/favorite/`,
                method: 'POST',
                headers: access[0],
            }),
            invalidatesTags: [DATA_TAG]
        }),
        postDisLike: build.mutation({
            query: (access) => ({

                url: `${access[1].id}/favorite/`,
                method: 'DELETE',
                headers: access[0],
            }),
            invalidatesTags: [DATA_TAG]
        })
    })
})

export const {useGetAllAdsQuery} = ads