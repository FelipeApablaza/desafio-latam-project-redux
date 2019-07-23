import { initialState } from "./initialState";
import { ADD_HERO, DELETE_HERO, UPDATE_HERO, EDIT_HERO, EDIT_TURN } from "./const";

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
    case UPDATE_HERO: {
      return {
        ...state,
        superHeroesList: state.superHeroesList.map((item, index) => {
          if (index !== action.payload.index) return item
          else return action.payload.hero
        }
        )
      }
    }
    case EDIT_HERO: {
      return {
        ...state,
        heroToEdit: action.payload
      }
    }
    case EDIT_TURN: {
      return {
        ...state,
        editOn: action.payload
      }
    }
    default: {
      return state;
    }
  }
}