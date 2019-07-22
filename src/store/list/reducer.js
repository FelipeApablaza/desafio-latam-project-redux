import { initialState } from "./initialState";
import { ADD_HERO, DELETE_HERO, EDIT_HERO } from "./const";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HERO: {
      return {
        ...state,
        superHeroesList: state.superHeroesList.concat(action.payload)
      }
    }
    case DELETE_HERO: {
      return {
        ...state,
        superHeroesList: state.superHeroesList.filter((item, index) =>
           index !== action.payload
        )
      }
    }
    case EDIT_HERO: {
      return {
        ...state,
        editHero: action.payload
      }
    }
    default: {
      return state;
    }
  }
}