import { ADD_HERO, DELETE_HERO, EDIT_HERO } from "./const";

export const addHeroAction = newHero =>
  dispatch => dispatch({ type: ADD_HERO, payload: newHero });

export const deleteHeroAction = index =>
  dispatch => dispatch({ type: DELETE_HERO, payload: index });

export const editHeroAction = hero => 
  dispatch => dispatch({ type: EDIT_HERO, payload: hero });