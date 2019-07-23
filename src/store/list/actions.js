import { ADD_HERO, DELETE_HERO, UPDATE_HERO, EDIT_HERO, EDIT_TURN, FILTER_LIST, CLEAN_FILTER } from "./const";

export const addHeroAction = newHero =>
  dispatch => dispatch({ type: ADD_HERO, payload: newHero });

export const deleteHeroAction = index =>
  dispatch => dispatch({ type: DELETE_HERO, payload: index });

export const updateHeroAction = hero =>
  dispatch => dispatch({ type: UPDATE_HERO, payload: hero });

export const editHeroAction = hero =>
  dispatch => dispatch({ type: EDIT_HERO, payload: hero });

export const editTurnAction = bool =>
  dispatch => dispatch({ type: EDIT_TURN, payload: bool })

export const filterListAction = list => 
  dispatch => dispatch({ type: FILTER_LIST, payload: list })

export const cleanFilterAction = () =>
  dispatch => dispatch({ type: CLEAN_FILTER })