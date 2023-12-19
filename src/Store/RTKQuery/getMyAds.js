import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "myAdvs", id: "LIST" };
export const myAds = createApi({
    reducerPath: 'myAds',
    tagTypes: ['myAds'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/'}),
    endpoints: (build) => ({
        getAllMyAds: build.query({
                query: (access) => ({
                  url: `ads/me`,
                  method: 'GET',
                  headers: {
                    'content-type': 'application/json',
                    Authorization: `bearer ${access}`,
                  },
                }),
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
    })
})

export const {useGetAllMyAdsQuery} = myAds
// 'content-type': 'multipart/form-data'