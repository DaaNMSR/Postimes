import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { ServerResponseRickAndMorty } from "../../models/models";


export const rickandmortyApi = createApi({
    reducerPath: "rickandmorty/api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        getCharacters: build.query({
            query: (search: string) => ({
                url: 'character',
                params: {
                    name: search,
                },
            }),
            transformResponse: (response:ServerResponseRickAndMorty) => response,
        }),
    })
})


export const { useGetCharactersQuery } = rickandmortyApi;



