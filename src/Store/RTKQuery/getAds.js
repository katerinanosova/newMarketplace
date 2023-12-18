
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { getAccessTokenLocal } from '../../helpers/token';
const DATA_TAG = { type: "dataAds", id: "LIST" };
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
            query: (data) => ({
                url: `ads`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `bearer ${data.access}`,
                },
                body: data.formData,
            }),
            invalidatesTags: [DATA_TAG]
        }),
    })
})

export const {useGetAllAdsQuery, useAddAdsMutation} = ads

