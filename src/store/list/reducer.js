import { initialState } from "./initialState";
import { ADD_HERO, DELETE_HERO, UPDATE_HERO, EDIT_HERO, EDIT_TURN, FILTER_LIST, CLEAN_FILTER } from "./const";

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
    case FILTER_LIST: {
      // const atts = [ 'supername', 'realname', 'gender', 'powers', 'comic']
      // return {
      //   ...state,
      //   superHeroesList: state.superHeroesList.map((item) => {
      //     if ( atts.map((elem)=> item[elem].includes(action.payload[elem])).every((bool)=>bool === true)) {
      //         item.hide = false
      //         return item
      //     } else {
      //         item.hide = true
      //         return item
      //     }
      // })
      // }
      return {
        ...state,
        superHeroesList: action.payload
      }
    }
    case CLEAN_FILTER: {
      return {
        ...state,
        superHeroesList: state.superHeroesList.map((item) => {
          item.hide = false
          return item
        })
      }
    }
    default: {
      return state;
    }
  }
}