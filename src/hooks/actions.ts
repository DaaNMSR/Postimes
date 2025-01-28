import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {githubAction} from "../store/github/github.slice";
import {todosActions} from "../store/todo/todo.slice";
import { homeActions } from "../store/home/home.slice";
import { charactersActions } from "../store/rickandmorty/rickandmorty.slice";

const actions = {
    ...githubAction,
    ...todosActions,
    ...homeActions,
    ...charactersActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}