import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {githubAction} from "../store/github/github.slice";
import {todosActions} from "../store/todo/todo.slice";

const actions = {
    ...githubAction,
    ...todosActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}