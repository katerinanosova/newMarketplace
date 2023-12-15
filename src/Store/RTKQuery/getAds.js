
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "ads", id: "LIST" };



export const getAllAds = async () => {
    const response = await fetch('http://localhost:8090/ads')
    const data = await response.json();
    console.log(data);
}

export const ads = createApi({
    reducerPath: 'ads',
    tagTypes: ['dataAds'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/'}),
    endpoints: (build) => ({
        getAllAds: build.query({
            query: () => 'ads',
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
        addAds: build.mutation({
            query: (access) => ({
                url: `ads`,
                method: 'POST',
                headers: access,
            }),
            invalidatesTags: [DATA_TAG]
        }),
    })
})
export const {useGetAllAdsQuery} = ads