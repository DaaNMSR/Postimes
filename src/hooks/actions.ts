import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { githubAction } from '../store/slices/github.slice';
import { todosActions } from '../store/slices/todo.slice';
import { homeActions } from '../store/slices/home.slice';
import { charactersActions } from '../store/slices/rickandmorty.slice';

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
