import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import {githubReducer} from "./github/github.slice";
import {todosReducer} from "./todo/todo.slice";
import { homeReducer } from "./home/home.slice";
import { rickandmortyApi } from "./rickandmorty/rickandmorty.api";


export const store = configureStore({
    reducer: {
        [githubApi.reducerPath] : githubApi.reducer,
        github: githubReducer,
        todos: todosReducer,
        technologies: homeReducer,
        [rickandmortyApi.reducerPath] : rickandmortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>   
        getDefaultMiddleware()
            .concat(githubApi.middleware)
            .concat(rickandmortyApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>


