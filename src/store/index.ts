import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import {githubReducer} from "./github/github.slice";
import {todosReducer} from "./todo/todo.slice";


export const store = configureStore({
    reducer: {
        [githubApi.reducerPath] : githubApi.reducer,
        github: githubReducer,
        todos: todosReducer,
    },
    middleware: (getDefaultMiddleware) =>   
        getDefaultMiddleware().concat(githubApi.middleware),

})


export type RootState = ReturnType<typeof store.getState>


