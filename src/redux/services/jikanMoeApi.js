import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jikanMoeApi = createApi({
    reducerPath: 'jikanMoeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.jikan.moe/v4',
    }),
    endpoints: (builder) => ({
        getTopAnime: builder.query({query: () => '/top/anime'}),
        getSeasonNow: builder.query({query: () => '/seasons/now'}),
        getFullAnimeData: builder.query({query: (id) => `/anime/${id}/full`}),
        getAnimeByGenre: builder.query({query: (genre) => `/anime?genres=${genre}&order_by=score&sort=desc`}),
    }),
});

export const { 
    useGetTopAnimeQuery,
    useGetSeasonNowQuery,
    useGetFullAnimeDataQuery,
    useGetAnimeByGenreQuery,
} = jikanMoeApi