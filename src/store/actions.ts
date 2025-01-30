import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { githubAction } from './slices/github.slice';
import { todosActions } from './slices/todo.slice';
import { homeActions } from './slices/home.slice';
import { charactersActions } from './slices/rickandmorty.slice';

const actions = {
  ...githubAction,
  ...todosActions,
  ...homeActions,
  ...charactersActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
